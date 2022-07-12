module.exports = {
    "env": {
        "browser": true,
        // "es2021": true
    },
    "parser": "@babel/eslint-parser",
    "extends": [
        "plugin:json/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "import/prefer-default-export": "off",
        "import/no-useless-path-segments": 0,
        "camelcase": 1,
        "quotes": 0,
        "comma-dangle": 0,
        "no-useless-escape": 0,
        "linebreak-style": 0,
        "operator-linebreak": 0,
        "no-unused-vars": 0,
        "no-tabs": 0,
        "max-len": [
            "error",
            {
                "code": 850
            }
        ]
    }
};
