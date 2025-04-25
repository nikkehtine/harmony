import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import pluginImport from "eslint-plugin-import";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

const jsxRuntime = {
    rules: {
        "react/react-in-jsx-scope": 0,
        "react/jsx-uses-react": 0,
    },
};

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        plugins: { js },
        extends: ["js/recommended"],
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: { globals: globals.browser },
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    jsxRuntime,
    pluginImport.flatConfigs.recommended,
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        plugins: { pluginImport },
        rules: {
            "import/order": [
                "warn",
                {
                    "newlines-between": "always",
                    alphabetize: { order: "asc", caseInsensitive: true },
                },
            ],
        },
    },
    {
        files: ["**/*.{ts,tsx}"],
        plugins: { pluginImport },
        extends: [pluginImport.flatConfigs.typescript],
    },
]);
