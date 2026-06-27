import eslintPluginAstro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: tsParser,
    },
  },
  {
    rules: {
      "astro/sort-attributes": "warn",
      "astro/semi": "warn",
    },
  },
];
