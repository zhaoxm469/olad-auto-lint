import { _ as n, c as s, o as a, a as t } from './app.62e41da6.js';
const e = { components: {} },
  y =
    '{"title":"StyleLint \u89C4\u8303","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879"}],"relativePath":"stylelint/intro.md","lastUpdated":1645442586735}',
  o = t(
    `<h1 id="stylelint-\u89C4\u8303"><a class="header-anchor" href="#stylelint-\u89C4\u8303" aria-hidden="true">#</a> StyleLint \u89C4\u8303</h1><p>stylelint \u89C4\u8303\uFF0C\u76EE\u524D\u652F\u6301<code>css|scss</code></p><p>\u4F7F\u7528<code>stylelint</code>\u5B98\u65B9\u4EE3\u7801\u98CE\u683C<code>stylelint-config-standard</code><br> \u8BE5\u98CE\u683C\u662F <code>stylelint</code>\u6C72\u53D6\u4E86<code>GitHub</code>\u3001<code>Google</code>\u3001<code>Airbnb</code>\u7B49\uFF0C\u4F7F\u7528<code>stylelint-order</code>\u5F3A\u5236\u6309\u7167\u67D0\u4E2A\u987A\u5E8F\u8FDB\u884C\u7F16\u7801\u3002</p><h2 id="\u5B89\u88C5"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash"><pre><code><span class="token comment"># with npm</span>
<span class="token function">npm</span> <span class="token function">install</span> stylelint-config-olad -D

<span class="token comment"># with yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> stylelint-config-olad -D

<span class="token comment"># with pnpm</span>
<span class="token function">pnpm</span> <span class="token function">add</span> stylelint-config-olad -D
</code></pre></div><h2 id="\u4F7F\u7528"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u5728\u4F60\u7684\u5DE5\u7A0B\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A<code>.stylelintrc.js</code>\u914D\u7F6E\u6587\u4EF6</p><p>\u914D\u7F6E\u5982\u4E0B\u5373\u53EF:</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token string">&#39;stylelint-config-olad&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5982\u679C\u4F60\u4F7F\u7528 vscode \u7F16\u8F91\u5668\uFF0C\u5EFA\u8BAE\u5B89\u88C5<code>stylelint</code>\u63D2\u4EF6\uFF0C\u5E76\u5728\u8BBE\u7F6E\u914D\u7F6E\u6587\u4EF6<code>settings.json</code>\u4E2D\u914D\u7F6E\u5982\u4E0B\uFF0C\u5728\u4EE3\u7801\u7F16\u5199\u65F6\u4F1A\u5B9E\u65F6\u63D0\u793A\uFF0C\u4FDD\u5B58\u662F\u4F1A\u81EA\u52A8\u4FEE\u590D</p><div class="language-json"><pre><code><span class="token property">&quot;stylelint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;scss&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5982\u679C\u662FVue\u6280\u672F\u6808\uFF0C\u9700\u8981\u52A0\u4E0A\uFF0C\u8BC6\u522B.vue\u6587\u4EF6\u4E2D\u7684style</span>
    <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token property">&quot;css.validate&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token property">&quot;scss.validate&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token property">&quot;stylelint.enable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
</code></pre></div><h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h2><p>\u5982\u679C\u9879\u76EE\u4E4B\u524D\u5B89\u88C5\u8FC7 Stylelint \u76F8\u5173\u7684\u5305\uFF0C\u5EFA\u8BAE\u5378\u8F7D\uFF0C\u907F\u514D\u5F15\u5165\u4E0D\u5FC5\u8981\u7684\u5305\u3002\u5982<code>@stylelint</code>\u3001<code>stylelint-config-standard</code>\u3001<code>stylelint-order</code>\u7B49\uFF0C\u76F4\u63A5\u5728 package.json \u641C\u7D22<strong>stylelint</strong>\uFF0C\u76F8\u5173\u7684\u5305\u5168\u90E8\u5378\u8F7D</p>`,
    13,
  ),
  p = [o];
function c(l, i, d, r, u, k) {
  return a(), s('div', null, p);
}
var _ = n(e, [['render', c]]);
export { y as __pageData, _ as default };
