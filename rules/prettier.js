const { error, off } = require("./_rule");

module.exports = {
    plugins: ["prettier", "prettier-plugin-organize-imports"],
    rules: {
        "prettier/prettier": [
            error,
            {
                semi: false,
                singleQuote: true,
                trailingComma: "es5",
                tabWidth: 4,
            },
        ],
        "import/order": off,
    },
};
