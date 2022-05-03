/*
 * @Date: 2022-05-02 16:53:27
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-05-04 00:31:12
 * @Description: 侧边栏路由
 */

import { SidebarConfig } from "vuepress";

export const sidebar: SidebarConfig = {
  "/": [
    {
      text: "指南",
      children: ["/guide/intro.md", "/guide/getting-started.md"],
    },
    {
      text: "CLI",
      children: ["/cli/intro.md", "/cli/implementation.md"],
    },
    {
      text: "Eslint",
      children: ["/eslint/intro.md", "/eslint/rules.md"],
    },
    {
      text: "CommitLint",
      children: ["/commitlint/intro.md"],
    },
    {
      text: "StyleLint",
      children: ["/stylelint/intro.md", "/stylelint/rules.md"],
    },
    {
      text: "VsCode配置",
      children: ["/vscode/intro.md"],
    },
  ],
};
