import eslintPluginAstro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "astro/sort-attributes": "warn",
      "astro/semi": "warn",
      "no-unused-vars": "error",
    },
  },
];
