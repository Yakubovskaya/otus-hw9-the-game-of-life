module.exports = {
  env: {
    "jest/globals": true,
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["jest", "@typescript-eslint"],
  rules: {
    "no-alert": "off",
    "no-console": "off",
    "import/prefer-default-export": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
      },
    ],
    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],
    "import/no-unresolved": "off",
    "import/extensions": ["warn", "never"],
  },
};
