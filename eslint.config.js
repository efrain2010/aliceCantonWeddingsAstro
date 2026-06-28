import eslintPluginAstro from "eslint-plugin-astro";

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "astro/sort-attributes": "warn",
      "astro/semi": "warn",
      "no-unused-vars": "error",
      "no-nested-ternary": "error",
    },
  },
];
