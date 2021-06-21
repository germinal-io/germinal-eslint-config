const { error, off } = require("./_rule");

module.exports = {
  plugins: ["prettier"],
  rules: {
    "import/order": off,
    "prettier/prettier": [
      error,
      {
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: "es5",
      },
    ],
  },
};
