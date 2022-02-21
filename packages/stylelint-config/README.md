# StyleLint规范

阿拉钉前端stylelint规范，目前支持`css|scss`

## 安装

```bash
# with npm 
npm install @olad/stylelint-config -D

# with yarn 
yarn add @olad/stylelint-config -D

# with pnpm 
pnpm add @olad/stylelint-config -D
```
## 使用

在你的工程根目录下创建一个`.stylelintrc.js`配置文件

配置如下即可:
```js
module.exports = {
    "extends": "@olad/stylelint-config"
}
```

如果你使用vscode编辑器，建议安装`stylelint`插件，并在设置配置文件`settings.json`中配置如下，在代码编写时会实时提示，保存是会自动修复
```json
    "stylelint.validate": [
        "css",
        "scss",
        // 如果是Vue技术栈，需要加上，识别.vue文件中的style
        "vue", 
    ],
    "css.validate": true,
    "scss.validate": true,
    "stylelint.enable": true,
```

## 注意事项
如果项目之前安装过Stylelint相关的包，建议卸载，避免引入不必要的包。如`@stylelint`、`stylelint-config-standard`、`stylelint-order`等，直接在package.json搜索**stylelint**，相关的包全部卸载

#### 规范

使用`stylelint`官方代码风格`stylelint-config-standard`；该风格是 `stylelint`汲取了`GitHub`、`Google`、`Airbnb`等；使用`stylelint-order`强制按照某个顺序进行编码

目的：
- 增加css代码的重用性和易于维护性
- 统一规范、提高协作效率
- 提升渲染性能


