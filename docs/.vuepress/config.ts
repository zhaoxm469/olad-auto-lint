/*
 * @Date: 2022-05-02 16:05:49
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-05-03 00:47:15
 * @Description: https://v2.vuepress.vuejs.org/zh/reference/config.html
 */

import { defineUserConfig, defaultTheme } from "vuepress";
import { sidebar } from "./config/sidebar";
import { navbar } from "./config/navbar";
import customTheme from "./theme";

const theme = () => {
  return {
    extends: defaultTheme({
      home: "/guide/intro",
      docsDir: "docs",
      repo: "https://github.com/zhaoxm469/olad-auto-lint",
      backToHome: "返回首页",
      openInNewWindow: "在新窗口打开",
      toggleDarkMode: "切换夜间模式",
      toggleSidebar: "切换侧边栏",

      // custom containers
      tip: "提示",
      warning: "注意",
      danger: "警告",

      sidebar,
      navbar,
    }),
    ...customTheme,
  };
};

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "阿拉钉前端Lint规范",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://olading.com/static/images/bitbug_favicon.ico",
      },
    ],
  ],
  description: "阿拉钉前端代码规范解决方案",
  theme: theme(),
});
