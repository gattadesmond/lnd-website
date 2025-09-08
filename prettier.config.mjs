import { merge } from "lodash-es";

/**@type {import('prettier-plugin-tailwindcss').PluginOptions} */
const tailwindConfig = {
  tailwindStylesheet: "./src/styles/globals.css",
  tailwindPreserveWhitespace: false,
};

/**@type {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} */
const importOrderConfig = {
  importOrder: [
    "<BUILTIN_MODULES>",
    "",
    "^react/(.*)$",
    "^next/(.*)$",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/(.*)$",
    "",
    "^[./]",
  ],
  importOrderTypeScriptVersion: "5.0.0",
};

/**@type {import("prettier").Config} */
const prettierConfig = {
  endOfLine: "lf",
  printWidth: 80,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

export default merge(prettierConfig, importOrderConfig, tailwindConfig);
