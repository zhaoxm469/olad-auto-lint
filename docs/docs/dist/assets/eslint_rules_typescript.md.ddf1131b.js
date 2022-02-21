import{_ as n,c as s,o as a,a as p}from"./app.8e8a4b1b.js";const t={components:{}},g='{"title":"typescript \u89C4\u5219","description":"","frontmatter":{},"relativePath":"eslint/rules/typescript.md","lastUpdated":1645439680703}',e=p(`<h1 id="typescript-\u89C4\u5219"><a class="header-anchor" href="#typescript-\u89C4\u5219" aria-hidden="true">#</a> typescript \u89C4\u5219</h1><p>\u89C4\u5219\u53C2\u8003\uFF1A<a href="https://github.com/typescript-eslint/typescript-eslint" target="_blank" rel="noopener noreferrer">https://github.com/typescript-eslint/typescript-eslint</a></p><p>\u5177\u4F53\u89C4\u5219\u5982\u4E0B\uFF1A</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u91CD\u8F7D\u7684\u51FD\u6570\u5FC5\u987B\u5199\u5728\u4E00\u8D77
   * @reason \u589E\u52A0\u53EF\u8BFB\u6027
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/adjacent-overload-signatures&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u9650\u5236\u6570\u7EC4\u7C7B\u578B\u5FC5\u987B\u4F7F\u7528 Array&lt;T&gt; \u6216 T[]
   * @reason \u5141\u8BB8\u7075\u6D3B\u8FD0\u7528\u4E24\u8005
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/array-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5BF9\u6CA1\u6709 then \u65B9\u6CD5\u7684\u5BF9\u8C61\u4F7F\u7528 await
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/await-thenable&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 // @ts-ignore // @ts-nocheck // @ts-check
   * @reason \u8FD9\u79CD\u6CE8\u91CA\u672C\u8EAB\u5C31\u662F\u5BF9\u7279\u6B8A\u4EE3\u7801\u7684\u8BF4\u660E
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/ban-ts-comment&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u7C7B\u4F3C tslint:disable-next-line \u8FD9\u6837\u7684\u6CE8\u91CA
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/ban-tslint-comment&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u6307\u5B9A\u7684\u7C7B\u578B
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/ban-types&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7C7B\u7684\u53EA\u8BFB\u5C5E\u6027\u82E5\u662F\u4E00\u4E2A\u5B57\u9762\u91CF\uFF0C\u5219\u5FC5\u987B\u4F7F\u7528\u53EA\u8BFB\u5C5E\u6027\u800C\u4E0D\u662F getter
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/class-literal-property-style&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fields&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u4F7F\u7528\u5185\u7F6E\u7684 Record&lt;K, T&gt; \u6765\u63CF\u8FF0\u4EC5\u5305\u542B\u53EF\u7D22\u5F15\u6210\u5458\u7684\u63A5\u53E3
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/consistent-indexed-object-style&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7C7B\u578B\u65AD\u8A00\u5FC5\u987B\u4F7F\u7528 as Type\uFF0C\u7981\u6B62\u4F7F\u7528 &lt;Type&gt;\uFF0C\u7981\u6B62\u5BF9\u5BF9\u8C61\u5B57\u9762\u91CF\u8FDB\u884C\u7C7B\u578B\u65AD\u8A00\uFF08\u65AD\u8A00\u6210 any \u662F\u5141\u8BB8\u7684\uFF09
   * @reason &lt;Type&gt; \u5BB9\u6613\u88AB\u7406\u89E3\u4E3A jsx
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/consistent-type-assertions&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">assertionStyle</span><span class="token operator">:</span> <span class="token string">&#39;as&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">objectLiteralTypeAssertions</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F18\u5148\u4F7F\u7528 interface \u800C\u4E0D\u662F type
   * @reason interface \u53EF\u4EE5 implement, extend \u548C merge
   * \u4F7F\u7528\u8D77\u6765\u5F88\u4E0D\u65B9\u4FBF\uFF0C\u5148\u53BB\u6389
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/consistent-type-definitions&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u4F7F\u7528 import type \u5BFC\u5165\u7C7B\u578B
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/consistent-type-imports&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u6709\u9ED8\u8BA4\u503C\u6216\u53EF\u9009\u7684\u53C2\u6570\u5FC5\u987B\u653E\u5230\u6700\u540E
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/default-param-last&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 foo[&#39;bar&#39;]\uFF0C\u5FC5\u987B\u5199\u6210 foo.bar
   * @reason \u5F53\u9700\u8981\u5199\u4E00\u7CFB\u5217\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u66F4\u7EDF\u4E00
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/dot-notation&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u8BBE\u7F6E\u7C7B\u7684\u6210\u5458\u7684\u53EF\u8BBF\u95EE\u6027
   * @reason \u5C06\u4E0D\u9700\u8981\u516C\u5F00\u7684\u6210\u5458\u8BBE\u4E3A\u79C1\u6709\u7684\uFF0C\u53EF\u4EE5\u589E\u5F3A\u4EE3\u7801\u7684\u53EF\u7406\u89E3\u6027\uFF0C\u5BF9\u6587\u6863\u8F93\u51FA\u4E5F\u5F88\u53CB\u597D
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/explicit-member-accessibility&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5BFC\u51FA\u7684\u51FD\u6570\u6216\u7C7B\u4E2D\u7684 public \u65B9\u6CD5\u5FC5\u987B\u5B9A\u4E49\u8F93\u5165\u8F93\u51FA\u53C2\u6570\u7684\u7C7B\u578B
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/explicit-module-boundary-types&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u51FD\u6570\u5141\u8BB8\u4E0D\u7528return
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/explicit-function-return-type&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u53D8\u91CF\u5FC5\u987B\u5728\u5B9A\u4E49\u7684\u65F6\u5019\u8D4B\u503C
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/init-declarations&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7C7B\u7684\u6210\u5458\u4E4B\u95F4\u662F\u5426\u9700\u8981\u7A7A\u884C
   * @reason \u6709\u65F6\u4E3A\u4E86\u7D27\u51D1\u9700\u8981\u6328\u5728\u4E00\u8D77\uFF0C\u6709\u65F6\u4E3A\u4E86\u53EF\u8BFB\u6027\u9700\u8981\u7A7A\u4E00\u884C
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/lines-between-class-members&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u6307\u5B9A\u7C7B\u6210\u5458\u7684\u6392\u5E8F\u89C4\u5219
   * @reason \u4F18\u5148\u7EA7\uFF1A
   * 1. static &gt; instance
   * 2. field &gt; constructor &gt; method
   * 3. public &gt; protected &gt; private
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/member-ordering&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;public-static-field&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;protected-static-field&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;private-static-field&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;static-field&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;public-static-method&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;protected-static-method&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;private-static-method&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;static-method&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;public-instance-field&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;protected-instance-field&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;private-instance-field&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;public-field&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;protected-field&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;private-field&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;instance-field&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;field&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;constructor&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;public-instance-method&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;protected-instance-method&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;private-instance-method&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;public-method&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;protected-method&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;private-method&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;instance-method&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;method&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5\u5FC5\u987B\u7528\u5C5E\u6027\u7684\u65B9\u5F0F\u5B9A\u4E49
   * @reason \u914D\u7F6E\u4E86 strictFunctionTypes \u4E4B\u540E\uFF0C\u7528\u5C5E\u6027\u7684\u65B9\u5F0F\u5B9A\u4E49\u65B9\u6CD5\u53EF\u4EE5\u83B7\u5F97\u66F4\u4E25\u683C\u7684\u68C0\u67E5
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/method-signature-style&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u9650\u5236\u5404\u79CD\u53D8\u91CF\u6216\u7C7B\u578B\u7684\u547D\u540D\u89C4\u5219
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/naming-convention&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 Array \u6784\u9020\u51FD\u6570
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-array-constructor&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u6EE5\u7528 toString \u65B9\u6CD5
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-base-to-string&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u5BB9\u6613\u6DF7\u6DC6\u7684\u975E\u7A7A\u65AD\u8A00
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-confusing-non-null-assertion&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u8FD4\u56DE\u503C\u4E3A void \u7684\u51FD\u6570\u7684\u8FD4\u56DE\u503C
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-confusing-void-expression&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u91CD\u590D\u5B9A\u4E49\u7C7B\u7684\u6210\u5458
   * @reason \u7F16\u8BD1\u9636\u6BB5\u5C31\u4F1A\u62A5\u9519\u4E86
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-dupe-class-members&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u91CD\u590D\u5BFC\u5165\u6A21\u5757
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-duplicate-imports&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62 delete \u65F6\u4F20\u5165\u7684 key \u662F\u52A8\u6001\u7684
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-dynamic-delete&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4E0D\u5141\u8BB8\u6709\u7A7A\u51FD\u6570
   * @reason \u6709\u65F6\u9700\u8981\u5C06\u4E00\u4E2A\u7A7A\u51FD\u6570\u8BBE\u7F6E\u4E3A\u67D0\u4E2A\u9879\u7684\u9ED8\u8BA4\u503C
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-empty-function&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5B9A\u4E49\u7A7A\u7684\u63A5\u53E3
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-empty-interface&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 any
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-explicit-any&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u591A\u4F59\u7684 non-null \u65AD\u8A00
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-extra-non-null-assertion&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5B9A\u4E49\u6CA1\u5FC5\u8981\u7684\u7C7B\uFF0C\u6BD4\u5982\u53EA\u6709\u9759\u6001\u65B9\u6CD5\u7684\u7C7B
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-extraneous-class&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u8C03\u7528 Promise \u65F6\u6CA1\u6709\u5904\u7406\u5F02\u5E38\u60C5\u51B5
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-floating-promises&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5BF9 array \u4F7F\u7528 for in \u5FAA\u73AF
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-for-in-array&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * catch \u7684\u53C2\u6570\u5FC5\u987B\u6307\u5B9A\u5177\u4F53\u7C7B\u578B
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-implicit-any-catch&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 eval
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-implied-eval&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u7ED9\u4E00\u4E2A\u521D\u59CB\u5316\u65F6\u76F4\u63A5\u8D4B\u503C\u4E3A number, string \u7684\u53D8\u91CF\u663E\u5F0F\u7684\u58F0\u660E\u7C7B\u578B
   * @reason \u53EF\u4EE5\u7B80\u5316\u4EE3\u7801
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-inferrable-types&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u7C7B\u4E4B\u5916\u7684\u5730\u65B9\u4F7F\u7528 this
   * @reason \u53EA\u5141\u8BB8\u5728 class \u4E2D\u4F7F\u7528 this
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-invalid-this&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u65E0\u610F\u4E49\u7684 void \u7C7B\u578B
   * @reason void \u53EA\u80FD\u7528\u5728\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4E2D
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-invalid-void-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u5FAA\u73AF\u5185\u7684\u51FD\u6570\u5185\u90E8\u51FA\u73B0\u5FAA\u73AF\u4F53\u6761\u4EF6\u8BED\u53E5\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF
   * @reason \u4F7F\u7528 let \u5C31\u5DF2\u7ECF\u89E3\u51B3\u4E86\u8FD9\u4E2A\u95EE\u9898\u4E86
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-loop-func&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u8D85\u51FA js \u7CBE\u5EA6\u8303\u56F4\u7684\u6570\u5B57
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-loss-of-precision&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 magic numbers
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-magic-numbers&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u63A5\u53E3\u4E2D\u5B9A\u4E49 constructor\uFF0C\u6216\u5728\u7C7B\u4E2D\u5B9A\u4E49 new
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-misused-new&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u907F\u514D\u9519\u8BEF\u7684\u4F7F\u7528 Promise
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-misused-promises&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 namespace \u6765\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4
   * @reason \u4F7F\u7528 es6 \u5F15\u5165\u6A21\u5757\uFF0C\u624D\u662F\u66F4\u6807\u51C6\u7684\u65B9\u5F0F\u3002
   * \u4F46\u662F\u5141\u8BB8\u4F7F\u7528 declare namespace ... {} \u6765\u5B9A\u4E49\u5916\u90E8\u547D\u540D\u7A7A\u95F4
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-namespace&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">allowDeclarations</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">allowDefinitionFiles</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 optional chaining \u4E4B\u540E\u4F7F\u7528 non-null \u65AD\u8A00\uFF08\u611F\u53F9\u53F7\uFF09
   * @reason optional chaining \u540E\u9762\u7684\u5C5E\u6027\u4E00\u5B9A\u662F\u975E\u7A7A\u7684
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-non-null-asserted-optional-chain&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 non-null \u65AD\u8A00\uFF08\u611F\u53F9\u53F7\uFF09
   * @reason \u4F7F\u7528 non-null \u65AD\u8A00\u65F6\u5C31\u5DF2\u7ECF\u6E05\u695A\u4E86\u98CE\u9669
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-non-null-assertion&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u7ED9\u7C7B\u7684\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u6DFB\u52A0\u4FEE\u9970\u7B26
   * @reason \u5F3A\u5236\u6240\u6709\u5C5E\u6027\u90FD\u5B9A\u4E49\u5230\u7C7B\u91CC\u9762\uFF0C\u6BD4\u8F83\u7EDF\u4E00
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-parameter-properties&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u91CD\u590D\u5B9A\u4E49\u53D8\u91CF
   * @reason \u7981\u7528 var \u4E4B\u540E\uFF0C\u7F16\u8BD1\u9636\u6BB5\u5C31\u4F1A\u62A5\u9519\u4E86
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-redeclare&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 require
   * @reason \u7EDF\u4E00\u4F7F\u7528 import \u6765\u5F15\u5165\u6A21\u5757\uFF0C\u7279\u6B8A\u60C5\u51B5\u4F7F\u7528\u5355\u884C\u6CE8\u91CA\u5141\u8BB8 require \u5F15\u5165
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-require-imports&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u53D8\u91CF\u540D\u4E0E\u4E0A\u5C42\u4F5C\u7528\u57DF\u5185\u7684\u5DF2\u5B9A\u4E49\u7684\u53D8\u91CF\u91CD\u590D
   * @reason \u5F88\u591A\u65F6\u5019\u51FD\u6570\u7684\u5F62\u53C2\u548C\u4F20\u53C2\u662F\u540C\u540D\u7684
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-shadow&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5C06 this \u8D4B\u503C\u7ED9\u5176\u4ED6\u53D8\u91CF\uFF0C\u9664\u975E\u662F\u89E3\u6784\u8D4B\u503C
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-this-alias&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">allowDestructuring</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62 throw \u5B57\u9762\u91CF\uFF0C\u5FC5\u987B throw \u4E00\u4E2A Error \u5BF9\u8C61
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-throw-literal&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u7C7B\u578B\u522B\u540D
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-type-alias&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u6D4B\u8BD5\u8868\u8FBE\u5F0F\u4E2D\u7684\u5E03\u5C14\u7C7B\u578B\u7981\u6B62\u4E0E true \u6216 false \u76F4\u63A5\u6BD4\u8F83
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-unnecessary-boolean-literal-compare&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u6761\u4EF6\u8868\u8FBE\u5F0F\u7981\u6B62\u662F\u6C38\u8FDC\u4E3A\u771F\uFF08\u6216\u6C38\u8FDC\u4E3A\u5047\uFF09\u7684
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-unnecessary-condition&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5728\u547D\u540D\u7A7A\u95F4\u4E2D\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u5185\u90E8\u53D8\u91CF\uFF0C\u4E0D\u9700\u8981\u6DFB\u52A0\u547D\u540D\u7A7A\u95F4\u524D\u7F00
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-unnecessary-qualifier&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u8303\u578B\u7684\u7C7B\u578B\u6709\u9ED8\u8BA4\u503C\u65F6\uFF0C\u5C06\u8303\u578B\u8BBE\u7F6E\u4E3A\u8BE5\u9ED8\u8BA4\u503C
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-unnecessary-type-arguments&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u65E0\u7528\u7684\u7C7B\u578B\u65AD\u8A00
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-unnecessary-type-assertion&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u6CA1\u7528\u7684\u7C7B\u578B\u9650\u5236
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-unnecessary-type-constraint&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5C06 any \u7C7B\u578B\u7684\u53D8\u91CF\u4F5C\u4E3A\u51FD\u6570\u53C2\u6570\u8C03\u7528
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-unsafe-argument&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5C06\u53D8\u91CF\u6216\u5C5E\u6027\u7684\u7C7B\u578B\u8BBE\u7F6E\u4E3A any
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-unsafe-assignment&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u8C03\u7528 any \u7C7B\u578B\u7684\u53D8\u91CF\u4E0A\u7684\u65B9\u6CD5
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-unsafe-call&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u83B7\u53D6 any \u7C7B\u578B\u7684\u53D8\u91CF\u4E2D\u7684\u5C5E\u6027
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-unsafe-member-access&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\u662F any
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-unsafe-return&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u65E0\u7528\u7684\u8868\u8FBE\u5F0F
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-unused-expressions&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">allowShortCircuit</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">allowTernary</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">allowTaggedTemplates</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5DF2\u5B9A\u4E49\u7684\u53D8\u91CF\u5FC5\u987B\u4F7F\u7528
   * @reason \u7F16\u8BD1\u9636\u6BB5\u68C0\u67E5\u5C31\u8DB3\u591F\u4E86
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u5B9A\u4E49\u53D8\u91CF\u4E4B\u524D\u5C31\u4F7F\u7528\u5B83
   * @reason \u7F16\u8BD1\u9636\u6BB5\u68C0\u67E5\u5C31\u8DB3\u591F\u4E86
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-use-before-define&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FA\u73B0\u6CA1\u5FC5\u8981\u7684 constructor
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-useless-constructor&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 require \u6765\u5F15\u5165\u6A21\u5757
   * @reason no-require-imports \u89C4\u5219\u5DF2\u7ECF\u7EA6\u675F\u4E86 require
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-var-requires&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5141\u8BB8\u4F7F\u7528any
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-explicit-any&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u6D88\u9664\u9634\u5F71\u53D8\u91CF\u58F0\u660E
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-shadow&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5F15\u7528\u63D2\u4EF6
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;off&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u4F7F\u7528 ! \u800C\u4E0D\u662F as
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/non-nullable-type-assertion-style&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528 as const \u66FF\u4EE3 as &#39;bar&#39;
   * @reason as const \u662F\u65B0\u8BED\u6CD5\uFF0C\u4E0D\u662F\u5F88\u5E38\u89C1
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/prefer-as-const&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u679A\u4E3E\u503C\u5FC5\u987B\u521D\u59CB\u5316
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/prefer-enum-initializers&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528 for \u5FAA\u73AF\u904D\u5386\u6570\u7EC4\u65F6\uFF0C\u5982\u679C\u7D22\u5F15\u4EC5\u7528\u4E8E\u83B7\u53D6\u6210\u5458\uFF0C\u5219\u5FC5\u987B\u4F7F\u7528 for of \u5FAA\u73AF\u66FF\u4EE3 for \u5FAA\u73AF
   * @reason for of \u5FAA\u73AF\u66F4\u52A0\u6613\u8BFB
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/prefer-for-of&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528\u51FD\u6570\u7C7B\u578B\u522B\u540D\u66FF\u4EE3\u5305\u542B\u51FD\u6570\u8C03\u7528\u58F0\u660E\u7684\u63A5\u53E3
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/prefer-function-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528 includes \u800C\u4E0D\u662F indexOf
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/prefer-includes&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u679A\u4E3E\u7C7B\u578B\u7684\u503C\u5FC5\u987B\u662F\u5B57\u9762\u91CF\uFF0C\u7981\u6B62\u662F\u8BA1\u7B97\u503C
   * @reason \u7F16\u8BD1\u9636\u6BB5\u68C0\u67E5\u5C31\u8DB3\u591F\u4E86
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/prefer-literal-enum-member&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 module \u6765\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4
   * @reason module \u5DF2\u6210\u4E3A js \u7684\u5173\u952E\u5B57
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/prefer-namespace-keyword&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528 ?? \u66FF\u4EE3 ||
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/prefer-nullish-coalescing&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528 optional chaining \u66FF\u4EE3 &amp;&amp;
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/prefer-optional-chain&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u79C1\u6709\u53D8\u91CF\u5982\u679C\u6CA1\u6709\u5728\u6784\u9020\u51FD\u6570\u5916\u88AB\u8D4B\u503C\uFF0C\u5219\u5FC5\u987B\u8BBE\u4E3A readonly
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/prefer-readonly&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u51FD\u6570\u7684\u53C2\u6570\u5FC5\u987B\u8BBE\u7F6E\u4E3A readonly
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/prefer-readonly-parameter-types&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528 reduce \u65B9\u6CD5\u65F6\uFF0C\u5FC5\u987B\u4F20\u5165\u8303\u578B\uFF0C\u800C\u4E0D\u662F\u5BF9\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F7F\u7528 as
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/prefer-reduce-type-parameter&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528 RegExp#exec \u800C\u4E0D\u662F String#match
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/prefer-regexp-exec&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7C7B\u7684\u65B9\u6CD5\u8FD4\u56DE\u503C\u662F this \u65F6\uFF0C\u7C7B\u578B\u5FC5\u987B\u8BBE\u7F6E\u4E3A this
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/prefer-return-this-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528 String#startsWith \u800C\u4E0D\u662F\u5176\u4ED6\u65B9\u5F0F
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/prefer-string-starts-ends-with&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5F53\u9700\u8981\u5FFD\u7565\u4E0B\u4E00\u884C\u7684 ts \u9519\u8BEF\u65F6\uFF0C\u5FC5\u987B\u4F7F\u7528 @ts-expect-error \u800C\u4E0D\u662F @ts-ignore
   * @reason \u4F7F\u7528 @ts-expect-error \u53EF\u4EE5\u907F\u514D\u5BF9\u4E0D\u4F1A\u62A5\u9519\u7684\u4EE3\u7801\u8BBE\u7F6E\u4E86 @ts-ignore
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/prefer-ts-expect-error&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * async \u51FD\u6570\u7684\u8FD4\u56DE\u503C\u5FC5\u987B\u662F Promise
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/promise-function-async&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528 sort \u65F6\u5FC5\u987B\u4F20\u5165\u6BD4\u8F83\u51FD\u6570
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/require-array-sort-compare&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * async \u51FD\u6570\u4E2D\u5FC5\u987B\u5B58\u5728 await \u8BED\u53E5
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/require-await&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528\u52A0\u53F7\u65F6\uFF0C\u4E24\u8005\u5FC5\u987B\u540C\u4E3A\u6570\u5B57\u6216\u540C\u4E3A\u5B57\u7B26\u4E32
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/restrict-plus-operands&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u6A21\u7248\u5B57\u7B26\u4E32\u4E2D\u7684\u53D8\u91CF\u7C7B\u578B\u5FC5\u987B\u662F\u5B57\u7B26\u4E32
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/restrict-template-expressions&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 return \u8BED\u53E5\u91CC\u4F7F\u7528 await
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/return-await&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u8054\u5408\u7C7B\u578B\u548C\u4EA4\u53C9\u7C7B\u578B\u7684\u6BCF\u4E00\u9879\u5FC5\u987B\u6309\u5B57\u6BCD\u6392\u5E8F
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/sort-type-union-intersection-members&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u6761\u4EF6\u5224\u65AD\u5FC5\u987B\u4F20\u5165\u5E03\u5C14\u503C
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/strict-boolean-expressions&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528\u8054\u5408\u7C7B\u578B\u4F5C\u4E3A switch \u7684\u5BF9\u8C61\u65F6\uFF0C\u5FC5\u987B\u5305\u542B\u6BCF\u4E00\u4E2A\u7C7B\u578B\u7684 case
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/switch-exhaustiveness-check&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u4E09\u659C\u6760\u5BFC\u5165\u6587\u4EF6
   * @reason \u4E09\u659C\u6760\u662F\u5DF2\u5E9F\u5F03\u7684\u8BED\u6CD5\uFF0C\u4F46\u5728\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\u4E2D\u8FD8\u662F\u53EF\u4EE5\u4F7F\u7528\u7684
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/triple-slash-reference&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lib</span><span class="token operator">:</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * interface \u548C type \u5B9A\u4E49\u65F6\u5FC5\u987B\u58F0\u660E\u6210\u5458\u7684\u7C7B\u578B
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/typedef&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">arrayDestructuring</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">arrowParameter</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">memberVariableDeclaration</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">objectDestructuring</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">parameter</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">propertyDeclaration</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">variableDeclaration</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u65B9\u6CD5\u8C03\u7528\u65F6\u9700\u8981\u7ED1\u5B9A\u5230\u6B63\u786E\u7684 this \u4E0A
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/unbound-method&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u51FD\u6570\u91CD\u8F7D\u65F6\uFF0C\u82E5\u80FD\u901A\u8FC7\u8054\u5408\u7C7B\u578B\u5C06\u4E24\u4E2A\u51FD\u6570\u7684\u7C7B\u578B\u58F0\u660E\u5408\u4E3A\u4E00\u4E2A\uFF0C\u5219\u4F7F\u7528\u8054\u5408\u7C7B\u578B\u800C\u4E0D\u662F\u4E24\u4E2A\u51FD\u6570\u58F0\u660E
   */</span>
  <span class="token string-property property">&#39;@typescript-eslint/unified-signatures&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,4),o=[e];function r(c,l,i,k,u,y){return a(),s("div",null,o)}var f=n(t,[["render",r]]);export{g as __pageData,f as default};
