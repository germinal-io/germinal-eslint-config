const { error, off } = require("./_rule");

module.exports = {
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      error,
      {
        semi: false,
        singleQuote: true,
        trailingComma: "es5",
        tabWidth: 2,
      },
    ],
    "import/order": off,
  },
};
