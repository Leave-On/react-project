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
        "plugin:i18next/recommended"
    ],
    "globals": {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true
    },
    "overrides": [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                "i18next/no-literal-string": 'off',
                "max-len": 'off'
            }

        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "i18next",
        "react-hooks",
        "relative-path-checker"
    ],
    "rules": {
        "i18next/no-literal-string": [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-tetid', 'to']
            }
        ],
        "max-len": ['error', { ignoreComments: true, "code": 150 }],
        "object-curly-spacing": [ 'error', 'always' ],
        "react/display-name": ['off'],
        "@typescript-eslint/ban-ts-comment": "warn",
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
        "indent": ["error", 4],
        "relative-path-checker/path-checker": "error"
    }
}
