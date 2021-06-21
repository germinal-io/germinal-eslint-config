const { off, warn, error } = require("./_rule");
const { rules: baseRules } = require("./base");
const duplicateTSC = off; // = "off because tsc already checks that"

// https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
const ruleDisabled = {
  camelcase: off,
  "constructor-super": off,
  "getter-return": off,
  "import/default": duplicateTSC,
  "import/named": duplicateTSC,
  "import/namespace": duplicateTSC,
  "import/no-named-as-default-member": duplicateTSC,
  "import/no-unresolved": duplicateTSC,
  "no-array-constructor": off,
  "no-const-assign": off,
  "no-dupe-args": off,
  "no-dupe-class-members": off,
  "no-dupe-keys": off,
  "no-empty-function": off, // https://github.com/typescript-eslint/typescript-eslint/issues/239
  "no-func-assign": off,
  "no-import-assign": off,
  "no-inner-declarations": off,
  "no-new-symbol": off,
  "no-obj-calls": off,
  "no-redeclare": off,
  "no-setter-return": off,
  "no-shadow": off, // https://github.com/typescript-eslint/typescript-eslint/issues/2483
  "no-this-before-super": off,
  "no-undef": off,
  "no-unreachable": off,
  "no-unsafe-negation": off,
  "no-unused-vars": off,
  "no-use-before-define": off,
  "no-useless-constructor": off,
  "no-var": error,
  "prefer-const": error,
  "prefer-rest-params": error,
  "prefer-spread": error,
  "valid-typeof": off,
};

module.exports = {
  plugins: ["@typescript-eslint"],
  rules: Object.assign(
    {
      "@typescript-eslint/adjacent-overload-signatures": error,
      "@typescript-eslint/ban-ts-comment": [
        warn,
        {
          minimumDescriptionLength: 3,
          "ts-check": false,
          "ts-expect-error": "allow-with-description",
          "ts-ignore": "allow-with-description",
          "ts-nocheck": true,
        },
      ],
      "@typescript-eslint/ban-types": error,
      "@typescript-eslint/consistent-type-assertions": error,
      "@typescript-eslint/explicit-function-return-type": off,
      "@typescript-eslint/explicit-module-boundary-types": warn,
      "@typescript-eslint/member-delimiter-style": error,
      "@typescript-eslint/naming-convention": [
        error,
        {
          format: ["PascalCase", "camelCase"],
          leadingUnderscore: "allow",
          selector: "default",
          trailingUnderscore: "allow",
        },
        {
          format: ["PascalCase", "camelCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
          selector: "variable",
          trailingUnderscore: "allow",
        },
        {
          format: ["PascalCase", "camelCase", "UPPER_CASE"],
          leadingUnderscore: "allowSingleOrDouble",
          selector: "memberLike",
          trailingUnderscore: "allowDouble",
        },
        {
          format: ["PascalCase"],
          selector: "typeLike",
        },
      ],
      "@typescript-eslint/no-array-constructor": error,
      "@typescript-eslint/no-empty-function": baseRules["no-empty-function"],
      "@typescript-eslint/no-empty-interface": error,
      "@typescript-eslint/no-explicit-any": warn, // if any is explicit then it's wanted
      "@typescript-eslint/no-inferrable-types": error,
      "@typescript-eslint/no-misused-new": error,
      "@typescript-eslint/no-namespace": warn, // We don't agree with community, namespaces are great and not deprecated
      "@typescript-eslint/no-non-null-assertion": error,
      "@typescript-eslint/no-shadow": baseRules["no-shadow"],
      "@typescript-eslint/no-this-alias": error,
      "@typescript-eslint/no-unused-vars": baseRules["no-unused-vars"],
      "@typescript-eslint/no-use-before-define":
        baseRules["no-use-before-define"],
      "@typescript-eslint/no-useless-constructor":
        baseRules["no-useless-constructor"],
      "@typescript-eslint/no-var-requires": error,
      "@typescript-eslint/prefer-namespace-keyword": error,
      "@typescript-eslint/triple-slash-reference": error,
      "@typescript-eslint/type-annotation-spacing": error,
    },
    ruleDisabled
  ),
};
