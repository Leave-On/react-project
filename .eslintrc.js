module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/jsx-runtime",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended",
        "prettier"
    ],
    "globals": {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true
    },
    "overrides": [{
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            "i18next/no-literal-string": 'off',
            "max-len": 'off'
        }
    }],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["react", "@typescript-eslint", "i18next", "react-hooks", "relative-path-checker", "unused-imports"],
    "rules": {
        "i18next/no-literal-string": ['error', {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to', 'target', 'justify', 'align', 'direction', 'gap']
        }],
        "max-len": ['error', {
            ignoreComments: true,
            "code": 150
        }],
        "react/display-name": ['off'],
        "@typescript-eslint/ban-ts-comment": "warn",
        "react-hooks/rules-of-hooks": "error",
        // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error",
        "relative-path-checker/path-checker": ["error", {
            alias: '@'
        }],
        "relative-path-checker/control-layer-imports": ['error', {
            alert: '@',
            ignoreImportPatterns: ['**/StoreProvider', '**/testing']
        }],
        "relative-path-checker/public-api-imports": ["error", {
            alias: '@',
            testFilesPatterns: ['**/*.test.*', '**/StoreDecorator.tsx', '**/*.stories.*']
        }],
        "unused-imports/no-unused-imports": "error",
        "react/jsx-max-props-per-line": [1, {"maximum": 3}]

    }
};