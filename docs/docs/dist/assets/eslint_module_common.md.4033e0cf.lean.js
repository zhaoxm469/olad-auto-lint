import{_ as n,c as s,o as a,a as p}from"./app.62e41da6.js";const t={components:{}},g='{"title":"common \u516C\u5171\u89C4\u5219","description":"","frontmatter":{},"relativePath":"eslint/module/common.md","lastUpdated":1647827068437}',o=p(`__VP_STATIC_START__<h1 id="common-\u516C\u5171\u89C4\u5219"><a class="header-anchor" href="#common-\u516C\u5171\u89C4\u5219" aria-hidden="true">#</a> common \u516C\u5171\u89C4\u5219</h1><p>\u516C\u5171\u7684\u89C4\u5219 , \u6240\u6709\u89C4\u5219\u9ED8\u8BA4\u90FD\u4F1A\u96C6\u6210\u8FD9\u4E2A\u89C4\u5219 \u3002\u53C2\u8003 <a href="https://eslint.bootcss.com/docs/rules/" target="_blank" rel="noopener noreferrer">https://eslint.bootcss.com/docs/rules/</a></p><p>\u5177\u4F53\u89C4\u5219\u5982\u4E0B\uFF1A</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * setter \u5FC5\u987B\u6709\u5BF9\u5E94\u7684 getter\uFF0Cgetter \u53EF\u4EE5\u6CA1\u6709\u5BF9\u5E94\u7684 setter
   */</span>
  <span class="token string-property property">&#39;accessor-pairs&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">setWithoutGet</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">getWithoutSet</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u6570\u7EC4\u7684\u65B9\u6CD5\u9664\u4E86 forEach \u4E4B\u5916\uFF0C\u56DE\u8C03\u51FD\u6570\u5FC5\u987B\u6709\u8FD4\u56DE\u503C
   */</span>
  <span class="token string-property property">&#39;array-callback-return&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7BAD\u5934\u51FD\u6570\u4F53\u5FC5\u987B\u7531\u5927\u62EC\u53F7\u5305\u88F9
   * @reason \u4EE3\u7801\u683C\u5F0F\u95EE\u9898\uFF0C\u6700\u597D\u7531 Prettier \u89E3\u51B3
   */</span>
  <span class="token string-property property">&#39;arrow-body-style&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5728\u7BAD\u5934\u51FD\u6570\u4E2D\u7684\u7BAD\u5934\u524D\u540E\u5F3A\u5236\u4FDD\u6301\u4E00\u81F4\u7684\u95F4\u8DDD
   */</span>
  <span class="token string-property property">&#39;arrow-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">before</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">after</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5C06 var \u5B9A\u4E49\u7684\u53D8\u91CF\u89C6\u4E3A\u5757\u4F5C\u7528\u57DF\uFF0C\u7981\u6B62\u5728\u5757\u5916\u4F7F\u7528
   * @reason \u5DF2\u7ECF\u7981\u6B62\u4F7F\u7528 var \u4E86
   */</span>
  <span class="token string-property property">&#39;block-scoped-var&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u53D8\u91CF\u540D\u5FC5\u987B\u662F camelCase \u98CE\u683C\u7684
   * @reason \u5F88\u591A api \u6216\u6587\u4EF6\u540D\u90FD\u4E0D\u662F camelCase \u98CE\u683C\u7684
   */</span>
  <span class="token literal-property property">camelcase</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u6CE8\u91CA\u7684\u9996\u5B57\u6BCD\u5FC5\u987B\u5927\u5199
   */</span>
  <span class="token string-property property">&#39;capitalized-comments&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5728\u7C7B\u7684\u975E\u9759\u6001\u65B9\u6CD5\u4E2D\uFF0C\u5FC5\u987B\u5B58\u5728\u5BF9 this \u7684\u5F15\u7528
   */</span>
  <span class="token string-property property">&#39;class-methods-use-this&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FD\u6570\u7684\u5FAA\u73AF\u590D\u6742\u5EA6\u8D85\u8FC7 20
   * @reason https://en.wikipedia.org/wiki/Cyclomatic_complexity
   */</span>
  <span class="token literal-property property">complexity</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FD\u6570\u5728\u4E0D\u540C\u5206\u652F\u8FD4\u56DE\u4E0D\u540C\u7C7B\u578B\u7684\u503C
   * @reason \u7F3A\u5C11 TypeScript \u7684\u652F\u6301\uFF0C\u7C7B\u578B\u5224\u65AD\u662F\u4E0D\u51C6\u786E\u7684
   */</span>
  <span class="token string-property property">&#39;consistent-return&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u9650\u5236 this \u7684\u522B\u540D
   */</span>
  <span class="token string-property property">&#39;consistent-this&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * constructor \u4E2D\u5FC5\u987B\u6709 super
   */</span>
  <span class="token string-property property">&#39;constructor-super&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4E0D\u5F3A\u5236 \u6700\u540E\u4E00\u4E2A
   */</span>
  <span class="token string-property property">&#39;comma-dangle&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4E0D\u5224\u65AD\u5BF9\u8C61\u65B9\u6CD5\u91CC\u662F\u5426\u4F7F\u7528\u4E86 this
   */</span>
  <span class="token string-property property">&#39;class-methods-use-this&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * switch \u8BED\u53E5\u5FC5\u987B\u6709 default
   */</span>
  <span class="token string-property property">&#39;default-case&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * switch \u8BED\u53E5\u4E2D\u7684 default \u5FC5\u987B\u5728\u6700\u540E
   */</span>
  <span class="token string-property property">&#39;default-case-last&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u6709\u9ED8\u8BA4\u503C\u7684\u53C2\u6570\u5FC5\u987B\u653E\u5728\u51FD\u6570\u53C2\u6570\u7684\u672B\u5C3E
   */</span>
  <span class="token string-property property">&#39;default-param-last&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 foo[&#39;bar&#39;]\uFF0C\u5FC5\u987B\u5199\u6210 foo.bar
   * @reason \u5F53\u9700\u8981\u5199\u4E00\u7CFB\u5217\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u66F4\u7EDF\u4E00
   */</span>
  <span class="token string-property property">&#39;dot-notation&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u4F7F\u7528 === \u6216 !==\uFF0C\u7981\u6B62\u4F7F\u7528 == \u6216 !=
   */</span>
  <span class="token literal-property property">eqeqeq</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u65B9\u5411\u9519\u8BEF\u7684 for \u5FAA\u73AF
   */</span>
  <span class="token string-property property">&#39;for-direction&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u51FD\u6570\u8D4B\u503C\u7ED9\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u51FD\u6570\u540D\u5FC5\u987B\u4E0E\u53D8\u91CF\u540D\u4E00\u81F4
   */</span>
  <span class="token string-property property">&#39;func-name-matching&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">includeCommonJSModuleExports</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u51FD\u6570\u5FC5\u987B\u6709\u540D\u5B57
   */</span>
  <span class="token string-property property">&#39;func-names&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u53EA\u4F7F\u7528\u51FD\u6570\u58F0\u660E\u6216\u53EA\u4F7F\u7528\u51FD\u6570\u8868\u8FBE\u5F0F
   */</span>
  <span class="token string-property property">&#39;func-style&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * getter \u5FC5\u987B\u6709\u8FD4\u56DE\u503C\uFF0C\u5E76\u4E14\u7981\u6B62\u8FD4\u56DE\u7A7A
   */</span>
  <span class="token string-property property">&#39;getter-return&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5728\u751F\u6210\u5668\u51FD\u6570\u4E2D\u7684\`*\`\u8FD0\u7B97\u7B26\u5468\u56F4\u5F3A\u5236\u4FDD\u6301\u4E00\u81F4\u7684\u95F4\u8DDD
   */</span>
  <span class="token string-property property">&#39;generator-star-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">before</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">after</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * setter \u548C getter \u5FC5\u987B\u5199\u5728\u4E00\u8D77
   */</span>
  <span class="token string-property property">&#39;grouped-accessor-pairs&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * for in \u5185\u90E8\u5FC5\u987B\u6709 hasOwnProperty
   */</span>
  <span class="token string-property property">&#39;guard-for-in&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u6307\u5B9A\u7684\u6807\u8BC6\u7B26
   */</span>
  <span class="token string-property property">&#39;id-denylist&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u9650\u5236\u53D8\u91CF\u540D\u957F\u5EA6
   */</span>
  <span class="token string-property property">&#39;id-length&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u9650\u5236\u53D8\u91CF\u540D\u5FC5\u987B\u5339\u914D\u6307\u5B9A\u7684\u6B63\u5219\u8868\u8FBE\u5F0F
   */</span>
  <span class="token string-property property">&#39;id-match&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u9996\u884C\u7F29\u8FDB
   */</span>
  <span class="token literal-property property">indent</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">SwitchCase</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u53D8\u91CF\u5FC5\u987B\u5728\u5B9A\u4E49\u7684\u65F6\u5019\u8D4B\u503C
   */</span>
  <span class="token string-property property">&#39;init-declarations&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5C5E\u6027\u4F7F\u7528\u53CC\u5F15\u53F7
   */</span>
  <span class="token string-property property">&#39;jsx-quotes&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;prefer-double&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5355\u884C\u6CE8\u91CA\u5FC5\u987B\u5199\u5728\u4E0A\u4E00\u884C
   */</span>
  <span class="token string-property property">&#39;line-comment-position&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7C7B\u7684\u6210\u5458\u4E4B\u95F4\u662F\u5426\u9700\u8981\u7A7A\u884C
   * @reason \u6709\u65F6\u4E3A\u4E86\u7D27\u51D1\u9700\u8981\u6328\u5728\u4E00\u8D77\uFF0C\u6709\u65F6\u4E3A\u4E86\u53EF\u8BFB\u6027\u9700\u8981\u7A7A\u4E00\u884C
   */</span>
  <span class="token string-property property">&#39;lines-between-class-members&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u9650\u5236\u4E00\u4E2A\u6587\u4EF6\u4E2D\u7C7B\u7684\u6570\u91CF
   */</span>
  <span class="token string-property property">&#39;max-classes-per-file&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4EE3\u7801\u5757\u5D4C\u5957\u7684\u6DF1\u5EA6\u7981\u6B62\u8D85\u8FC7 5 \u5C42
   */</span>
  <span class="token string-property property">&#39;max-depth&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u9650\u5236\u4E00\u4E2A\u6587\u4EF6\u6700\u591A\u7684\u884C\u6570
   */</span>
  <span class="token string-property property">&#39;max-lines&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u9650\u5236\u51FD\u6570\u5757\u4E2D\u7684\u4EE3\u7801\u884C\u6570
   */</span>
  <span class="token string-property property">&#39;max-lines-per-function&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u56DE\u8C03\u51FD\u6570\u5D4C\u5957\u7981\u6B62\u8D85\u8FC7 3 \u5C42\uFF0C\u591A\u4E86\u8BF7\u7528 async await \u66FF\u4EE3
   */</span>
  <span class="token string-property property">&#39;max-nested-callbacks&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u51FD\u6570\u7684\u53C2\u6570\u7981\u6B62\u8D85\u8FC7 6 \u4E2A
   */</span>
  <span class="token string-property property">&#39;max-params&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u9650\u5236\u51FD\u6570\u5757\u4E2D\u7684\u8BED\u53E5\u6570\u91CF
   */</span>
  <span class="token string-property property">&#39;max-statements&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u9650\u5236\u4E00\u884C\u4E2D\u7684\u8BED\u53E5\u6570\u91CF
   */</span>
  <span class="token string-property property">&#39;max-statements-per-line&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7EA6\u675F\u591A\u884C\u6CE8\u91CA\u7684\u683C\u5F0F
   * @reason \u80FD\u5199\u6CE8\u91CA\u5DF2\u7ECF\u4E0D\u5BB9\u6613\u4E86\uFF0C\u4E0D\u9700\u8981\u9650\u5236\u592A\u591A
   */</span>
  <span class="token string-property property">&#39;multiline-comment-style&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * new \u540E\u9762\u7684\u7C7B\u540D\u5FC5\u987B\u9996\u5B57\u6BCD\u5927\u5199
   */</span>
  <span class="token string-property property">&#39;new-cap&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">newIsCap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">capIsNew</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 alert
   */</span>
  <span class="token string-property property">&#39;no-alert&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 Array \u6784\u9020\u51FD\u6570\u65F6\u4F20\u5165\u7684\u53C2\u6570\u8D85\u8FC7\u4E00\u4E2A
   * @reason \u53C2\u6570\u4E3A\u4E00\u4E2A\u65F6\u8868\u793A\u521B\u5EFA\u4E00\u4E2A\u6307\u5B9A\u957F\u5EA6\u7684\u6570\u7EC4\uFF0C\u6BD4\u8F83\u5E38\u7528
   * \u53C2\u6570\u4E3A\u591A\u4E2A\u65F6\u8868\u793A\u521B\u5EFA\u4E00\u4E2A\u6307\u5B9A\u5185\u5BB9\u7684\u6570\u7EC4\uFF0C\u6B64\u65F6\u53EF\u4EE5\u7528\u6570\u7EC4\u5B57\u9762\u91CF\u5B9E\u73B0\uFF0C\u4E0D\u5FC5\u4F7F\u7528\u6784\u9020\u51FD\u6570
   */</span>
  <span class="token string-property property">&#39;no-array-constructor&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5C06 async \u51FD\u6570\u505A\u4E3A new Promise \u7684\u56DE\u8C03\u51FD\u6570
   * @reason \u51FA\u73B0\u8FD9\u79CD\u60C5\u51B5\u65F6\uFF0C\u4E00\u822C\u4E0D\u9700\u8981\u4F7F\u7528 new Promise \u5B9E\u73B0\u5F02\u6B65\u4E86
   */</span>
  <span class="token string-property property">&#39;no-async-promise-executor&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5C06 await \u5199\u5728\u5FAA\u73AF\u91CC\uFF0C\u56E0\u4E3A\u8FD9\u6837\u5C31\u65E0\u6CD5\u540C\u65F6\u53D1\u9001\u591A\u4E2A\u5F02\u6B65\u8BF7\u6C42\u4E86
   * @reason \u8981\u6C42\u592A\u4E25\u683C\u4E86\uFF0C\u6709\u65F6\u9700\u8981\u5728\u5FAA\u73AF\u4E2D\u5199 await
   */</span>
  <span class="token string-property property">&#39;no-await-in-loop&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u4F4D\u8FD0\u7B97
   */</span>
  <span class="token string-property property">&#39;no-bitwise&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 caller \u6216 callee
   * @reason \u5B83\u4EEC\u662F\u5DF2\u5E9F\u5F03\u7684\u8BED\u6CD5
   */</span>
  <span class="token string-property property">&#39;no-caller&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * switch \u7684 case \u5185\u6709\u53D8\u91CF\u5B9A\u4E49\u7684\u65F6\u5019\uFF0C\u5FC5\u987B\u4F7F\u7528\u5927\u62EC\u53F7\u5C06 case \u5185\u53D8\u6210\u4E00\u4E2A\u4EE3\u7801\u5757
   */</span>
  <span class="token string-property property">&#39;no-case-declarations&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5BF9\u5DF2\u5B9A\u4E49\u7684 class \u91CD\u65B0\u8D4B\u503C
   */</span>
  <span class="token string-property property">&#39;no-class-assign&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4E0E\u8D1F\u96F6\u8FDB\u884C\u6BD4\u8F83
   */</span>
  <span class="token string-property property">&#39;no-compare-neg-zero&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u6D4B\u8BD5\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u8D4B\u503C\u8BED\u53E5\uFF0C\u9664\u975E\u8FD9\u4E2A\u8D4B\u503C\u8BED\u53E5\u88AB\u62EC\u53F7\u5305\u8D77\u6765\u4E86
   */</span>
  <span class="token string-property property">&#39;no-cond-assign&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;except-parens&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 console
   */</span>
  <span class="token string-property property">&#39;no-console&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5BF9\u4F7F\u7528 const \u5B9A\u4E49\u7684\u5E38\u91CF\u91CD\u65B0\u8D4B\u503C
   */</span>
  <span class="token string-property property">&#39;no-const-assign&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5C06\u5E38\u91CF\u4F5C\u4E3A\u5206\u652F\u6761\u4EF6\u5224\u65AD\u4E2D\u7684\u6D4B\u8BD5\u8868\u8FBE\u5F0F\uFF0C\u4F46\u5141\u8BB8\u4F5C\u4E3A\u5FAA\u73AF\u6761\u4EF6\u5224\u65AD\u4E2D\u7684\u6D4B\u8BD5\u8868\u8FBE\u5F0F
   */</span>
  <span class="token string-property property">&#39;no-constant-condition&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">checkLoops</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u6784\u9020\u51FD\u6570\u4E2D\u8FD4\u56DE\u503C
   */</span>
  <span class="token string-property property">&#39;no-constructor-return&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 continue
   */</span>
  <span class="token string-property property">&#39;no-continue&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u51FA\u73B0 Ctrl \u952E\u7684 ASCII \u8868\u793A\uFF0C\u5373\u7981\u6B62\u4F7F\u7528 /\\x1f/
   * @reason \u51E0\u4E4E\u4E0D\u4F1A\u9047\u5230\u8FD9\u79CD\u573A\u666F
   */</span>
  <span class="token string-property property">&#39;no-control-regex&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 debugger
   */</span>
  <span class="token string-property property">&#39;no-debugger&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5BF9\u4E00\u4E2A\u53D8\u91CF\u4F7F\u7528 delete
   * @reason \u7F16\u8BD1\u9636\u6BB5\u5C31\u4F1A\u62A5\u9519\u4E86
   */</span>
  <span class="token string-property property">&#39;no-delete-var&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u51FA\u73B0\u5F62\u4F3C\u9664\u6CD5\u64CD\u4F5C\u7B26\u7684\u5F00\u5934\uFF0C\u5982 let a = /=foo/
   * @reason \u6709\u4EE3\u7801\u9AD8\u4EAE\u7684\u8BDD\uFF0C\u5728\u9605\u8BFB\u8FD9\u79CD\u4EE3\u7801\u65F6\uFF0C\u4E5F\u5B8C\u5168\u4E0D\u4F1A\u4EA7\u751F\u6B67\u4E49\u6216\u7406\u89E3\u4E0A\u7684\u56F0\u96BE
   */</span>
  <span class="token string-property property">&#39;no-div-regex&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u51FD\u6570\u53C2\u6570\u4E2D\u51FA\u73B0\u91CD\u590D\u540D\u79F0\u7684\u53C2\u6570
   * @reason \u7F16\u8BD1\u9636\u6BB5\u5C31\u4F1A\u62A5\u9519\u4E86
   */</span>
  <span class="token string-property property">&#39;no-dupe-args&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u91CD\u590D\u5B9A\u4E49\u7C7B\u7684\u6210\u5458
   */</span>
  <span class="token string-property property">&#39;no-dupe-class-members&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62 if else \u7684\u6761\u4EF6\u5224\u65AD\u4E2D\u51FA\u73B0\u91CD\u590D\u7684\u6761\u4EF6
   */</span>
  <span class="token string-property property">&#39;no-dupe-else-if&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u5BF9\u8C61\u5B57\u9762\u91CF\u4E2D\u51FA\u73B0\u91CD\u590D\u7684\u952E\u540D
   */</span>
  <span class="token string-property property">&#39;no-dupe-keys&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 switch \u8BED\u53E5\u4E2D\u51FA\u73B0\u91CD\u590D\u6D4B\u8BD5\u8868\u8FBE\u5F0F\u7684 case
   */</span>
  <span class="token string-property property">&#39;no-duplicate-case&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u91CD\u590D\u5BFC\u5165\u6A21\u5757
   */</span>
  <span class="token string-property property">&#39;no-duplicate-imports&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 else \u5185\u4F7F\u7528 return\uFF0C\u5FC5\u987B\u6539\u4E3A\u63D0\u524D\u7ED3\u675F
   * @reason else \u4E2D\u4F7F\u7528 return \u53EF\u4EE5\u4F7F\u4EE3\u7801\u7ED3\u6784\u66F4\u6E05\u6670
   */</span>
  <span class="token string-property property">&#39;no-else-return&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FA\u73B0\u7A7A\u4EE3\u7801\u5757\uFF0C\u5141\u8BB8 catch \u4E3A\u7A7A\u4EE3\u7801\u5757
   */</span>
  <span class="token string-property property">&#39;no-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">allowEmptyCatch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u7A7A\u7684\u5B57\u7B26\u96C6 []
   */</span>
  <span class="token string-property property">&#39;no-empty-character-class&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4E0D\u5141\u8BB8\u6709\u7A7A\u51FD\u6570
   * @reason \u6709\u65F6\u9700\u8981\u5C06\u4E00\u4E2A\u7A7A\u51FD\u6570\u8BBE\u7F6E\u4E3A\u67D0\u4E2A\u9879\u7684\u9ED8\u8BA4\u503C
   */</span>
  <span class="token string-property property">&#39;no-empty-function&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u89E3\u6784\u8D4B\u503C\u4E2D\u51FA\u73B0\u7A7A {} \u6216 []
   */</span>
  <span class="token string-property property">&#39;no-empty-pattern&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 foo == null\uFF0C\u5FC5\u987B\u4F7F\u7528 foo === null
   */</span>
  <span class="token string-property property">&#39;no-eq-null&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 eval
   */</span>
  <span class="token string-property property">&#39;no-eval&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5C06 catch \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570 error \u91CD\u65B0\u8D4B\u503C
   */</span>
  <span class="token string-property property">&#39;no-ex-assign&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4FEE\u6539\u539F\u751F\u5BF9\u8C61
   * @reason \u4FEE\u6539\u539F\u751F\u5BF9\u8C61\u53EF\u80FD\u4F1A\u4E0E\u5C06\u6765\u7248\u672C\u7684 js \u51B2\u7A81
   */</span>
  <span class="token string-property property">&#39;no-extend-native&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FA\u73B0\u6CA1\u5FC5\u8981\u7684 bind
   */</span>
  <span class="token string-property property">&#39;no-extra-bind&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4E0D\u5FC5\u8981\u7684\u5E03\u5C14\u7C7B\u578B\u8F6C\u6362
   */</span>
  <span class="token string-property property">&#39;no-extra-boolean-cast&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FA\u73B0\u6CA1\u5FC5\u8981\u7684 label
   * @reason \u5DF2\u7ECF\u7981\u6B62\u4F7F\u7528 label \u4E86
   */</span>
  <span class="token string-property property">&#39;no-extra-label&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * switch \u7684 case \u5185\u5FC5\u987B\u6709 break, return \u6216 throw\uFF0C\u7A7A\u7684 case \u9664\u5916
   */</span>
  <span class="token string-property property">&#39;no-fallthrough&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5C06\u4E00\u4E2A\u51FD\u6570\u58F0\u660E\u91CD\u65B0\u8D4B\u503C
   */</span>
  <span class="token string-property property">&#39;no-func-assign&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5BF9\u5168\u5C40\u53D8\u91CF\u8D4B\u503C
   */</span>
  <span class="token string-property property">&#39;no-global-assign&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 ~+ \u7B49\u96BE\u4EE5\u7406\u89E3\u7684\u7C7B\u578B\u8F6C\u6362\uFF0C\u4EC5\u5141\u8BB8\u4F7F\u7528 !!
   */</span>
  <span class="token string-property property">&#39;no-implicit-coercion&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">allow</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;!!&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E0B\u5B9A\u4E49\u53D8\u91CF\u6216\u7533\u660E\u51FD\u6570
   * @reason \u6A21\u5757\u5316\u4E4B\u540E\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u8FD9\u79CD\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E0B\u5B9A\u4E49\u53D8\u91CF\u7684\u60C5\u51B5
   */</span>
  <span class="token string-property property">&#39;no-implicit-globals&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 setTimeout \u6216 setInterval \u4E2D\u4F20\u5165\u5B57\u7B26\u4E32
   */</span>
  <span class="token string-property property">&#39;no-implied-eval&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5BF9\u5BFC\u5165\u7684\u6A21\u5757\u8FDB\u884C\u8D4B\u503C
   */</span>
  <span class="token string-property property">&#39;no-import-assign&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u4EE3\u7801\u540E\u6DFB\u52A0\u5355\u884C\u6CE8\u91CA
   */</span>
  <span class="token string-property property">&#39;no-inline-comments&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 if \u4EE3\u7801\u5757\u5185\u51FA\u73B0\u51FD\u6570\u58F0\u660E
   */</span>
  <span class="token string-property property">&#39;no-inner-declarations&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;both&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 RegExp \u6784\u9020\u51FD\u6570\u4E2D\u51FA\u73B0\u975E\u6CD5\u7684\u6B63\u5219\u8868\u8FBE\u5F0F
   */</span>
  <span class="token string-property property">&#39;no-invalid-regexp&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u7C7B\u4E4B\u5916\u7684\u5730\u65B9\u4F7F\u7528 this
   * @reason \u53EA\u5141\u8BB8\u5728 class \u4E2D\u4F7F\u7528 this
   */</span>
  <span class="token string-property property">&#39;no-invalid-this&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u7279\u6B8A\u7A7A\u767D\u7B26\uFF08\u6BD4\u5982\u5168\u89D2\u7A7A\u683C\uFF09\uFF0C\u9664\u975E\u662F\u51FA\u73B0\u5728\u5B57\u7B26\u4E32\u3001\u6B63\u5219\u8868\u8FBE\u5F0F\u6216\u6A21\u7248\u5B57\u7B26\u4E32\u4E2D
   */</span>
  <span class="token string-property property">&#39;no-irregular-whitespace&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">skipStrings</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">skipComments</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">skipRegExps</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">skipTemplates</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 __iterator__
   * @reason __iterator__ \u662F\u4E00\u4E2A\u5DF2\u5E9F\u5F03\u7684\u5C5E\u6027
   * \u4F7F\u7528 [Symbol.iterator] \u66FF\u4EE3\u5B83
   */</span>
  <span class="token string-property property">&#39;no-iterator&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62 label \u540D\u79F0\u4E0E\u5DF2\u5B9A\u4E49\u7684\u53D8\u91CF\u91CD\u590D
   * @reason \u5DF2\u7ECF\u7981\u6B62\u4F7F\u7528 label \u4E86
   */</span>
  <span class="token string-property property">&#39;no-label-var&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 label
   */</span>
  <span class="token string-property property">&#39;no-labels&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u6CA1\u5FC5\u8981\u7684 {} \u4F5C\u4E3A\u4EE3\u7801\u5757
   */</span>
  <span class="token string-property property">&#39;no-lone-blocks&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62 else \u4E2D\u53EA\u6709\u4E00\u4E2A\u5355\u72EC\u7684 if
   * @reason \u5355\u72EC\u7684 if \u53EF\u4EE5\u628A\u903B\u8F91\u8868\u8FBE\u7684\u66F4\u6E05\u695A
   */</span>
  <span class="token string-property property">&#39;no-lonely-if&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u5FAA\u73AF\u5185\u7684\u51FD\u6570\u5185\u90E8\u51FA\u73B0\u5FAA\u73AF\u4F53\u6761\u4EF6\u8BED\u53E5\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF
   * @reason \u4F7F\u7528 let \u5C31\u5DF2\u7ECF\u89E3\u51B3\u4E86\u8FD9\u4E2A\u95EE\u9898\u4E86
   */</span>
  <span class="token string-property property">&#39;no-loop-func&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u8D85\u51FA js \u7CBE\u5EA6\u8303\u56F4\u7684\u6570\u5B57
   */</span>
  <span class="token string-property property">&#39;no-loss-of-precision&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 magic numbers
   */</span>
  <span class="token string-property property">&#39;no-magic-numbers&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u8089\u773C\u65E0\u6CD5\u533A\u5206\u7684\u7279\u6B8A\u5B57\u7B26
   * @reason \u67D0\u4E9B\u7279\u6B8A\u5B57\u7B26\u5F88\u96BE\u770B\u51FA\u5DEE\u5F02\uFF0C\u6700\u597D\u4E0D\u8981\u5728\u6B63\u5219\u4E2D\u4F7F\u7528
   */</span>
  <span class="token string-property property">&#39;no-misleading-character-class&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u8FDE\u7EED\u8D4B\u503C\uFF0C\u6BD4\u5982 foo = bar = 1
   */</span>
  <span class="token string-property property">&#39;no-multi-assign&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 \\ \u6765\u6362\u884C\u5B57\u7B26\u4E32
   */</span>
  <span class="token string-property property">&#39;no-multi-str&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62 if \u91CC\u6709\u5426\u5B9A\u7684\u8868\u8FBE\u5F0F
   * @reason \u5426\u5B9A\u7684\u8868\u8FBE\u5F0F\u53EF\u4EE5\u628A\u903B\u8F91\u8868\u8FBE\u7684\u66F4\u6E05\u695A
   */</span>
  <span class="token string-property property">&#39;no-negated-condition&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u5D4C\u5957\u7684\u4E09\u5143\u8868\u8FBE\u5F0F\uFF0C\u6BD4\u5982 a ? b : c ? d : e
   */</span>
  <span class="token string-property property">&#39;no-nested-ternary&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u76F4\u63A5 new \u4E00\u4E2A\u7C7B\u800C\u4E0D\u8D4B\u503C
   * @reason new \u5E94\u8BE5\u4F5C\u4E3A\u521B\u5EFA\u4E00\u4E2A\u7C7B\u7684\u5B9E\u4F8B\u7684\u65B9\u6CD5\uFF0C\u6240\u4EE5\u4E0D\u80FD\u4E0D\u8D4B\u503C
   */</span>
  <span class="token string-property property">&#39;no-new&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 new Function
   * @reason \u8FD9\u548C eval \u662F\u7B49\u4EF7\u7684
   */</span>
  <span class="token string-property property">&#39;no-new-func&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u76F4\u63A5 new Object
   */</span>
  <span class="token string-property property">&#39;no-new-object&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 new \u6765\u751F\u6210 Symbol
   */</span>
  <span class="token string-property property">&#39;no-new-symbol&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 new \u6765\u751F\u6210 String, Number \u6216 Boolean
   */</span>
  <span class="token string-property property">&#39;no-new-wrappers&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u5B57\u7B26\u4E32\u4E2D\u4F7F\u7528 \\8 \\9
   * @reason \u4EE3\u7801\u683C\u5F0F\u95EE\u9898\uFF0C\u6700\u597D\u7531 Prettier \u89E3\u51B3
   */</span>
  <span class="token string-property property">&#39;no-nonoctal-decimal-escape&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5C06 Math, JSON \u6216 Reflect \u76F4\u63A5\u4F5C\u4E3A\u51FD\u6570\u8C03\u7528
   */</span>
  <span class="token string-property property">&#39;no-obj-calls&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 0 \u5F00\u5934\u7684\u6570\u5B57\u8868\u793A\u516B\u8FDB\u5236\u6570
   * @reason \u7F16\u8BD1\u9636\u6BB5\u5C31\u4F1A\u62A5\u9519\u4E86
   */</span>
  <span class="token string-property property">&#39;no-octal&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u516B\u8FDB\u5236\u7684\u8F6C\u4E49\u7B26
   * @reason \u7F16\u8BD1\u9636\u6BB5\u5C31\u4F1A\u62A5\u9519\u4E86
   */</span>
  <span class="token string-property property">&#39;no-octal-escape&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5BF9\u51FD\u6570\u7684\u53C2\u6570\u91CD\u65B0\u8D4B\u503C
   */</span>
  <span class="token string-property property">&#39;no-param-reassign&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 ++ \u6216 --
   */</span>
  <span class="token string-property property">&#39;no-plusplus&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 Promise \u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u76F4\u63A5 return
   */</span>
  <span class="token string-property property">&#39;no-promise-executor-return&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 __proto__
   * @reason __proto__ \u662F\u5DF2\u5E9F\u5F03\u7684\u8BED\u6CD5
   */</span>
  <span class="token string-property property">&#39;no-proto&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 hasOwnProperty, isPrototypeOf \u6216 propertyIsEnumerable
   * @reason hasOwnProperty \u6BD4\u8F83\u5E38\u7528
   */</span>
  <span class="token string-property property">&#39;no-prototype-builtins&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u91CD\u590D\u5B9A\u4E49\u53D8\u91CF
   * @reason \u7981\u7528 var \u4E4B\u540E\uFF0C\u7F16\u8BD1\u9636\u6BB5\u5C31\u4F1A\u62A5\u9519\u4E86
   */</span>
  <span class="token string-property property">&#39;no-redeclare&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u51FA\u73B0\u8FDE\u7EED\u7684\u7A7A\u683C
   */</span>
  <span class="token string-property property">&#39;no-regex-spaces&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5BFC\u51FA\u6307\u5B9A\u7684\u53D8\u91CF\u540D
   */</span>
  <span class="token string-property property">&#39;no-restricted-exports&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u6307\u5B9A\u7684\u5168\u5C40\u53D8\u91CF
   */</span>
  <span class="token string-property property">&#39;no-restricted-globals&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5BFC\u5165\u6307\u5B9A\u7684\u6A21\u5757
   */</span>
  <span class="token string-property property">&#39;no-restricted-imports&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u6307\u5B9A\u7684\u5BF9\u8C61\u5C5E\u6027
   */</span>
  <span class="token string-property property">&#39;no-restricted-properties&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u6307\u5B9A\u7684\u8BED\u6CD5
   */</span>
  <span class="token string-property property">&#39;no-restricted-syntax&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 return \u8BED\u53E5\u91CC\u8D4B\u503C
   */</span>
  <span class="token string-property property">&#39;no-return-assign&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 return \u8BED\u53E5\u91CC\u4F7F\u7528 await
   */</span>
  <span class="token string-property property">&#39;no-return-await&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FA\u73B0 location.href = &#39;javascript:void(0)&#39;;
   * @reason \u6709\u4E9B\u573A\u666F\u4E0B\u8FD8\u662F\u9700\u8981\u7528\u5230\u8FD9\u4E2A
   */</span>
  <span class="token string-property property">&#39;no-script-url&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5C06\u81EA\u5DF1\u8D4B\u503C\u7ED9\u81EA\u5DF1
   */</span>
  <span class="token string-property property">&#39;no-self-assign&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5C06\u81EA\u5DF1\u4E0E\u81EA\u5DF1\u6BD4\u8F83
   */</span>
  <span class="token string-property property">&#39;no-self-compare&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u9017\u53F7\u64CD\u4F5C\u7B26
   */</span>
  <span class="token string-property property">&#39;no-sequences&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62 setter \u6709\u8FD4\u56DE\u503C
   */</span>
  <span class="token string-property property">&#39;no-setter-return&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u53D8\u91CF\u540D\u4E0E\u4E0A\u5C42\u4F5C\u7528\u57DF\u5185\u7684\u5DF2\u5B9A\u4E49\u7684\u53D8\u91CF\u91CD\u590D
   * @reason \u5F88\u591A\u65F6\u5019\u51FD\u6570\u7684\u5F62\u53C2\u548C\u4F20\u53C2\u662F\u540C\u540D\u7684
   */</span>
  <span class="token string-property property">&#39;no-shadow&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u4FDD\u7559\u5B57\u4F5C\u4E3A\u53D8\u91CF\u540D
   */</span>
  <span class="token string-property property">&#39;no-shadow-restricted-names&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u6570\u7EC4\u4E2D\u51FA\u73B0\u8FDE\u7EED\u7684\u9017\u53F7
   */</span>
  <span class="token string-property property">&#39;no-sparse-arrays&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u666E\u901A\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6A21\u7248\u5B57\u7B26\u4E32\u91CC\u7684\u53D8\u91CF\u5F62\u5F0F
   */</span>
  <span class="token string-property property">&#39;no-template-curly-in-string&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u4E09\u5143\u8868\u8FBE\u5F0F
   */</span>
  <span class="token string-property property">&#39;no-ternary&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 super \u88AB\u8C03\u7528\u4E4B\u524D\u4F7F\u7528 this \u6216 super
   */</span>
  <span class="token string-property property">&#39;no-this-before-super&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62 throw \u5B57\u9762\u91CF\uFF0C\u5FC5\u987B throw \u4E00\u4E2A Error \u5BF9\u8C61
   */</span>
  <span class="token string-property property">&#39;no-throw-literal&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u672A\u5B9A\u4E49\u7684\u53D8\u91CF
   */</span>
  <span class="token string-property property">&#39;no-undef&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5C06 undefined \u8D4B\u503C\u7ED9\u53D8\u91CF
   */</span>
  <span class="token string-property property">&#39;no-undef-init&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 undefined
   */</span>
  <span class="token string-property property">&#39;no-undefined&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u53D8\u91CF\u540D\u51FA\u73B0\u4E0B\u5212\u7EBF
   */</span>
  <span class="token string-property property">&#39;no-underscore-dangle&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FAA\u73AF\u5185\u5FC5\u987B\u5BF9\u5FAA\u73AF\u6761\u4EF6\u4E2D\u7684\u53D8\u91CF\u6709\u4FEE\u6539
   */</span>
  <span class="token string-property property">&#39;no-unmodified-loop-condition&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u4F7F\u7528 !a \u66FF\u4EE3 a ? false : true
   * @reason \u540E\u8005\u8868\u8FBE\u7684\u66F4\u6E05\u6670
   */</span>
  <span class="token string-property property">&#39;no-unneeded-ternary&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 return, throw, break \u6216 continue \u4E4B\u540E\u8FD8\u6709\u4EE3\u7801
   */</span>
  <span class="token string-property property">&#39;no-unreachable&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728\u7B2C\u4E00\u8F6E\u5FAA\u73AF\u65F6\u5C31\u4E00\u5B9A\u4F1A\u9000\u51FA\u5FAA\u73AF\u7684\u60C5\u51B5\u51FA\u73B0
   */</span>
  <span class="token string-property property">&#39;no-unreachable-loop&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 finally \u4E2D\u51FA\u73B0 return, throw, break \u6216 continue
   * @reason finally \u4E2D\u7684\u8BED\u53E5\u4F1A\u5728 try \u4E4B\u524D\u6267\u884C
   */</span>
  <span class="token string-property property">&#39;no-unsafe-finally&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 in \u6216 instanceof \u64CD\u4F5C\u7B26\u7684\u5DE6\u4FA7\u53D8\u91CF\u524D\u4F7F\u7528\u611F\u53F9\u53F7
   */</span>
  <span class="token string-property property">&#39;no-unsafe-negation&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528\u4E0D\u5B89\u5168\u7684 optional chaining
   */</span>
  <span class="token string-property property">&#39;no-unsafe-optional-chaining&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u65E0\u7528\u7684\u8868\u8FBE\u5F0F
   */</span>
  <span class="token string-property property">&#39;no-unused-expressions&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">allowShortCircuit</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">allowTernary</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">allowTaggedTemplates</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FA\u73B0\u6CA1\u7528\u5230\u7684 label
   * @reason \u5DF2\u7ECF\u7981\u6B62\u4F7F\u7528 label \u4E86
   */</span>
  <span class="token string-property property">&#39;no-unused-labels&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5DF2\u5B9A\u4E49\u7684\u53D8\u91CF\u5FC5\u987B\u4F7F\u7528
   */</span>
  <span class="token string-property property">&#39;no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">vars</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">ignoreRestSiblings</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">caughtErrors</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u53D8\u91CF\u5FC5\u987B\u5148\u5B9A\u4E49\u540E\u4F7F\u7528
   */</span>
  <span class="token string-property property">&#39;no-use-before-define&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u51FA\u73B0\u65E0\u7528\u7684\u56DE\u6EAF\u5F15\u7528
   * @reason \u67D0\u4E9B\u56DE\u6EAF\u5F15\u7528\u8BED\u6CD5\u4E0A\u6CA1\u95EE\u9898\uFF0C\u4F46\u662F\u4F1A\u6C38\u8FDC\u5339\u914D\u5230\u7A7A\u5B57\u7B26\u4E32
   */</span>
  <span class="token string-property property">&#39;no-useless-backreference&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FA\u73B0\u6CA1\u5FC5\u8981\u7684 call \u6216 apply
   */</span>
  <span class="token string-property property">&#39;no-useless-call&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5728 catch \u4E2D\u4EC5\u4EC5\u53EA\u662F\u628A\u9519\u8BEF throw \u51FA\u53BB
   * @reason \u8FD9\u6837\u7684 catch \u662F\u6CA1\u6709\u610F\u4E49\u7684\uFF0C\u7B49\u4EF7\u4E8E\u76F4\u63A5\u6267\u884C try \u91CC\u7684\u4EE3\u7801
   */</span>
  <span class="token string-property property">&#39;no-useless-catch&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FA\u73B0\u6CA1\u5FC5\u8981\u7684\u8BA1\u7B97\u952E\u540D
   */</span>
  <span class="token string-property property">&#39;no-useless-computed-key&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FA\u73B0\u6CA1\u5FC5\u8981\u7684\u5B57\u7B26\u4E32\u8FDE\u63A5
   */</span>
  <span class="token string-property property">&#39;no-useless-concat&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FA\u73B0\u6CA1\u5FC5\u8981\u7684 constructor
   */</span>
  <span class="token string-property property">&#39;no-useless-constructor&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u51FA\u73B0\u6CA1\u5FC5\u8981\u7684\u8F6C\u4E49
   * @reason \u8F6C\u4E49\u53EF\u4EE5\u4F7F\u4EE3\u7801\u66F4\u6613\u61C2
   */</span>
  <span class="token string-property property">&#39;no-useless-escape&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u89E3\u6784\u8D4B\u503C\u65F6\u51FA\u73B0\u540C\u6837\u540D\u5B57\u7684\u7684\u91CD\u547D\u540D\uFF0C\u6BD4\u5982 let { foo: foo } = bar;
   */</span>
  <span class="token string-property property">&#39;no-useless-rename&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u6CA1\u5FC5\u8981\u7684 return
   */</span>
  <span class="token string-property property">&#39;no-useless-return&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 var
   */</span>
  <span class="token string-property property">&#39;no-var&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 void
   */</span>
  <span class="token string-property property">&#39;no-void&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u6CE8\u91CA\u4E2D\u51FA\u73B0 TODO \u548C FIXME
   */</span>
  <span class="token string-property property">&#39;no-warning-comments&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 with
   * @reason \u7F16\u8BD1\u9636\u6BB5\u5C31\u4F1A\u62A5\u9519\u4E86
   */</span>
  <span class="token string-property property">&#39;no-with&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5141\u8BB8\u8FDE\u7EED\u7A7A\u884C
   */</span>
  <span class="token string-property property">&#39;no-multiple-empty-lines&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u4F7F\u7528 a = {b} \u800C\u4E0D\u662F a = {b: b}
   * @reason \u6709\u65F6\u540E\u8005\u53EF\u4EE5\u4F7F\u4EE3\u7801\u7ED3\u6784\u66F4\u6E05\u6670
   */</span>
  <span class="token string-property property">&#39;object-shorthand&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5BF9\u8C61\u6587\u5B57\u7684\u5927\u62EC\u53F7\u5185\u6267\u884C\u4E00\u81F4\u7684\u95F4\u8DDD\uFF0C\u89E3\u6784\u8D4B\u503C\u548C\u5BFC\u5165/\u5BFC\u51FA\u8BF4\u660E\u7B26
   */</span>
  <span class="token string-property property">&#39;object-curly-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u53D8\u91CF\u7533\u660E\u65F6\u7528\u9017\u53F7\u4E00\u6B21\u7533\u660E\u591A\u4E2A
   */</span>
  <span class="token string-property property">&#39;one-var&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u4F7F\u7528 x = x + y \u800C\u4E0D\u662F x += y
   */</span>
  <span class="token string-property property">&#39;operator-assignment&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u9650\u5236\u8BED\u53E5\u4E4B\u95F4\u7684\u7A7A\u884C\u89C4\u5219\uFF0C\u6BD4\u5982\u53D8\u91CF\u5B9A\u4E49\u5B8C\u4E4B\u540E\u5FC5\u987B\u8981\u7A7A\u884C
   */</span>
  <span class="token string-property property">&#39;padding-line-between-statements&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u56DE\u8C03\u51FD\u6570\u5FC5\u987B\u4F7F\u7528\u7BAD\u5934\u51FD\u6570
   */</span>
  <span class="token string-property property">&#39;prefer-arrow-callback&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4E0D\u5F3A\u5236 const \u8FD8\u662Flet
   */</span>
  <span class="token string-property property">&#39;prefer-const&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">//</span>
  <span class="token comment">/**
   * \u89E3\u6784 \u5BF9\u8C61
   */</span>
  <span class="token string-property property">&#39;prefer-destructuring&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">array</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">object</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528 ES2016 \u7684\u8BED\u6CD5 ** \u66FF\u4EE3 Math.pow
   */</span>
  <span class="token string-property property">&#39;prefer-exponentiation-operator&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528 ES2018 \u4E2D\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u547D\u540D\u7EC4
   * @reason \u6B63\u5219\u8868\u8FBE\u5F0F\u5DF2\u7ECF\u8F83\u96BE\u7406\u89E3\u4E86\uFF0C\u6CA1\u5FC5\u8981\u5F3A\u5236\u52A0\u4E0A\u547D\u540D\u7EC4
   */</span>
  <span class="token string-property property">&#39;prefer-named-capture-group&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u4F7F\u7528 0b11111011 \u800C\u4E0D\u662F parseInt()
   */</span>
  <span class="token string-property property">&#39;prefer-numeric-literals&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u4F7F\u7528 ... \u800C\u4E0D\u662F Object.assign\uFF0C\u9664\u975E Object.assign \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u53D8\u91CF
   */</span>
  <span class="token string-property property">&#39;prefer-object-spread&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * Promise \u7684 reject \u4E2D\u5FC5\u987B\u4F20\u5165 Error \u5BF9\u8C61\uFF0C\u800C\u4E0D\u662F\u5B57\u9762\u91CF
   */</span>
  <span class="token string-property property">&#39;prefer-promise-reject-errors&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F18\u5148\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5B57\u9762\u91CF\uFF0C\u800C\u4E0D\u662F RegExp \u6784\u9020\u51FD\u6570
   */</span>
  <span class="token string-property property">&#39;prefer-regex-literals&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u4F7F\u7528 ...args \u800C\u4E0D\u662F arguments
   */</span>
  <span class="token string-property property">&#39;prefer-rest-params&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u4F7F\u7528 ... \u800C\u4E0D\u662F apply\uFF0C\u6BD4\u5982 foo(...args)
   */</span>
  <span class="token string-property property">&#39;prefer-spread&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u4F7F\u7528\u6A21\u7248\u5B57\u7B26\u4E32\u800C\u4E0D\u662F\u5B57\u7B26\u4E32\u8FDE\u63A5
   */</span>
  <span class="token string-property property">&#39;prefer-template&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5F3A\u5236\u4F7F\u7528\u53CD\u6487\u53F7\u3001\u53CC\u5F15\u53F7\u6216\u5355\u5F15\u53F7
   */</span>
  <span class="token literal-property property">quotes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;single&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * parseInt \u5FC5\u987B\u4F20\u5165\u7B2C\u4E8C\u4E2A\u53C2\u6570
   */</span>
  <span class="token literal-property property">radix</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u5C06 await \u6216 yield \u7684\u7ED3\u679C\u505A\u4E3A\u8FD0\u7B97\u7B26\u7684\u540E\u9762\u9879
   * @reason \u8FD9\u6837\u4F1A\u5BFC\u81F4\u4E0D\u7B26\u5408\u9884\u671F\u7684\u7ED3\u679C
   * https://github.com/eslint/eslint/issues/11899
   * \u5728\u4E0A\u9762 issue \u4FEE\u590D\u4E4B\u524D\uFF0C\u5173\u95ED\u6B64\u89C4\u5219
   */</span>
  <span class="token string-property property">&#39;require-atomic-updates&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * async \u51FD\u6570\u4E2D\u5FC5\u987B\u5B58\u5728 await \u8BED\u53E5
   */</span>
  <span class="token string-property property">&#39;require-await&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u5FC5\u987B\u8981\u52A0\u4E0A u \u6807\u5FD7
   */</span>
  <span class="token string-property property">&#39;require-unicode-regexp&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * generator \u51FD\u6570\u5185\u5FC5\u987B\u6709 yield
   */</span>
  <span class="token string-property property">&#39;require-yield&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5BFC\u5165\u5FC5\u987B\u6309\u89C4\u5219\u6392\u5E8F
   */</span>
  <span class="token string-property property">&#39;sort-imports&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5BF9\u8C61\u5B57\u9762\u91CF\u7684\u952E\u540D\u5FC5\u987B\u6392\u597D\u5E8F
   */</span>
  <span class="token string-property property">&#39;sort-keys&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u53D8\u91CF\u7533\u660E\u5FC5\u987B\u6392\u597D\u5E8F
   */</span>
  <span class="token string-property property">&#39;sort-vars&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u6CE8\u91CA\u7684\u659C\u7EBF\u6216 * \u540E\u5FC5\u987B\u6709\u7A7A\u683C
   */</span>
  <span class="token string-property property">&#39;spaced-comment&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">block</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">exceptions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">balanced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5F3A\u5236\u6267\u884C\u5757\u524D\u95F4\u8DDD\u7684\u4E00\u81F4\u6027
   */</span>
  <span class="token string-property property">&#39;space-before-blocks&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5728\u201Cfunction\u201D\u5B9A\u4E49\u7684\u5DE6\u62EC\u53F7\u524D\u5F3A\u5236\u4F7F\u7528\u4E00\u81F4\u7684\u95F4\u8DDD
   */</span>
  <span class="token string-property property">&#39;space-before-function-paren&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u6216\u5F3A\u5236\u4F7F\u7528\u62EC\u53F7\u5185\u7684\u7A7A\u683C\uFF08\u62EC\u53F7\u4E2D\u7684\u7A7A\u683C\uFF09
   */</span>
  <span class="token string-property property">&#39;space-in-parens&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u9700\u8981\u5728\u4E2D\u7F00\u8FD0\u7B97\u7B26\u5468\u56F4\u7559\u51FA\u7A7A\u683C
   */</span>
  <span class="token string-property property">&#39;space-infix-ops&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">int32Hint</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u8981\u6C42\u6216\u7981\u6B62\u5728\u4E00\u5143\u8FD0\u7B97\u7B26\u4E4B\u524D/\u4E4B\u540E\u4F7F\u7528\u7A7A\u683C
   */</span>
  <span class="token string-property property">&#39;space-unary-ops&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">words</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">nonwords</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;++&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u7981\u6B62\u4F7F\u7528 &#39;strict&#39;;
   */</span>
  <span class="token literal-property property">strict</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u4F7F\u7528\u5206\u53F7
   */</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u521B\u5EFA Symbol \u65F6\u5FC5\u987B\u4F20\u5165\u53C2\u6570
   */</span>
  <span class="token string-property property">&#39;symbol-description&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u4F7F\u7528 isNaN(foo) \u800C\u4E0D\u662F foo === NaN
   */</span>
  <span class="token string-property property">&#39;use-isnan&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * typeof \u8868\u8FBE\u5F0F\u6BD4\u8F83\u7684\u5BF9\u8C61\u5FC5\u987B\u662F &#39;undefined&#39;, &#39;object&#39;, &#39;boolean&#39;, &#39;number&#39;, &#39;string&#39;, &#39;function&#39;, &#39;symbol&#39;, \u6216 &#39;bigint&#39;
   */</span>
  <span class="token string-property property">&#39;valid-typeof&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * var \u5FC5\u987B\u5728\u4F5C\u7528\u57DF\u7684\u6700\u524D\u9762
   */</span>
  <span class="token string-property property">&#39;vars-on-top&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/**
   * \u5FC5\u987B\u4F7F\u7528 if (foo === 5) \u800C\u4E0D\u662F if (5 === foo)
   */</span>
  <span class="token literal-property property">yoda</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">onlyEquality</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,4),e=[o];function r(c,l,k,i,u,m){return a(),s("div",null,e)}var f=n(t,[["render",r]]);export{g as __pageData,f as default};
