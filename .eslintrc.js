// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier/vue"
  ],
  // required to lint *.vue files
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    "prettier/prettier": ["error", {
      htmlWhitespaceSensitivity: 'ignore',
      // semi: false,
      // singleQuote: true
    }],
    'generator-star-spacing': 'off',
    "no-console": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'semi': ['error', 'never']
  }
}
