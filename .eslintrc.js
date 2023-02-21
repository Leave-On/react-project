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
    "overrides": [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                "i18next/no-literal-string": 'off',
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
        "i18next"
    ],
    "rules": {
        "i18next/no-literal-string": [
            'error', 
            {
                markupOnly: true, 
                ignoreAttribute: ['data-tetid', 'to']
            }
        ],
        "max-len": ['error', { ignoreComments: true, "code": 100 }],
        "object-curly-spacing": [ 'error', 'always' ],
        "react/display-name": ['off'],
        "@typescript-eslint/ban-ts-comment": "warn"
    }
}
