const vueRules = require("./rules/vue-common.js");

module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard',
        '@vue/typescript/recommended',
        "./base.js",
        "./typescript.js"
    ],
    parserOptions: {
        ecmaVersion: 2019,
    },
    plugins: ['vue'],
    rules: Object.assign({}, vueRules)
};