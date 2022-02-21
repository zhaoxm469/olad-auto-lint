import{_ as n,c as s,o as a,a as p}from"./app.8e8a4b1b.js";const t={components:{}},g='{"title":"vue \u89C4\u5219","description":"","frontmatter":{},"relativePath":"eslint/rules/vue.md","lastUpdated":1645439680703}',o=p(`<h1 id="vue-\u89C4\u5219"><a class="header-anchor" href="#vue-\u89C4\u5219" aria-hidden="true">#</a> vue \u89C4\u5219</h1><p>\u5177\u4F53\u89C4\u5219\u53C2\u8003\uFF1A<a href="https://eslint.vuejs.org/rules/" target="_blank" rel="noopener noreferrer">https://eslint.vuejs.org/rules/</a></p><p>\u89C4\u5219\u5982\u4E0B\uFF1A</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * \u9650\u5236\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u5C5E\u6027\u98CE\u683C
   */</span>
  <span class="token string-property property">&#39;vue/attribute-hyphenation&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u6807\u7B7E\u5C5E\u6027\u5FC5\u987B\u6309\u89C4\u5219\u6392\u5E8F
   */</span>
  <span class="token string-property property">&#39;vue/attributes-order&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * &lt;script&gt; \u6807\u7B7E\u5FC5\u987B\u6709 lang \u5C5E\u6027
   */</span>
  <span class="token string-property property">&#39;vue/block-lang&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u53D8\u91CF\u540D\u5FC5\u987B\u662F camelCase \u98CE\u683C\u7684
   * @reason \u5F88\u591A api \u6216\u6587\u4EF6\u540D\u90FD\u4E0D\u662F camelCase \u98CE\u683C\u7684
   */</span>
  <span class="token literal-property property">camelcase</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;vue/camelcase&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u652F\u6301\u5728\u6A21\u7248\u4E2D\u4F7F\u7528 eslint-disable-next-line \u7B49\u6CE8\u91CA
   */</span>
  <span class="token string-property property">&#39;vue/comment-directive&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u9650\u5236\u7EC4\u4EF6\u63A5\u53E3\u5B9A\u4E49\u7684\u6A21\u5F0F
   */</span>
  <span class="token string-property property">&#39;vue/component-api-style&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7EC4\u4EF6\u7684 name \u5C5E\u6027\u5FC5\u987B\u7B26\u5408 PascalCase
   * @reason \u8FD9\u662F\u5B98\u65B9\u5EFA\u8BAE\u7684\u89C4\u8303
   */</span>
  <span class="token string-property property">&#39;vue/component-definition-name-casing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PascalCase&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u9650\u5236\u7EC4\u4EF6\u540D\u7684\u98CE\u683C
   */</span>
  <span class="token string-property property">&#39;vue/component-name-in-template-casing&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7EC4\u4EF6\u4E2D\u5FC5\u987B\u6309\u7167 &lt;script&gt;, &lt;template&gt;, &lt;style&gt; \u6392\u5E8F
   * @reason \u8FD9\u662F\u5B98\u65B9\u5EFA\u8BAE\u7684\u987A\u5E8F
   */</span>
  <span class="token string-property property">&#39;vue/component-tags-order&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;template&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;style&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u81EA\u5B9A\u4E49\u4E8B\u4EF6\u540D\u5FC5\u987B\u7528 kebab-case \u98CE\u683C
   */</span>
  <span class="token string-property property">&#39;vue/custom-event-name-casing&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 foo[&#39;bar&#39;]\uFF0C\u5FC5\u987B\u5199\u6210 foo.bar
   * @reason \u5F53\u9700\u8981\u5199\u4E00\u7CFB\u5217\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u66F4\u7EDF\u4E00
   */</span>
  <span class="token string-property property">&#39;dot-notation&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;vue/dot-notation&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u4F7F\u7528 === \u6216 !==\uFF0C\u7981\u6B62\u4F7F\u7528 == \u6216 !=
   */</span>
  <span class="token literal-property property">eqeqeq</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;vue/eqeqeq&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * button \u6807\u7B7E\u5FC5\u987B\u6709 type \u5C5E\u6027
   */</span>
  <span class="token string-property property">&#39;vue/html-button-has-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * HTML \u6CE8\u91CA\u7684 &lt;!-- \u540E\u5FC5\u987B\u6709\u7A7A\u683C\u6216\u6362\u884C\u7B26
   * @reason \u4EE3\u7801\u683C\u5F0F\u95EE\u9898\uFF0C\u6700\u597D\u7531 Prettier \u89E3\u51B3
   */</span>
  <span class="token string-property property">&#39;vue/html-comment-content-newline&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * HTML \u6CE8\u91CA\u5FC5\u987B\u6709\u9996\u4F4D\u7A7A\u683C
   * @reason \u4EE3\u7801\u683C\u5F0F\u95EE\u9898\uFF0C\u6700\u597D\u7531 Prettier \u89E3\u51B3
   */</span>
  <span class="token string-property property">&#39;vue/html-comment-content-spacing&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * HTML \u6CE8\u91CA\u7F29\u8FDB\u5FC5\u987B\u6709\u4E24\u4E2A\u7A7A\u683C
   * @reason \u4EE3\u7801\u683C\u5F0F\u95EE\u9898\uFF0C\u6700\u597D\u7531 Prettier \u89E3\u51B3
   */</span>
  <span class="token string-property property">&#39;vue/html-comment-indent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4FEE\u590D no-unused-vars \u4E0D\u68C0\u67E5 jsx \u7684\u95EE\u9898
   */</span>
  <span class="token string-property property">&#39;vue/jsx-uses-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7EC4\u4EF6\u540D\u79F0\u5FC5\u987B\u548C\u6587\u4EF6\u540D\u4E00\u81F4
   */</span>
  <span class="token string-property property">&#39;vue/match-component-file-name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u591A\u884C\u5C5E\u6027\u4E4B\u95F4\u5FC5\u987B\u6709\u7A7A\u884C
   * @reason \u4EE3\u7801\u683C\u5F0F\u95EE\u9898\uFF0C\u6700\u597D\u7531 Prettier \u89E3\u51B3
   */</span>
  <span class="token string-property property">&#39;vue/new-line-between-multi-line-property&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * nextTick \u5FC5\u987B\u4F7F\u7528 Promise \u6A21\u5F0F\u8C03\u7528
   */</span>
  <span class="token string-property property">&#39;vue/next-tick-style&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * watch \u4E2D\u7981\u6B62\u4F7F\u7528\u7BAD\u5934\u51FD\u6570
   */</span>
  <span class="token string-property property">&#39;vue/no-arrow-functions-in-watch&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u8BA1\u7B97\u5C5E\u6027\u7981\u6B62\u5305\u542B\u5F02\u6B65\u65B9\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/no-async-in-computed-properties&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62 &lt;template&gt; \u4E2D\u4F7F\u7528\u5B57\u7B26\u4E32
   */</span>
  <span class="token string-property property">&#39;vue/no-bare-strings-in-template&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u7ED9\u5E03\u5C14\u503C props \u6DFB\u52A0\u9ED8\u8BA4\u503C
   * @reason \u7C7B\u578B\u76F8\u5173\u7684\u7EA6\u675F\u4EA4\u7ED9 TypeScript
   */</span>
  <span class="token string-property property">&#39;vue/no-boolean-default&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5C06\u5E38\u91CF\u4F5C\u4E3A\u5206\u652F\u6761\u4EF6\u5224\u65AD\u4E2D\u7684\u6D4B\u8BD5\u8868\u8FBE\u5F0F\uFF0C\u4F46\u5141\u8BB8\u4F5C\u4E3A\u5FAA\u73AF\u6761\u4EF6\u5224\u65AD\u4E2D\u7684\u6D4B\u8BD5\u8868\u8FBE\u5F0F
   */</span>
  <span class="token string-property property">&#39;no-constant-condition&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;vue/no-constant-condition&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u81EA\u5B9A\u4E49\u7684 v-modal \u4FEE\u9970\u8BED
   */</span>
  <span class="token string-property property">&#39;vue/no-custom-modifiers-on-v-model&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 data \u4E2D\u4F7F\u7528\u5DF2\u5E9F\u5F03\u7684\u5BF9\u8C61\u5B9A\u4E49
   */</span>
  <span class="token string-property property">&#39;vue/no-deprecated-data-object-declaration&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u5DF2\u5E9F\u5F03\u7684 destroyed \u548C beforeDestroy \u751F\u547D\u5468\u671F
   */</span>
  <span class="token string-property property">&#39;vue/no-deprecated-destroyed-lifecycle&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u5DF2\u5E9F\u5F03\u7684 $listeners
   */</span>
  <span class="token string-property property">&#39;vue/no-deprecated-dollar-listeners-api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u5DF2\u5E9F\u5F03\u7684 $scopedSlots
   */</span>
  <span class="token string-property property">&#39;vue/no-deprecated-dollar-scopedslots-api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u5DF2\u5E9F\u5F03\u7684 events \u63A5\u53E3
   */</span>
  <span class="token string-property property">&#39;vue/no-deprecated-events-api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u5DF2\u5E9F\u5F03\u7684 filters \u8BED\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/no-deprecated-filter&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u5DF2\u5E9F\u5F03\u7684 functional \u6A21\u7248
   */</span>
  <span class="token string-property property">&#39;vue/no-deprecated-functional-template&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u5DF2\u5E9F\u5F03\u7684 is \u5C5E\u6027
   */</span>
  <span class="token string-property property">&#39;vue/no-deprecated-html-element-is&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u5DF2\u5E9F\u5F03\u7684 inline-template \u5C5E\u6027
   */</span>
  <span class="token string-property property">&#39;vue/no-deprecated-inline-template&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u5DF2\u5E9F\u5F03\u7684 this
   */</span>
  <span class="token string-property property">&#39;vue/no-deprecated-props-default-this&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u7528\u5DF2\u5E9F\u5F03\u7684 scope \u5C5E\u6027
   */</span>
  <span class="token string-property property">&#39;vue/no-deprecated-scope-attribute&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528 v-slot \u66FF\u4EE3\u5DF2\u5E9F\u5F03\u7684 slot
   */</span>
  <span class="token string-property property">&#39;vue/no-deprecated-slot-attribute&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u7528\u5DF2\u5E9F\u5F03\u7684 slot-scope
   */</span>
  <span class="token string-property property">&#39;vue/no-deprecated-slot-scope-attribute&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 v-bind \u6307\u4EE4\u4E2D\u4F7F\u7528\u5DF2\u5E9F\u5F03\u7684 .sync \u4FEE\u9970\u7B26
   */</span>
  <span class="token string-property property">&#39;vue/no-deprecated-v-bind-sync&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u7528\u5DF2\u5E9F\u5F03\u7684 v-is \u6307\u4EE4
   */</span>
  <span class="token string-property property">&#39;vue/no-deprecated-v-is&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u5DF2\u5E9F\u5F03\u7684 .native \u4FEE\u9970\u7B26
   */</span>
  <span class="token string-property property">&#39;vue/no-deprecated-v-on-native-modifier&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u5DF2\u5E9F\u5F03\u7684\u6570\u5B57\u4FEE\u9970\u7B26
   */</span>
  <span class="token string-property property">&#39;vue/no-deprecated-v-on-number-modifiers&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u5DF2\u5E9F\u5F03\u7684 Vue.config.keyCodes
   */</span>
  <span class="token string-property property">&#39;vue/no-deprecated-vue-config-keycodes&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u91CD\u590D\u7684\u952E\u540D
   */</span>
  <span class="token string-property property">&#39;vue/no-dupe-keys&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 v-if \u548C v-else-if \u4E2D\u51FA\u73B0\u91CD\u590D\u7684\u6D4B\u8BD5\u8868\u8FBE\u5F0F
   */</span>
  <span class="token string-property property">&#39;vue/no-dupe-v-else-if&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528 v-bind=&quot;$attrs&quot; \u65F6 inheritAttrs \u5FC5\u987B\u662F false
   */</span>
  <span class="token string-property property">&#39;vue/no-duplicate-attr-inheritance&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FA\u73B0\u91CD\u590D\u7684\u5C5E\u6027
   */</span>
  <span class="token string-property property">&#39;vue/no-duplicate-attributes&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">allowCoexistClass</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">allowCoexistStyle</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62 &lt;template&gt; &lt;script&gt; &lt;style&gt; \u4E3A\u7A7A
   */</span>
  <span class="token string-property property">&#39;vue/no-empty-component-block&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u89E3\u6784\u8D4B\u503C\u4E2D\u51FA\u73B0\u7A7A {} \u6216 []
   */</span>
  <span class="token string-property property">&#39;no-empty-pattern&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;vue/no-empty-pattern&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 &lt;script setup&gt; \u4E2D\u4F7F\u7528 export
   */</span>
  <span class="token string-property property">&#39;vue/no-export-in-script-setup&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62 model \u4E2D\u51FA\u73B0\u9519\u8BEF\u7684\u5C5E\u6027
   */</span>
  <span class="token string-property property">&#39;vue/no-invalid-model-keys&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u7279\u6B8A\u7A7A\u767D\u7B26\uFF08\u6BD4\u5982\u5168\u89D2\u7A7A\u683C\uFF09\uFF0C\u9664\u975E\u662F\u51FA\u73B0\u5728\u5B57\u7B26\u4E32\u3001\u6B63\u5219\u8868\u8FBE\u5F0F\u3001\u6A21\u7248\u5B57\u7B26\u4E32\u4E2D\u6216 HTML \u5185\u5BB9\u4E2D
   */</span>
  <span class="token string-property property">&#39;no-irregular-whitespace&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;vue/no-irregular-whitespace&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">skipStrings</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">skipComments</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">skipRegExps</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">skipTemplates</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">skipHTMLTextContents</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5F02\u6B65\u6CE8\u518C\u751F\u547D\u5468\u671F
   */</span>
  <span class="token string-property property">&#39;vue/no-lifecycle-after-await&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FA\u73B0\u6CA1\u5FC5\u8981\u7684 &lt;template&gt;
   */</span>
  <span class="token string-property property">&#39;vue/no-lone-template&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62 class \u4E2D\u51FA\u73B0\u590D\u6570\u7684\u5BF9\u8C61
   */</span>
  <span class="token string-property property">&#39;vue/no-multiple-objects-in-class&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u7ED9 scoped slots \u4F20\u9012\u591A\u4E2A\u53C2\u6570
   */</span>
  <span class="token string-property property">&#39;vue/no-multiple-slot-args&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u6A21\u7248\u4E2D\u6709\u591A\u4E2A\u6839\u8282\u70B9
   */</span>
  <span class="token string-property property">&#39;vue/no-multiple-template-root&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4FEE\u6539\u7EC4\u4EF6\u7684 props
   */</span>
  <span class="token string-property property">&#39;vue/no-mutating-props&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FA\u73B0\u8BED\u6CD5\u9519\u8BEF
   */</span>
  <span class="token string-property property">&#39;vue/no-parsing-error&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u6F5C\u5728\u7684\u62FC\u5199\u9519\u8BEF
   */</span>
  <span class="token string-property property">&#39;vue/no-potential-component-option-typo&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u76F4\u63A5\u4F7F\u7528\u7531 ref \u751F\u6210\u7684\u53D8\u91CF\uFF0C\u5FC5\u987B\u4F7F\u7528\u5B83\u7684 value
   */</span>
  <span class="token string-property property">&#39;vue/no-ref-as-operand&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7EC4\u4EF6\u7684 name \u5C5E\u6027\u9759\u6B62\u4F7F\u7528\u4FDD\u7559\u5B57
   */</span>
  <span class="token string-property property">&#39;vue/no-reserved-component-names&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u8986\u76D6\u4FDD\u7559\u5B57
   */</span>
  <span class="token string-property property">&#39;vue/no-reserved-keys&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u6A21\u7248\u4E2D\u4F7F\u7528\u6307\u5B9A\u7684 block
   */</span>
  <span class="token string-property property">&#39;vue/no-restricted-block&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62 await \u540E\u8C03\u7528\u6307\u5B9A\u7684\u51FD\u6570
   */</span>
  <span class="token string-property property">&#39;vue/no-restricted-call-after-await&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u9650\u5236\u4F7F\u7528\u7279\u5B9A\u7684 class
   */</span>
  <span class="token string-property property">&#39;vue/no-restricted-class&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u6307\u5B9A\u7684\u7EC4\u4EF6\u9009\u9879
   */</span>
  <span class="token string-property property">&#39;vue/no-restricted-component-options&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u7279\u5B9A\u7684\u81EA\u5B9A\u4E49\u4E8B\u4EF6
   */</span>
  <span class="token string-property property">&#39;vue/no-restricted-custom-event&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u7279\u5B9A\u7684 props
   */</span>
  <span class="token string-property property">&#39;vue/no-restricted-props&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u6307\u5B9A\u7684\u5C5E\u6027
   */</span>
  <span class="token string-property property">&#39;vue/no-restricted-static-attribute&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u6307\u5B9A\u7684\u8BED\u6CD5
   */</span>
  <span class="token string-property property">&#39;no-restricted-syntax&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;vue/no-restricted-syntax&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u6307\u5B9A\u7684 v-bind \u53C2\u6570
   */</span>
  <span class="token string-property property">&#39;vue/no-restricted-v-bind&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5BF9 setup \u4E2D\u7684 props \u89E3\u6784
   */</span>
  <span class="token string-property property">&#39;vue/no-setup-props-destructure&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7EC4\u4EF6\u7684 data \u5C5E\u6027\u7684\u503C\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570
   */</span>
  <span class="token string-property property">&#39;vue/no-shared-component-data&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u8BA1\u7B97\u5C5E\u6027\u4E2D\u5BF9\u5C5E\u6027\u4FEE\u6539
   */</span>
  <span class="token string-property property">&#39;vue/no-side-effects-in-computed-properties&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u6570\u7EC4\u4E2D\u51FA\u73B0\u8FDE\u7EED\u7684\u9017\u53F7
   */</span>
  <span class="token string-property property">&#39;no-sparse-arrays&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;vue/no-sparse-arrays&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 style \u5C5E\u6027
   */</span>
  <span class="token string-property property">&#39;vue/no-static-inline-styles&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62 &lt;template&gt; \u4F7F\u7528 key \u5C5E\u6027
   */</span>
  <span class="token string-property property">&#39;vue/no-template-key&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u6A21\u7248\u4E2D\u7684\u53D8\u91CF\u540D\u7981\u6B62\u4E0E\u524D\u4E00\u4E2A\u4F5C\u7528\u57DF\u91CD\u540D
   */</span>
  <span class="token string-property property">&#39;vue/no-template-shadow&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u6DFB\u52A0\u4E86 target=&quot;_blank&quot; \u5C5E\u6027\u65F6\uFF0C\u5FC5\u987B\u6DFB\u52A0 rel=&quot;noopener noreferrer&quot;
   */</span>
  <span class="token string-property property">&#39;vue/no-template-target-blank&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 &lt;textarea&gt; \u4E2D\u51FA\u73B0\u6A21\u7248\u8BED\u6CD5 {{message}}
   */</span>
  <span class="token string-property property">&#39;vue/no-textarea-mustache&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 beforeRouteEnter \u65B9\u6CD5\u4E2D\u4F7F\u7528 this
   */</span>
  <span class="token string-property property">&#39;vue/no-this-in-before-route-enter&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u672A\u6CE8\u518C\u7684\u7EC4\u4EF6
   */</span>
  <span class="token string-property property">&#39;vue/no-unregistered-components&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5F53\u4F60\u7684 vue \u7248\u672C\u8F83\u8001\u65F6\uFF0C\u7981\u7528\u8FD8\u672A\u652F\u6301\u7684\u8BED\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/no-unsupported-features&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5B9A\u4E49\u5728 components \u4E2D\u7684\u7EC4\u4EF6\u672A\u4F7F\u7528
   */</span>
  <span class="token string-property property">&#39;vue/no-unused-components&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5C5E\u6027\u5B9A\u4E49\u4E86\u5374\u672A\u4F7F\u7528
   */</span>
  <span class="token string-property property">&#39;vue/no-unused-properties&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u6807\u7B7E\u5C5E\u6027\u5FC5\u987B\u6309\u89C4\u5219\u6392\u5E8F
   * @reason \u8BC6\u522B\u6709\u9650\u5236\uFF0C\u65E0\u6CD5\u8BC6\u522B\u5728\u5176\u4ED6\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u7684\u60C5\u51B5
   */</span>
  <span class="token string-property property">&#39;vue/no-unused-refs&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u6A21\u7248\u4E2D\u5DF2\u5B9A\u4E49\u7684\u53D8\u91CF\u5FC5\u987B\u4F7F\u7528
   */</span>
  <span class="token string-property property">&#39;vue/no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5C06\u8BA1\u7B97\u719F\u6089\u5F53\u4F5C\u65B9\u6CD5\u8C03\u7528
   */</span>
  <span class="token string-property property">&#39;vue/no-use-computed-property-like-method&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u540C\u4E00\u4E2A\u5143\u7D20\u4E0A\u4F7F\u7528 v-if \u548C v-for \u6307\u4EE4
   */</span>
  <span class="token string-property property">&#39;vue/no-use-v-if-with-v-for&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FA\u73B0\u6CA1\u5FC5\u8981\u7684\u5B57\u7B26\u4E32\u8FDE\u63A5
   */</span>
  <span class="token string-property property">&#39;no-useless-concat&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;vue/no-useless-concat&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FA\u73B0\u65E0\u7528\u7684 mustache \u5B57\u7B26\u4E32
   */</span>
  <span class="token string-property property">&#39;vue/no-useless-mustaches&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u6A21\u7248\u4E2D\u4F7F\u7528\u672A\u751F\u6548\u7684\u5C5E\u6027
   */</span>
  <span class="token string-property property">&#39;vue/no-useless-template-attributes&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FA\u73B0\u65E0\u7528\u7684 v-bind
   */</span>
  <span class="token string-property property">&#39;vue/no-useless-v-bind&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u6709 v-for \u5C5E\u6027\u65F6\u53C8\u6709 key \u5C5E\u6027
   */</span>
  <span class="token string-property property">&#39;vue/no-v-for-template-key&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62 v-for \u5C5E\u6027\u7684\u5B50\u8282\u70B9\u6709 key \u5C5E\u6027
   */</span>
  <span class="token string-property property">&#39;vue/no-v-for-template-key-on-child&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 v-html
   */</span>
  <span class="token string-property property">&#39;vue/no-v-html&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u7ED9 v-model \u5C5E\u6027\u6DFB\u52A0\u53C2\u6570
   */</span>
  <span class="token string-property property">&#39;vue/no-v-model-argument&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 v-text
   */</span>
  <span class="token string-property property">&#39;vue/no-v-text&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 await \u4E4B\u540E\u8C03\u7528 watch
   */</span>
  <span class="token string-property property">&#39;vue/no-watch-after-await&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4E00\u4E2A\u6587\u4EF6\u5FC5\u987B\u4EC5\u5305\u542B\u4E00\u4E2A\u7EC4\u4EF6
   */</span>
  <span class="token string-property property">&#39;vue/one-component-per-file&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7EC4\u4EF6\u7684\u5C5E\u6027\u5FC5\u987B\u4E3A\u4E00\u5B9A\u7684\u987A\u5E8F
   */</span>
  <span class="token string-property property">&#39;vue/order-in-components&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * &lt;template&gt; &lt;script&gt; &lt;style&gt; \u4E4B\u95F4\u5FC5\u987B\u7531\u7A7A\u884C
   * @reason \u4EE3\u7801\u683C\u5F0F\u95EE\u9898\uFF0C\u6700\u597D\u7531 Prettier \u89E3\u51B3
   */</span>
  <span class="token string-property property">&#39;vue/padding-line-between-blocks&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u4F7F\u7528\u6A21\u7248\u5B57\u7B26\u4E32\u800C\u4E0D\u662F\u5B57\u7B26\u4E32\u8FDE\u63A5
   */</span>
  <span class="token string-property property">&#39;prefer-template&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;vue/prefer-template&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * props \u5FC5\u987B\u7528\u9A7C\u5CF0\u5F0F
   */</span>
  <span class="token string-property property">&#39;vue/prop-name-casing&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * &lt;component&gt; \u5FC5\u987B\u6709\u7ED1\u5B9A\u7684\u7EC4\u4EF6
   */</span>
  <span class="token string-property property">&#39;vue/require-component-is&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * props \u5982\u679C\u4E0D\u662F required \u7684\u5B57\u6BB5\uFF0C\u5FC5\u987B\u6709\u9ED8\u8BA4\u503C
   * @reason \u7C7B\u578B\u76F8\u5173\u7684\u7EA6\u675F\u4EA4\u7ED9 TypeScript
   */</span>
  <span class="token string-property property">&#39;vue/require-default-prop&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u76F4\u63A5\u4F7F\u7528 export default \u5BFC\u51FA\u7EC4\u4EF6
   */</span>
  <span class="token string-property property">&#39;vue/require-direct-export&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * emits \u5FC5\u987B\u4E3A\u51FD\u6570
   */</span>
  <span class="token string-property property">&#39;vue/require-emit-validator&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * emits \u5C5E\u6027\u5FC5\u987B\u5305\u542B $emit() \u4E2D\u7684\u503C
   */</span>
  <span class="token string-property property">&#39;vue/require-explicit-emits&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u5BFC\u51FA expose
   */</span>
  <span class="token string-property property">&#39;vue/require-expose&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7EC4\u4EF6\u5FC5\u987B\u5305\u542B name \u5C5E\u6027
   */</span>
  <span class="token string-property property">&#39;vue/require-name-property&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * props \u7684\u53D6\u503C\u5FC5\u987B\u662F\u57FA\u672C\u7C7B\u578B\u7684\u6784\u9020\u51FD\u6570\uFF0C\u800C\u4E0D\u662F\u5B57\u7B26\u4E32
   * @reason \u7C7B\u578B\u76F8\u5173\u7684\u7EA6\u675F\u4EA4\u7ED9 TypeScript
   */</span>
  <span class="token string-property property">&#39;vue/require-prop-type-constructor&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * prop \u5FC5\u987B\u6709\u7C7B\u578B\u9650\u5236
   * @reason \u7C7B\u578B\u76F8\u5173\u7684\u7EA6\u675F\u4EA4\u7ED9 TypeScript
   */</span>
  <span class="token string-property property">&#39;vue/require-prop-types&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * render \u51FD\u6570\u5FC5\u987B\u6709\u8FD4\u56DE\u503C
   */</span>
  <span class="token string-property property">&#39;vue/require-render-return&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * this.$slots.default \u5FC5\u987B\u88AB\u5F53\u4F5C\u65B9\u6CD5\u4F7F\u7528
   */</span>
  <span class="token string-property property">&#39;vue/require-slots-as-functions&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * transition \u5185\u90E8\u5FC5\u987B\u6709\u6761\u4EF6\u6307\u4EE4
   */</span>
  <span class="token string-property property">&#39;vue/require-toggle-inside-transition&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * v-for \u6307\u4EE4\u7684\u5143\u7D20\u5FC5\u987B\u6709 v-bind:key
   */</span>
  <span class="token string-property property">&#39;vue/require-v-for-key&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * prop \u7684\u9ED8\u8BA4\u503C\u5FC5\u987B\u5339\u914D\u5B83\u7684\u7C7B\u578B
   * @reason \u7C7B\u578B\u76F8\u5173\u7684\u7EA6\u675F\u4EA4\u7ED9 TypeScript
   */</span>
  <span class="token string-property property">&#39;vue/require-valid-default-prop&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u8BA1\u7B97\u5C5E\u6027\u5FC5\u987B\u6709\u8FD4\u56DE\u503C
   */</span>
  <span class="token string-property property">&#39;vue/return-in-computed-property&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * emits \u4E2D\u7684\u65B9\u6CD5\u5FC5\u987B\u6709\u8FD4\u56DE\u503C
   */</span>
  <span class="token string-property property">&#39;vue/return-in-emits-validator&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * script setup \u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\u5FC5\u987B\u4F7F\u7528
   */</span>
  <span class="token string-property property">&#39;vue/script-setup-uses-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * props \u7684\u952E\u540D\u5FC5\u987B\u6392\u597D\u5E8F
   */</span>
  <span class="token string-property property">&#39;vue/sort-keys&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * class \u7684\u503C\u5FC5\u987B\u6309\u5B57\u6BCD\u6392\u5E8F
   */</span>
  <span class="token string-property property">&#39;vue/static-class-names-order&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u6A21\u7248\u4E2D\u7528 this
   */</span>
  <span class="token string-property property">&#39;vue/this-in-template&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5F53\u4E00\u4E2A\u8282\u70B9\u4E0A\u51FA\u73B0\u4E24\u4E2A v-on:click \u65F6\uFF0C\u5176\u4E2D\u4E00\u4E2A\u5FC5\u987B\u4E3A exact
   */</span>
  <span class="token string-property property">&#39;vue/use-v-on-exact&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528\u7F29\u5199\u7684 : \u800C\u4E0D\u662F v-bind:
   */</span>
  <span class="token string-property property">&#39;vue/v-bind-style&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * v-for \u4E2D\u5FC5\u987B\u7528 in \u8FDB\u884C\u904D\u5386
   */</span>
  <span class="token string-property property">&#39;vue/v-for-delimiter-style&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 v-on \u7684\u4E8B\u4EF6\u540D\u4F7F\u7528\u6A2A\u6760
   */</span>
  <span class="token string-property property">&#39;vue/v-on-event-hyphenation&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 v-on \u7684\u503C\u4E2D\u8C03\u7528\u51FD\u6570
   */</span>
  <span class="token string-property property">&#39;vue/v-on-function-call&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528\u7F29\u5199\u7684 @click \u800C\u4E0D\u662F v-on:click
   */</span>
  <span class="token string-property property">&#39;vue/v-on-style&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528\u7F29\u5199\u7684 #one \u800C\u4E0D\u662F v-slot:one
   */</span>
  <span class="token string-property property">&#39;vue/v-slot-style&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * defineEmits \u5FC5\u987B\u4F7F\u7528\u5408\u6CD5\u7684\u8BED\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-define-emits&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * defineProps \u5FC5\u987B\u4F7F\u7528\u5408\u6CD5\u7684\u8BED\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-define-props&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u8C03\u7528 Vue.nextTick \u6216 vm.$nextTick \u65F6\u4E0D\u4F7F\u7528 await
   */</span>
  <span class="token string-property property">&#39;vue/valid-next-tick&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * template \u7684\u6839\u8282\u70B9\u5FC5\u987B\u5408\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-template-root&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * v-bind \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-v-bind&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * v-bind:foo.sync \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-v-bind-sync&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * v-cloak \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-v-cloak&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * v-else \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-v-else&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * v-else-if \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-v-else-if&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * v-for \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-v-for&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * v-html \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-v-html&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * v-if \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-v-if&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * v-is \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-v-is&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * valid-v-memo \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-v-memo&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * v-model \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-v-model&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * v-on \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-v-on&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * v-once \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-v-once&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * v-pre \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-v-pre&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * v-show \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-v-show&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * v-slot \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-v-slot&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * v-text \u6307\u4EE4\u5FC5\u987B\u5408\u6CD5
   */</span>
  <span class="token string-property property">&#39;vue/valid-v-text&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;vue/html-indent&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;vue/html-closing-bracket-newline&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">singleline</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">multiline</span><span class="token operator">:</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u591A\u4E2A\u7279\u6027\u7684\u5143\u7D20\u5E94\u8BE5\u5206\u591A\u884C\u64B0\u5199\uFF0C\u6BCF\u4E2A\u7279\u6027\u4E00\u884C</span>
  <span class="token string-property property">&#39;vue/max-attributes-per-line&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">singleline</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token literal-property property">multiline</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">allowFirstLine</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5728\u5355\u884C\u5143\u7D20\u7684\u5185\u5BB9\u524D\u540E\u9700\u8981\u6362\u884C\u7B26
   */</span>
  <span class="token string-property property">&#39;vue/singleline-html-element-content-newline&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5728\u591A\u884C\u5143\u7D20\u7684\u5185\u5BB9\u4E4B\u524D\u548C\u4E4B\u540E\u9700\u8981\u6362\u884C\u7B26
   */</span>
  <span class="token string-property property">&#39;vue/multiline-html-element-content-newline&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,4),e=[o];function r(c,l,k,i,u,m){return a(),s("div",null,e)}var v=n(t,[["render",r]]);export{g as __pageData,v as default};
