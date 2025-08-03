import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import ts from "typescript";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js, ts },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },

    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-const-assign": "warn",
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
