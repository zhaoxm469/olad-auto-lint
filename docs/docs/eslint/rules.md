# 规则

根据以下自定义规则帮助我们检查文件中的代码规范以及风格

## JavaScript 公共规则

共计 209 条规则，启用规则 131 条

```js
/**
 * setter 必须有对应的 getter，getter 可以没有对应的 setter
 */
"accessor-pairs": [
"error",
{
    setWithoutGet: true,
    getWithoutSet: false,
},
],
/**
 * 数组的方法除了 forEach 之外，回调函数必须有返回值
 */
"array-callback-return": "error",
/**
 * 箭头函数体必须由大括号包裹
 * @reason 代码格式问题，最好由 Prettier 解决
 */
"arrow-body-style": "off",
/**
 * 在箭头函数中的箭头前后强制保持一致的间距
 */
"arrow-spacing": ["error", { before: true, after: true }],
/**
 * 将 var 定义的变量视为块作用域，禁止在块外使用
 * @reason 已经禁止使用 var 了
 */
"block-scoped-var": "off",
/**
 * 变量名必须是 camelCase 风格的
 * @reason 很多 api 或文件名都不是 camelCase 风格的
 */
camelcase: "off",
/**
 * 注释的首字母必须大写
 */
"capitalized-comments": "off",
/**
 * 在类的非静态方法中，必须存在对 this 的引用
 */
"class-methods-use-this": "off",
/**
 * 禁止函数的循环复杂度超过 20
 * @reason https://en.wikipedia.org/wiki/Cyclomatic_complexity
 */
complexity: [
"error",
{
    max: 20,
},
],
/**
 * 禁止函数在不同分支返回不同类型的值
 * @reason 缺少 TypeScript 的支持，类型判断是不准确的
 */
"consistent-return": "off",
/**
 * 限制 this 的别名
 */
"consistent-this": "off",
/**
 * constructor 中必须有 super
 */
"constructor-super": "error",
/**
 * 不强制 最后一个
 */
"comma-dangle": 0,
/**
 * switch 语句必须有 default
 */
"default-case": "off",
/**
 * switch 语句中的 default 必须在最后
 */
"default-case-last": "off",
/**
 * 有默认值的参数必须放在函数参数的末尾
 */
"default-param-last": "off",
/**
 * 禁止使用 foo['bar']，必须写成 foo.bar
 * @reason 当需要写一系列属性的时候，可以更统一
 */
"dot-notation": "off",
/**
 * 必须使用 === 或 !==，禁止使用 == 或 !=
 */
eqeqeq: "error",
/**
 * 禁止方向错误的 for 循环
 */
"for-direction": "error",
/**
 * 函数赋值给变量的时候，函数名必须与变量名一致
 */
"func-name-matching": [
"error",
"always",
{
    includeCommonJSModuleExports: false,
},
],
/**
 * 函数必须有名字
 */
"func-names": "off",
/**
 * 必须只使用函数声明或只使用函数表达式
 */
"func-style": "off",
/**
 * getter 必须有返回值，并且禁止返回空
 */
"getter-return": "error",
/**
 * 在生成器函数中的`*`运算符周围强制保持一致的间距
 */
"generator-star-spacing": ["error", { before: true, after: true }],
/**
 * setter 和 getter 必须写在一起
 */
"grouped-accessor-pairs": "error",
/**
 * for in 内部必须有 hasOwnProperty
 */
"guard-for-in": "error",
/**
 * 禁止使用指定的标识符
 */
"id-denylist": "off",
/**
 * 限制变量名长度
 */
"id-length": "off",
/**
 * 限制变量名必须匹配指定的正则表达式
 */
"id-match": "off",
/**
 * 首行缩进
 */
indent: ["error", 2, { SwitchCase: 1 }],
/**
 * 变量必须在定义的时候赋值
 */
"init-declarations": "off",
/**
 * 属性使用双引号
 */
"jsx-quotes": ["error", "prefer-double"],
/**
 * 单行注释必须写在上一行
 */
"line-comment-position": "error",
/**
 * 类的成员之间是否需要空行
 * @reason 有时为了紧凑需要挨在一起，有时为了可读性需要空一行
 */
"lines-between-class-members": "error",
/**
 * 限制一个文件中类的数量
 */
"max-classes-per-file": "off",
/**
 * 代码块嵌套的深度禁止超过 5 层
 */
"max-depth": ["error", 5],
/**
 * 限制一个文件最多的行数
 */
"max-lines": "off",
/**
 * 限制函数块中的代码行数
 */
"max-lines-per-function": "off",
/**
 * 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
 */
"max-nested-callbacks": ["error", 3],
/**
 * 函数的参数禁止超过 5 个
 */
"max-params": ["error", 5],
/**
 * 限制函数块中的语句数量
 */
"max-statements": "off",
/**
 * 限制一行中的语句数量
 */
"max-statements-per-line": "off",
/**
 * 约束多行注释的格式
 * @reason 能写注释已经不容易了，不需要限制太多
 */
"multiline-comment-style": "off",
/**
 * new 后面的类名必须首字母大写
 */
"new-cap": [
"error",
{
    newIsCap: true,
    capIsNew: false,
    properties: true,
},
],
/**
 * 禁止使用 alert
 */
"no-alert": "off",
/**
 * 禁止使用 Array 构造函数时传入的参数超过一个
 * @reason 参数为一个时表示创建一个指定长度的数组，比较常用
 * 参数为多个时表示创建一个指定内容的数组，此时可以用数组字面量实现，不必使用构造函数
 */
"no-array-constructor": "error",
/**
 * 禁止将 async 函数做为 new Promise 的回调函数
 * @reason 出现这种情况时，一般不需要使用 new Promise 实现异步了
 */
"no-async-promise-executor": "error",
/**
 * 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
 * @reason 要求太严格了，有时需要在循环中写 await
 */
"no-await-in-loop": "off",
/**
 * 禁止使用位运算
 */
"no-bitwise": "off",
/**
 * 禁止使用 caller 或 callee
 * @reason 它们是已废弃的语法
 */
"no-caller": "error",
/**
 * switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
 */
"no-case-declarations": "error",
/**
 * 禁止对已定义的 class 重新赋值
 */
"no-class-assign": "error",
/**
 * 禁止与负零进行比较
 */
"no-compare-neg-zero": "error",
/**
 * 禁止在测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了
 */
"no-cond-assign": ["error", "except-parens"],
/**
 * 禁止使用 console
 */
"no-console": "off",
/**
 * 禁止对使用 const 定义的常量重新赋值
 */
"no-const-assign": "error",
/**
 * 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
 */
"no-constant-condition": [
"error",
{
    checkLoops: false,
},
],
/**
 * 禁止在构造函数中返回值
 */
"no-constructor-return": "error",
/**
 * 禁止使用 continue
 */
"no-continue": "off",
/**
 * 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
 * @reason 几乎不会遇到这种场景
 */
"no-control-regex": "off",
/**
 * 禁止使用 debugger
 */
"no-debugger": "error",
/**
 * 禁止对一个变量使用 delete
 * @reason 编译阶段就会报错了
 */
"no-delete-var": "error",
/**
 * 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
 * @reason 有代码高亮的话，在阅读这种代码时，也完全不会产生歧义或理解上的困难
 */
"no-div-regex": "off",
/**
 * 禁止在函数参数中出现重复名称的参数
 * @reason 编译阶段就会报错了
 */
"no-dupe-args": "off",
/**
 * 禁止重复定义类的成员
 */
"no-dupe-class-members": "error",
/**
 * 禁止 if else 的条件判断中出现重复的条件
 */
"no-dupe-else-if": "error",
/**
 * 禁止在对象字面量中出现重复的键名
 */
"no-dupe-keys": "error",
/**
 * 禁止在 switch 语句中出现重复测试表达式的 case
 */
"no-duplicate-case": "error",
/**
 * 禁止重复导入模块
 */
"no-duplicate-imports": "error",
/**
 * 禁止在 else 内使用 return，必须改为提前结束
 * @reason else 中使用 return 可以使代码结构更清晰
 */
"no-else-return": "off",
/**
 * 禁止出现空代码块，允许 catch 为空代码块
 */
"no-empty": "error",
/**
 * 禁止在正则表达式中使用空的字符集 []
 */
"no-empty-character-class": "error",
/**
 * 不允许有空函数
 * @reason 有时需要将一个空函数设置为某个项的默认值
 */
"no-empty-function": "off",
/**
 * 禁止解构赋值中出现空 {} 或 []
 */
"no-empty-pattern": "error",
/**
 * 禁止使用 foo == null，必须使用 foo === null
 */
"no-eq-null": "error",
/**
 * 禁止使用 eval
 */
"no-eval": "error",
/**
 * 禁止将 catch 的第一个参数 error 重新赋值
 */
"no-ex-assign": "error",
/**
 * 禁止修改原生对象
 * @reason 修改原生对象可能会与将来版本的 js 冲突
 */
"no-extend-native": "error",
/**
 * 禁止出现没必要的 bind
 */
"no-extra-bind": "error",
/**
 * 禁止不必要的布尔类型转换
 */
"no-extra-boolean-cast": "error",
/**
 * 禁止出现没必要的 label
 * @reason 已经禁止使用 label 了
 */
"no-extra-label": "off",
/**
 * switch 的 case 内必须有 break, return 或 throw，空的 case 除外
 */
"no-fallthrough": "error",
/**
 * 禁止将一个函数声明重新赋值
 */
"no-func-assign": "error",
/**
 * 禁止对全局变量赋值
 */
"no-global-assign": "error",
/**
 * 禁止使用 ~+ 等难以理解的类型转换，仅允许使用 !!
 */
"no-implicit-coercion": [
"error",
{
    allow: ["!!"],
},
],
/**
 * 禁止在全局作用域下定义变量或申明函数
 * @reason 模块化之后，不会出现这种在全局作用域下定义变量的情况
 */
"no-implicit-globals": "off",
/**
 * 禁止在 setTimeout 或 setInterval 中传入字符串
 */
"no-implied-eval": "error",
/**
 * 禁止对导入的模块进行赋值
 */
"no-import-assign": "error",
/**
 * 禁止在代码后添加单行注释
 */
"no-inline-comments": "off",
/**
 * 禁止在 if 代码块内出现函数声明
 */
"no-inner-declarations": ["error", "both"],
/**
 * 禁止在 RegExp 构造函数中出现非法的正则表达式
 */
"no-invalid-regexp": "error",
/**
 * 禁止在类之外的地方使用 this
 * @reason 只允许在 class 中使用 this
 */
"no-invalid-this": "error",
/**
 * 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
 */
"no-irregular-whitespace": [
"error",
{
    skipStrings: true,
    skipComments: false,
    skipRegExps: true,
    skipTemplates: true,
},
],
/**
 * 禁止使用 __iterator__
 * @reason __iterator__ 是一个已废弃的属性
 * 使用 [Symbol.iterator] 替代它
 */
"no-iterator": "error",
/**
 * 禁止 label 名称与已定义的变量重复
 * @reason 已经禁止使用 label 了
 */
"no-label-var": "off",
/**
 * 禁止使用 label
 */
"no-labels": "error",
/**
 * 禁止使用没必要的 {} 作为代码块
 */
"no-lone-blocks": "error",
/**
 * 禁止 else 中只有一个单独的 if
 * @reason 单独的 if 可以把逻辑表达的更清楚
 */
"no-lonely-if": "off",
/**
 * 禁止在循环内的函数内部出现循环体条件语句中定义的变量
 * @reason 使用 let 就已经解决了这个问题了
 */
"no-loop-func": "off",
/**
 * 禁止使用超出 js 精度范围的数字
 */
"no-loss-of-precision": "off",
/**
 * 禁止使用使用魔法魔法数字
 * @reason 常量或者参数，不用魔法数字或者字符串,代码更容易看懂，代码逻辑更清晰。看到代码就知道意义。代码维护和优化更容易。
 * 某些情况指定数字用作数组的索引是否是可以的
 */
"no-magic-numbers": [
"error",
{
    ignoreArrayIndexes: true,
},
],
/**
 * 禁止正则表达式中使用肉眼无法区分的特殊字符
 * @reason 某些特殊字符很难看出差异，最好不要在正则中使用
 */
"no-misleading-character-class": "error",
/**
 * 禁止连续赋值，比如 foo = bar = 1
 */
"no-multi-assign": "off",
/**
 * 禁止使用 \ 来换行字符串
 */
"no-multi-str": "error",
/**
 * 禁止 if 里有否定的表达式
 * @reason 否定的表达式可以把逻辑表达的更清楚
 */
"no-negated-condition": "off",
/**
 * 禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e
 */
"no-nested-ternary": "off",
/**
 * 禁止直接 new 一个类而不赋值
 * @reason new 应该作为创建一个类的实例的方法，所以不能不赋值
 */
"no-new": "error",
/**
 * 禁止使用 new Function
 * @reason 这和 eval 是等价的
 */
"no-new-func": "error",
/**
 * 禁止直接 new Object
 */
"no-new-object": "error",
/**
 * 禁止使用 new 来生成 Symbol
 */
"no-new-symbol": "error",
/**
 * 禁止使用 new 来生成 String, Number 或 Boolean
 */
"no-new-wrappers": "error",
/**
 * 禁止在字符串中使用 \8 \9
 * @reason 代码格式问题，最好由 Prettier 解决
 */
"no-nonoctal-decimal-escape": "off",
/**
 * 禁止将 Math, JSON 或 Reflect 直接作为函数调用
 */
"no-obj-calls": "error",
/**
 * 禁止使用 0 开头的数字表示八进制数
 * @reason 编译阶段就会报错了
 */
"no-octal": "off",
/**
 * 禁止使用八进制的转义符
 * @reason 编译阶段就会报错了
 */
"no-octal-escape": "off",
/**
 * 禁止对函数的参数重新赋值
 */
"no-param-reassign": "off",
/**
 * 禁止使用 ++ 或 --
 */
"no-plusplus": "off",
/**
 * 禁止在 Promise 的回调函数中直接 return
 * @reason Promise程序函数通常会启动一些异步操作。完成后，执行程序应调用结果，或者如果发生错误。
 */
"no-promise-executor-return": "error",
/**
 * 禁止使用 __proto__
 * @reason __proto__ 是已废弃的语法
 */
"no-proto": "error",
/**
 * 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
 * @reason hasOwnProperty 比较常用
 */
"no-prototype-builtins": "off",
/**
 * 禁止重复定义变量
 * @reason 禁用 var 之后，编译阶段就会报错了
 */
"no-redeclare": "off",
/**
 * 禁止在正则表达式中出现连续的空格
 */
"no-regex-spaces": "error",
/**
 * 禁止导出指定的变量名
 */
"no-restricted-exports": "off",
/**
 * 禁止使用指定的全局变量
 */
"no-restricted-globals": "off",
/**
 * 禁止导入指定的模块
 */
"no-restricted-imports": "off",
/**
 * 禁止使用指定的对象属性
 */
"no-restricted-properties": "off",
/**
 * 禁止使用指定的语法
 */
"no-restricted-syntax": "off",
/**
 * 禁止在 return 语句里赋值
 * @reason 有时候代码会简写 例如 isLoading => this.isLoading = isLoading;
 */
"no-return-assign": "off",
/**
 * 禁止在 return 语句里使用 await
 */
"no-return-await": "off",
/**
 * 禁止出现 location.href = 'javascript:void(0)';
 * @reason 有些场景下还是需要用到这个
 */
"no-script-url": "off",
/**
 * 禁止将自己赋值给自己
 */
"no-self-assign": "error",
/**
 * 禁止将自己与自己比较
 */
"no-self-compare": "error",
/**
 * 禁止使用逗号操作符
 */
"no-sequences": "error",
/**
 * 禁止 setter 有返回值
 */
"no-setter-return": "error",
/**
 * 禁止变量名与上层作用域内的已定义的变量重复
 * @reason 很多时候函数的形参和传参是同名的
 */
"no-shadow": "off",
/**
 * 禁止使用保留字作为变量名
 */
"no-shadow-restricted-names": "error",
/**
 * 禁止在数组中出现连续的逗号
 */
"no-sparse-arrays": "error",
/**
 * 禁止在普通字符串中出现模版字符串里的变量形式
 */
"no-template-curly-in-string": "error",
/**
 * 禁止使用三元表达式
 */
"no-ternary": "off",
/**
 * 禁止在 super 被调用之前使用 this 或 super
 */
"no-this-before-super": "error",
/**
 * 禁止 throw 字面量，必须 throw 一个 Error 对象
 */
"no-throw-literal": "error",
/**
 * 禁止使用未定义的变量
 */
"no-undef": "error",
/**
 * 禁止将 undefined 赋值给变量
 */
"no-undef-init": "error",
/**
 * 禁止使用 undefined
 */
"no-undefined": "off",
/**
 * 禁止变量名出现下划线
 */
"no-underscore-dangle": "off",
/**
 * 循环内必须对循环条件中的变量有修改
 */
"no-unmodified-loop-condition": "error",
/**
 * 必须使用 !a 替代 a ? false : true
 * @reason 允许三元运算符后边是表达式的情况
 */
"no-unneeded-ternary": ["error", { defaultAssignment: false }],
/**
 * 禁止在 return, throw, break 或 continue 之后还有代码
 */
"no-unreachable": "error",
/**
 * 禁止在第一轮循环时就一定会退出循环的情况出现
 * @reason 在极少数情况下，只有一次迭代（或最多一次迭代）是预期行为，应重构代码以使用条件而不是 和 循环。最佳做法是避免对此类情况使用循环构造。
 */
"no-unreachable-loop": "error",
/**
 * 禁止在 finally 中出现 return, throw, break 或 continue
 * @reason finally 中的语句会在 try 之前执行
 */
"no-unsafe-finally": "error",
/**
 * 禁止在 in 或 instanceof 操作符的左侧变量前使用感叹号
 */
"no-unsafe-negation": "error",
/**
 * 不允许在不允许使用值的上下文中使用可选链接
 */
"no-unsafe-optional-chaining": "error",
/**
 * 禁止无用的表达式
 */
"no-unused-expressions": [
"error",
{
    allowShortCircuit: true,
    allowTernary: true,
    allowTaggedTemplates: true,
},
],
/**
 * 禁止出现没用到的 label
 * @reason 已经禁止使用 label 了
 */
"no-unused-labels": "off",
/**
 * 已定义的变量必须使用
 */
"no-unused-vars": [
"error",
{
    vars: "all",
    args: "none",
    ignoreRestSiblings: false,
    caughtErrors: "none",
},
],
/**
 * 变量必须先定义后使用
 */
"no-use-before-define": [
"error",
{ functions: true, classes: true, variables: true },
],
/**
 * 禁止正则表达式中出现无用的回溯引用
 * @reason 某些回溯引用语法上没问题，但是会永远匹配到空字符串
 */
"no-useless-backreference": "off",
/**
 * 禁止出现没必要的 call 或 apply
 */
"no-useless-call": "error",
/**
 * 禁止在 catch 中仅仅只是把错误 throw 出去
 * @reason 这样的 catch 是没有意义的，等价于直接执行 try 里的代码
 */
"no-useless-catch": "error",
/**
 * 禁止出现没必要的计算键名
 */
"no-useless-computed-key": "error",
/**
 * 禁止出现没必要的字符串连接
 */
"no-useless-concat": "error",
/**
 * 禁止出现没必要的 constructor
 */
"no-useless-constructor": "error",
/**
 * 禁止出现没必要的转义
 */
"no-useless-escape": "error",
/**
 * 禁止解构赋值时出现同样名字的的重命名，比如 let { foo: foo } = bar;
 */
"no-useless-rename": "error",
/**
 * 禁止没必要的 return
 */
"no-useless-return": "off",
/**
 * 禁止使用 var
 */
"no-var": "error",
/**
 * 禁止使用 void
 */
"no-void": "error",
/**
 * 禁止注释中出现 TODO 和 FIXME
 */
"no-warning-comments": "off",
/**
 * 禁止使用 with
 * @reason 编译阶段就会报错了
 */
"no-with": "off",
/**
 * 允许连续空行
 */
"no-multiple-empty-lines": 0,
/**
 * 必须使用 a = {b} 而不是 a = {b: b}
 */
"object-shorthand": [
"error",
"always",
{
    ignoreConstructors: false,
    avoidQuotes: true,
},
],
/**
 * 对象文字的大括号内执行一致的间距，解构赋值和导入/导出说明符
 */
"object-curly-spacing": ["error", "always"],
/**
 * 禁止变量申明时用逗号一次申明多个
 */
"one-var": ["error", "never"],
/**
 * 必须使用 x = x + y 而不是 x += y
 */
"operator-assignment": "off",
/**
 * 限制语句之间的空行规则，比如变量定义完之后必须要空行
 */
"padding-line-between-statements": "off",
/**
 * 回调函数必须使用箭头函数
 */
"prefer-arrow-callback": [
"error",
{
    allowNamedFunctions: false,
    allowUnboundThis: true,
},
],
/**
 * 不强制 const 还是let
 * @reason 如果一个变量不会被重新赋值，最好使用const进行声明
 */
"prefer-const": ["error", { destructuring: "all" }],
/**
 * 解构 对象
 */
"prefer-destructuring": [
"error",
{
    array: false,
    object: true,
},
],
/**
 * 使用 ES2016 的语法 ** 替代 Math.pow
 */
"prefer-exponentiation-operator": "off",
/**
 * 使用 ES2018 中的正则表达式命名组
 * @reason 正则表达式已经较难理解了，没必要强制加上命名组
 */
"prefer-named-capture-group": "off",
/**
 * 必须使用 0b11111011 而不是 parseInt()
 */
"prefer-numeric-literals": "off",
/**
 * 必须使用 ... 而不是 Object.assign，除非 Object.assign 的第一个参数是一个变量
 */
"prefer-object-spread": "off",
/**
 * Promise 的 reject 中必须传入 Error 对象，而不是字面量
 * @reason Error 对象会自动存储堆栈跟踪，在调试时，通过它可以用来确定错误是从哪里来的
 */
"prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
/**
 * 优先使用正则表达式字面量，而不是 RegExp 构造函数
 */
"prefer-regex-literals": [
"error",
{
    disallowRedundantWrapping: true,
},
],
/**
 * 必须使用 ...args 而不是 arguments
 */
"prefer-rest-params": "error",
/**
 * 必须使用 ... 而不是 apply，比如 foo(...args)
 */
"prefer-spread": "off",
/**
 * 必须使用模版字符串而不是字符串连接
 */
"prefer-template": "error",
/**
 * 强制使用反撇号、双引号或单引号
 */
quotes: ["error", "double"],
/**
 * parseInt 必须传入第二个参数
 */
radix: "error",
/**
 * 禁止将 await 或 yield 的结果做为运算符的后面项
 * @reason 这样会导致不符合预期的结果
 * https://github.com/eslint/eslint/issues/11899
 * 在上面 issue 修复之前，关闭此规则
 */
"require-atomic-updates": "off",
/**
 * async 函数中必须存在 await 语句
 */
"require-await": "off",
/**
 * 正则表达式中必须要加上 u 标志
 */
"require-unicode-regexp": "off",
/**
 * generator 函数内必须有 yield
 */
"require-yield": "error",
/**
 * 导入必须按规则排序
 */
"sort-imports": "off",
/**
 * 对象字面量的键名必须排好序
 */
"sort-keys": "off",
/**
 * 变量申明必须排好序
 */
"sort-vars": "off",
/**
 * 注释的斜线或 * 后必须有空格
 */
"spaced-comment": [
"error",
"always",
{
    block: {
    exceptions: ["*"],
    balanced: true,
    },
},
],
/**
 * 强制执行块前间距的一致性
 */
"space-before-blocks": "error",
/**
 * 在“function”定义的左括号前强制使用一致的间距
 */
"space-before-function-paren": "error",
/**
 * 禁止或强制使用括号内的空格（括号中的空格）
 */
"space-in-parens": "off",
/**
 * 需要在中缀运算符周围留出空格
 */
"space-infix-ops": ["error", { int32Hint: false }],
/**
 * 要求或禁止在一元运算符之前/之后使用空格
 */
"space-unary-ops": [
"error",
{
    words: true,
    nonwords: false,
    overrides: {
    new: false,
    "++": true,
    },
},
],
/**
 * 禁止使用 'strict';
 */
strict: ["error", "never"],
/**
 * 使用分号
 */
semi: ["error", "never"],
/**
 * 创建 Symbol 时必须传入参数
 */
"symbol-description": "error",
/**
 * 必须使用 isNaN(foo) 而不是 foo === NaN
 */
"use-isnan": "error",
/**
 * typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function', 'symbol', 或 'bigint'
 */
"valid-typeof": "error",
/**
 * var 必须在作用域的最前面
 */
"vars-on-top": "off",
/**
 * 必须使用 if (foo === 5) 而不是 if (5 === foo)
 */
yoda: "error"
```

## Vue2 规则

参考 Vue 官方规则文档 eslint.vuejs.org/rules/

```js
/**
 * 限制自定义组件的 attrs属性风格
 */
"vue/attribute-hyphenation": "off",
/**
 * <script> 标签必须有 lang 属性
 */
"vue/block-lang": "off",
/**
 * 变量名必须是 camelCase 风格的
 * @reason 很多 api 或文件名都不是 camelCase 风格的
 */
"vue/camelcase": "off",
/**
 * 支持在模版中使用 eslint-disable-next-line 等注释
 */
"vue/comment-directive": "error",
/**
 * 组件的 name 命名规则 ， 默认启用中划线
 * @reason 这是官方建议的规范
 */
"vue/component-definition-name-casing": ["error", "kebab-case"],
/**
 * 此规则旨在为第一个属性强制实施一致的位置。
 * @reason 这是官方建议的规范
 */
"vue/first-attribute-linebreak": "error",
/**
 * v-text 指令必须合法
 */
"vue/valid-v-text": "error",
"vue/html-indent": ["error", 2],
/**
 * 元素开始 > 括号是否换行
 */
"vue/html-closing-bracket-newline": [
    "error",
    {
    singleline: "never",
    multiline: "always",
    },
],
/**
 * 要求或不允许在标记的右括号前加上空格
 */
"vue/html-closing-bracket-spacing": "off",
/**
 * 此规则旨在禁止缺少结束标记。
 */
"vue/html-end-tags": "error",
/**
 * 如果属性的引号与配置的引号不同，则此规则将报告该引号。
 */
"vue/html-quotes": ["error", "double", { avoidEscape: false }],
/**
 * 此规则旨在强制将自闭合符号作为配置的样式。
 */
"vue/html-self-closing": ["error"],
/**
 * 强制要求每行的最大属性数
 */
"vue/max-attributes-per-line": [
    "error",
    {
    singleline: {
        max: 1,
    },
    multiline: {
        max: 1,
    },
    },
],
/**
 * 差值表达式 中数据左右是否有间距
 */
"vue/mustache-interpolation-spacing": ["error", "always"],
/**
 * 在多行元素的内容之前和之后需要换行符
 */
"vue/multiline-html-element-content-newline": "off",
/**
 * 不允许多个空格,标签attr属性中
 */
"vue/no-multi-spaces": "error",
/**
 * 不允许在属性中的等号周围留空格
 */
"vue/no-spaces-around-equal-signs-in-attribute": "error",
/**
 * 禁止从外部作用域中声明的阴影变量中声明变量
 */
"vue/no-template-shadow": "error",
/**
 * 强制每个组件都应该再单独的文件中
 */
"vue/one-component-per-file": "off",
/**
 * 强制约束 定义的 props name为 驼峰命名
 */
"vue/prop-name-casing": "error",
/**
 * props 属性需要默认值
 */
"vue/require-default-prop": "error",
/**
 * props 属性 需要type类型
 */
"vue/require-prop-types": "error",
/**
 * 差值表达式 前后是否需要换行符
 */
"vue/singleline-html-element-content-newline": "warn",
/**
 * 规定v-bind的写法（简写:key=“value”）
 */
"vue/v-bind-style": "off",
/**
 *规定v-on的写法（简写@click=“event”）
    */
"vue/v-on-style": "error",
/**
 * slot 规则强制实施应使用速记或长格式的指令样式
 */
"vue/v-slot-style": "warn",
/**
 * 强制执行属性顺序,vue官方推荐的
 */
"vue/attributes-order": "error",
/**
 * 页面根元素的书写顺序
 */
"vue/component-tags-order": [
    "error",
    {
    order: [["template", "script"], "style"],
    },
],
/**
 * 不允许不必要的<template>
 */
"vue/no-lone-template": "error",
/**
 * 禁止给 scoped slots 传递多个参数
 */
"vue/no-multiple-slot-args": "error",
/**
 * 禁止使用 v-html
 * @reason 某些情况下还是可以使用的
 */
"vue/no-v-html": "off",
/**
 * 此规则可确保在组件中保留声明的属性顺序
 */
"vue/order-in-components": "error",
/**
 * 禁止在模版中用 this
 */
"vue/this-in-template": "error",
/**
 * 要求组件命名是多字的
 */
"vue/multi-word-component-names": "error",
/**
 * 对自定义事件名称强制实施特定大小写
 */
"vue/custom-event-name-casing": [
    "error",
    "kebab-case",
    {
    ignores: [],
    },
],
/**
 * watch 中禁止使用箭头函数 , 怕this指向有问题
 */
"vue/no-arrow-functions-in-watch": "error",
/**
 * 计算属性禁止包含异步方法
 */
"vue/no-async-in-computed-properties": "error",
/**
 * 禁止data定义属性中直接访问计算属性
 */
"vue/no-computed-properties-in-data": "error",
/**
 * 禁止在组件上使用 模型上的自定义修饰符
 * @reason 在某些情况可能会出现自定义修饰符
 */
"vue/no-custom-modifiers-on-v-model": "off",
/**
 * 禁止重复的键名
 */
"vue/no-dupe-keys": "error",
/**
 *  禁止在 v-if 和 v-else-if 中出现重复的测试表达式
 */
"vue/no-dupe-v-else-if": "error",
/**
 * 禁止出现重复的属性
 */
"vue/no-duplicate-attributes": [
    "error",
    {
    allowCoexistClass: true,
    allowCoexistStyle: true,
    },
],
/**
 * 禁止模版中有多个根节点
 */
"vue/no-multiple-template-root": "error",
/**
 * 禁止修改组件的 props
 */
"vue/no-mutating-props": "error",
/**
 * 禁止出现语法错误
 */
"vue/no-parsing-error": "error",
/**
 * 禁止覆盖保留字
 */
"vue/no-reserved-keys": "error",
/**
 * 禁止在props中覆盖保留字
 */
"vue/no-reserved-props": [
    "error",
    {
    vueVersion: 2,
    },
],
/**
 * 组件的 data 属性的值必须是一个函数
 */
"vue/no-shared-component-data": "error",
/**
 * 禁止在计算属性中对属性修改
 */
"vue/no-side-effects-in-computed-properties": "error",
/**
 * 禁止在 <textarea> 中出现模版语法 {{message}}
 */
"vue/no-textarea-mustache": "error",
/**
 * 禁止定义在 components 中的组件未使用
 */
"vue/no-unused-components": "error",
/**
 * 模版中已定义的变量必须使用
 */
"vue/no-unused-vars": "error",
/**
 * 禁止在同一个元素上使用 v-if 和 v-for 指令
 */
"vue/no-use-v-if-with-v-for": "error",
/**
 * 禁止模版中使用未生效的属性
 */
"vue/no-useless-template-attributes": "error",
/**
 * template 不必带key，
 * @reason 因为带key无效的，要带的话只需要给他下面的元素带
 */
"vue/no-v-for-template-key": "error",
/**
 * 禁止给 v-model 属性添加参数
 */
"vue/no-v-model-argument": "error",
/**
 * <component> 必须有绑定的组件
 */
"vue/require-component-is": "error",
/**
 * props 的取值必须是基本类型的构造函数，而不是字符串
 */
"vue/require-prop-type-constructor": "error",
/**
 * render 函数必须有返回值
 */
"vue/require-render-return": "error",
/**
 *  v-for 指令的元素必须有 v-bind:key
 */
"vue/require-v-for-key": "error",
/**
 * 的默认值必须匹配它的类型
 */
"vue/require-valid-default-prop": "error",
/**
 * 计算属性必须有返回值
 */
"vue/return-in-computed-property": "error",
/**
 * 当一个节点上出现两个 v-on:click 时，其中一个必须为修饰符
 */
"vue/use-v-on-exact": "error",
/**
 * 禁止调用 Vue.nextTick 或 vm.$nextTick 时不使用 await
 */
"vue/valid-next-tick": "off",
/**
 * template 的根节点必须合法
 */
"vue/valid-template-root": "error",
/**
 * v-bind:foo.sync 指令必须合法 ， 一下都是校验合法性，就不一一注释了
 */
"vue/valid-v-bind-sync": "error",
"vue/valid-v-bind": "error",
"vue/valid-v-cloak": "error",
"vue/valid-v-else-if": "error",
"vue/valid-v-else": "error",
"vue/valid-v-for": "error",
"vue/valid-v-html": "error",
"vue/valid-v-if": "error",
"vue/valid-v-model": "error",
"vue/valid-v-on": "error",
"vue/valid-v-once": "error",
"vue/valid-v-pre": "error",
"vue/valid-v-show": "error",
"vue/valid-v-slot": "error",
```
