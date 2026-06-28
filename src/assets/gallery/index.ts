const images = import.meta.glob<{ default: ImageMetadata }>("./*.jpg", {
  eager: true,
});

export const galleryImages: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(images).map(([path, mod]) => [
    path.split("/").pop()!,
    mod.default,
  ]),
);
