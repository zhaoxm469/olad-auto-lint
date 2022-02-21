const base = process.env.NODE_ENV === 'production' ? '/docs' : '';
const { resolve } = require('path');

module.exports = {
  title: 'olad-auto-lint',
  description: '',
  base,
  themeConfig: {
    // logo: '../logo.svg',
    nav: [{ text: 'demo', link: '/math' }],
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'docs',
        description: '',
        label: '中文',
        selectText: '语言',
        nav: [
          { text: '介绍', link: '/guide/intro' },
          { text: 'CLI', link: '/cli/intro' },
          { text: 'EsLint', link: '/eslint/intro' },
          { text: 'StyleLint', link: '/stylelint/intro' },
          { text: 'CommitLint', link: '/commitlint/intro' },
        ],
        sidebar: [
          {
            text: '指南',
            children: [
              { text: '介绍', link: '/guide/intro' },
              // { text: "快速开始", link: "/guide/quickstart" },
              { text: '更新日志', link: '/guide/changelog' },
            ],
          },
          {
            text: 'CLI',
            children: [{ text: '介绍', link: '/cli/intro' }],
          },
          {
            text: 'EsLint',
            children: [
              { text: '介绍', link: '/eslint/intro' },
              { text: '规则', link: '/eslint/rules/index' },
            ],
          },
          {
            text: 'StyleLint',
            children: [
              { text: '介绍', link: '/stylelint/intro' },
              { text: '规则', link: '/stylelint/rules' },
            ],
          },
          {
            text: 'CommitLint',
            children: [{ text: '介绍', link: '/commitlint/intro' }],
          },
        ],
      },
    },
    search: {
      searchMaxSuggestions: 10,
    },
    repo: 'https://github.com/zhaoxm469/olad-auto-lint',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
};
