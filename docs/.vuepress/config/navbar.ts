/*
 * @Date: 2022-05-02 18:16:31
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-05-03 16:41:16
 * @Description:顶部导航
 */

import type { NavbarConfig } from "vuepress";

export const navbar: NavbarConfig = [
  // {
  //   text: "介绍",
  //   link: "/guide/",
  // },
  {
    text: "相关链接",
    children: [
      {
        text: "Eslint规则参考",
        link: "https://cloud.tencent.com/developer/chapter/12618",
      },
      {
        text: "Vue风格指南",
        link: "https://v3.cn.vuejs.org/style-guide/",
      },
      {
        text: "eslint-plugin-vue",
        link: "https://eslint.vuejs.org/rules/",
      },
      {
        text: "eslint-config-airbnb",
        link: "https://github.com/airbnb/javascript",
      },
      {
        text: "TypeScript Eslint",
        link:"https://typescript-eslint.io/"
      },
      {
        text:"unicorn, 100 个强大的 ESLint 规则",
        link:"https://github.com/sindresorhus/eslint-plugin-unicorn#readme"
      }
    ],
  },
];
