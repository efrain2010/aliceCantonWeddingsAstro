import https from "https";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "..");
const IMAGES_DIR = path.join(PROJECT_ROOT, "public", "images");

// Ensure images directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

const HOMEPAGE_URL = "https://alicecantonweddings.com/";
const downloadedFiles = new Map(); // filename -> { url, size, status }
const skippedFiles = new Set();

/**
 * Convert a URL to a descriptive kebab-case filename
 */
function urlToFilename(urlStr) {
  try {
    const url = new URL(urlStr);
    let pathname = url.pathname.split("/").pop() || "image";

    // Remove query params if present
    pathname = pathname.split("?")[0];

    // If filename is just a number or ID, use a more descriptive approach
    if (/^\d+$/.test(pathname)) {
      pathname = `image-${pathname}`;
    }

    // Convert to kebab-case and keep extension
    const [name, ext] = pathname.split(".");
    if (!ext) {
      return name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
    }
    return `${name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")}.${ext.toLowerCase()}`;
  } catch (e) {
    return null;
  }
}

/**
 * Fetch a file via HTTP/HTTPS
 */
function fetchUrl(urlStr) {
  return new Promise((resolve) => {
    const protocol = urlStr.startsWith("https") ? https : http;

    protocol
      .get(urlStr, { timeout: 10000 }, (res) => {
        let data = Buffer.alloc(0);

        res.on("data", (chunk) => {
          data = Buffer.concat([data, chunk]);
        });

        res.on("end", () => {
          resolve({ status: res.statusCode, data, headers: res.headers });
        });
      })
      .on("error", (err) => {
        resolve({ status: 0, data: null, error: err.message });
      });
  });
}

/**
 * Download and save an image
 */
async function downloadImage(urlStr, sourceContext) {
  try {
    // Validate URL
    if (!urlStr || typeof urlStr !== "string") return null;

    // Skip data URLs and fragments
    if (urlStr.startsWith("data:") || urlStr.startsWith("#")) return null;

    // Make absolute URL
    const absoluteUrl = new URL(urlStr, HOMEPAGE_URL).href;

    // Generate filename
    const filename = urlToFilename(absoluteUrl);
    if (!filename) return null;

    const filepath = path.join(IMAGES_DIR, filename);

    // Skip if already exists
    if (fs.existsSync(filepath)) {
      skippedFiles.add(filename);
      console.log(`  SKIP: ${filename} (already exists)`);
      return filename;
    }

    // Fetch the file
    const { status, data, error } = await fetchUrl(absoluteUrl);

    if (error || !data) {
      console.log(`  FAIL: ${filename} (${error || "unknown error"})`);
      return null;
    }

    if (status < 200 || status >= 300) {
      console.log(`  FAIL: ${filename} (HTTP ${status})`);
      return null;
    }

    // Save the file
    fs.writeFileSync(filepath, data);
    const size = data.length;
    downloadedFiles.set(filename, { url: absoluteUrl, size, status });
    console.log(`  DONE: ${filename} (HTTP ${status}, ${size} bytes)`);

    return filename;
  } catch (err) {
    console.log(`  ERROR: Failed to process ${urlStr}: ${err.message}`);
    return null;
  }
}

/**
 * Extract URLs from HTML
 */
function extractImageUrls(html) {
  const urls = [];

  // Extract <img src>
  const imgSrcRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  let match;
  while ((match = imgSrcRegex.exec(html)) !== null) {
    urls.push({ url: match[1], source: "img-src" });
  }

  // Extract <img srcset>
  const imgSrcsetRegex = /<img[^>]+srcset=["']([^"']+)["']/gi;
  while ((match = imgSrcsetRegex.exec(html)) !== null) {
    // srcset can have multiple URLs separated by commas
    match[1].split(",").forEach((entry) => {
      const url = entry.trim().split(/\s+/)[0];
      if (url) urls.push({ url, source: "img-srcset" });
    });
  }

  // Extract og:image
  const ogImageRegex =
    /<meta\s+property=["']og:image["'][^>]+content=["']([^"']+)["']/gi;
  while ((match = ogImageRegex.exec(html)) !== null) {
    urls.push({ url: match[1], source: "og:image" });
  }

  // Extract CSS background-image from inline styles
  const inlineStyleRegex = /style=["']([^"']+)["']/gi;
  while ((match = inlineStyleRegex.exec(html)) !== null) {
    const styleContent = match[1];
    const bgRegex = /background(?:-image)?\s*:\s*url\(["']?([^)'"]+)["']?\)/gi;
    let bgMatch;
    while ((bgMatch = bgRegex.exec(styleContent)) !== null) {
      urls.push({ url: bgMatch[1], source: "inline-style" });
    }
  }

  // Extract <link href> for stylesheets (we'll process these separately)
  const linkRegex = /<link[^>]+href=["']([^"']+\.css)["']/gi;
  while ((match = linkRegex.exec(html)) !== null) {
    urls.push({ url: match[1], source: "stylesheet", isStylesheet: true });
  }

  return urls;
}

/**
 * Extract image URLs from a CSS file
 */
function extractUrlsFromCSS(css) {
  const urls = [];
  const bgRegex = /background(?:-image)?\s*:\s*url\(["']?([^)'"]+)["']?\)/gi;
  let match;
  while ((match = bgRegex.exec(css)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

/**
 * Check if file is valid (not broken)
 */
function isValidImage(filepath) {
  try {
    const stat = fs.statSync(filepath);

    // Check size (very small files are likely errors)
    if (stat.size < 1024) {
      // < 1 KB
      return false;
    }

    // Read first few bytes to check for HTML error pages
    const buffer = Buffer.alloc(Math.min(1024, stat.size));
    const fd = fs.openSync(filepath, "r");
    fs.readSync(fd, buffer, 0, buffer.length);
    fs.closeSync(fd);

    const content = buffer.toString("utf-8", 0, 512);
    if (
      content.toLowerCase().includes("<!doctype") ||
      content.toLowerCase().includes("<html")
    ) {
      return false; // Likely HTML error page
    }

    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Find a suitable replacement image
 */
function findReplacementImage(brokenFilename) {
  // Preference order: existing files, then downloaded working files
  const existingFiles = ["parallax-2.jpg", "img-10.jpg", "img-13.jpg"];
  const workingDownloaded = Array.from(downloadedFiles.keys());

  const candidates = [...workingDownloaded, ...existingFiles];

  for (const candidate of candidates) {
    if (candidate !== brokenFilename) {
      const candidatePath = path.join(IMAGES_DIR, candidate);
      if (fs.existsSync(candidatePath) && isValidImage(candidatePath)) {
        return candidate;
      }
    }
  }

  return null;
}

async function main() {
  console.log("Fetching homepage HTML...");
  const { data: htmlData, status } = await fetchUrl(HOMEPAGE_URL);

  if (!htmlData || status !== 200) {
    console.error(`Failed to fetch homepage: HTTP ${status}`);
    process.exit(1);
  }

  const html = htmlData.toString("utf-8");
  console.log(`Homepage fetched (${htmlData.length} bytes)\n`);

  // Extract image URLs
  console.log("Extracting image URLs...");
  const imageUrls = extractImageUrls(html);
  const stylesheetUrls = imageUrls.filter((u) => u.isStylesheet);
  const regularUrls = imageUrls.filter((u) => !u.isStylesheet);

  console.log(`Found ${regularUrls.length} image URLs in HTML\n`);

  // Fetch stylesheets for background images
  const stylesheetImageUrls = [];
  for (const sheet of stylesheetUrls) {
    console.log(`Fetching stylesheet: ${sheet.url}`);
    const { data: cssData } = await fetchUrl(
      new URL(sheet.url, HOMEPAGE_URL).href,
    );
    if (cssData) {
      const cssText = cssData.toString("utf-8");
      const urls = extractUrlsFromCSS(cssText);
      stylesheetImageUrls.push(...urls);
      console.log(`  Found ${urls.length} image URLs in stylesheet\n`);
    }
  }

  // Combine all URLs and deduplicate
  const allUrls = [...regularUrls.map((u) => u.url), ...stylesheetImageUrls];
  const uniqueUrls = [...new Set(allUrls)];

  console.log(`Total unique image URLs: ${uniqueUrls.length}\n`);
  console.log("Downloading images...");

  // Download each image
  for (const url of uniqueUrls) {
    await downloadImage(url, "extracted");
  }

  console.log(`\n✓ Downloaded ${downloadedFiles.size} new images`);
  console.log(`✓ Skipped ${skippedFiles.size} existing images\n`);

  // Validate downloaded files
  console.log("Validating downloaded files...");
  const brokenFiles = [];
  const substitutions = new Map();

  for (const [filename, info] of downloadedFiles) {
    const filepath = path.join(IMAGES_DIR, filename);
    if (!isValidImage(filepath)) {
      brokenFiles.push(filename);
      console.log(`  BROKEN: ${filename} (${info.size} bytes)`);
    }
  }

  // Replace broken files
  if (brokenFiles.length > 0) {
    console.log(`\nReplacing ${brokenFiles.length} broken files...`);
    for (const brokenFile of brokenFiles) {
      const replacement = findReplacementImage(brokenFile);
      if (replacement) {
        const brokenPath = path.join(IMAGES_DIR, brokenFile);
        const replacementPath = path.join(IMAGES_DIR, replacement);
        fs.copyFileSync(replacementPath, brokenPath);
        substitutions.set(brokenFile, replacement);
        console.log(`  ${brokenFile} -> ${replacement}`);
      }
    }
  }

  console.log(`\nFinal image count: ${fs.readdirSync(IMAGES_DIR).length}`);
  console.log("Done!");

  // Return stats for manifest creation
  return {
    downloadedCount: downloadedFiles.size,
    skippedCount: skippedFiles.size,
    brokenCount: brokenFiles.length,
    substitutions,
  };
}

main().catch(console.error);
