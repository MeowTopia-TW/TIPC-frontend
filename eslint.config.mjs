import eslintPluginNext from "@next/eslint-plugin-next";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default [
  {
    ignores: [".next/", "node_modules/"],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginNext.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 2021,
    },
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
  // Allow Next.js to manage next-env.d.ts which may contain a triple-slash reference.
  // Disable the triple-slash rule for that file only so it doesn't cause lint failures
  // when Next regenerates it during `npm run dev`.
  {
    files: ["next-env.d.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];
