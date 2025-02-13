import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
//deepseek给的设置，有时间可以研究一下eslint
// {
//   "extends": [
//     "react-app",
//     "react-app/jest",
//     "prettier"
//   ],
//   "rules": {
//     "react-hooks/exhaustive-deps": "warn"
//   }
// }