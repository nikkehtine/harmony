import eslint from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import * as pluginImportX from "eslint-plugin-import-x";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
    eslint.configs.recommended,
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: { globals: globals.browser },
    },
    pluginImportX.flatConfigs.recommended,
    pluginImportX.flatConfigs.typescript,
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        // ignores: ["eslint.config.js"],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
        },
        rules: {
            "import-x/order": [
                "warn",
                {
                    "newlines-between": "always",
                    alphabetize: { order: "asc", caseInsensitive: true },
                },
            ],
            "no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                },
            ],
            "react/react-in-jsx-scope": "off",
        },
    },
    eslintConfigPrettier,
]);
