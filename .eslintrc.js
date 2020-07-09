module.exports = {
  root: true,

  env: {
    node: true
  },

  // extends: [
  //   'plugin:vue/essential',
  //   '@vue/standard',
  //   '@vue/typescript/recommended',
  //   '@vue/prettier'
  // ],

  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser"
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },

  extends: [
    "plugin:vue/essential",
    "@vue/standard",
    "@vue/typescript/recommended",
    "@vue/typescript",
    "@vue/prettier"
  ]
};
