// http://eslint.org/docs/user-guide/configuring
module.exports = {
    extends: [
        require.resolve("./rules/base"),
        "prettier",
        "prettier/unicorn",
        require.resolve("./rules/prettier"),
    ],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: "module",
    },
};
