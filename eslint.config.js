import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import ts from "typescript";
import prettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      "@eslint/js": js,
      "@typescript-eslint": tseslint.plugin,
      react: pluginReact,
    },

    languageOptions: {
      globals: globals.browser,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
      prettier,
    ],

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
