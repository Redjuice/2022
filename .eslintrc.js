module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  parser: 'vue-eslint-parser', // 指定如何解析语法
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  rules: {}
};
