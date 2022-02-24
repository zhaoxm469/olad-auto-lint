import { _ as n, c as s, o as a, a as e } from './app.62e41da6.js';
const t = { components: {} },
  g =
    '{"title":"ESLint \u89C4\u8303","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879"}],"relativePath":"eslint/intro.md","lastUpdated":1645442586735}',
  o = e(
    `<h1 id="eslint-\u89C4\u8303"><a class="header-anchor" href="#eslint-\u89C4\u8303" aria-hidden="true">#</a> ESLint \u89C4\u8303</h1><p>ESLint \u76EE\u524D\u652F\u6301 <code>vue|typescript</code></p><h2 id="\u5B89\u88C5"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash"><pre><code><span class="token comment"># with pnpm</span>
<span class="token function">pnpm</span> <span class="token function">add</span> eslint-config-olad -D

<span class="token comment"># with npm</span>
<span class="token function">npm</span> <span class="token function">install</span> eslint-config-olad -D

<span class="token comment"># with yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> eslint-config-olad --D
</code></pre></div><h2 id="\u4F7F\u7528"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u5728\u4F60\u7684\u5DE5\u7A0B\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A<code>.eslintrc.js</code>\u914D\u7F6E\u6587\u4EF6</p><p>\u914D\u7F6E\u5982\u4E0B:</p><ul><li><strong>vue</strong></li></ul><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@olad/lint//vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><strong>typescript</strong></li></ul><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@olad/lint/typescript&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h2><p>\u5982\u679C\u9879\u76EE\u4E4B\u524D\u5B89\u88C5\u8FC7 ESLint \u76F8\u5173\u7684\u5305\uFF0C\u5EFA\u8BAE\u5378\u8F7D\uFF0C\u907F\u514D\u5F15\u5165\u4E0D\u5FC5\u8981\u7684\u5305\u3002\u5982<code>eslint</code>\u3001<code>eslint-plugin-vue</code>\u3001<code>@babel/eslint-parser</code>\u3001<code>@typescript-eslint/eslint-plugin</code> \u3001<code>@typescript-eslint/parser</code>\u3001<code>@vue/eslint-config-standard</code>\u3001<code>@vue/eslint-config-typescript</code>\u3001<code>eslint-config-react-app</code>\u3001 <code>eslint-plugin-import</code>\u7B49\uFF0C\u76F4\u63A5\u5728 package.json \u641C\u7D22<strong>eslint</strong>\uFF0C\u76F8\u5173\u7684\u5305\u5168\u90E8\u5378\u8F7D</p>`,
    13,
  ),
  p = [o];
function c(i, l, r, d, u, k) {
  return a(), s('div', null, p);
}
var _ = n(t, [['render', c]]);
export { g as __pageData, _ as default };
