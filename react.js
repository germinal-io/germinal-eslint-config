// http://eslint.org/docs/user-guide/configuring
module.exports = {
    extends: [require.resolve("./rules/react"), "prettier/react"],
    settings: {
        react: {
            version: "detect",
        },
    },
};
