import { _ as t, c as n, o as a, a as e } from './app.62e41da6.js';
const s = { components: {} },
  g =
    '{"title":"CommitLint \u89C4\u8303","description":"","frontmatter":{},"headers":[{"level":2,"title":"CommitLint \u89C4\u8303","slug":"commitlint-\u89C4\u8303"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u89C4\u8303","slug":"\u89C4\u8303"},{"level":2,"title":"\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879"}],"relativePath":"commitlint/intro.md","lastUpdated":1645442586734}',
  d = e(
    `__VP_STATIC_START__<h2 id="commitlint-\u89C4\u8303"><a class="header-anchor" href="#commitlint-\u89C4\u8303" aria-hidden="true">#</a> CommitLint \u89C4\u8303</h2><p>CommitLint \u89C4\u8303</p><h2 id="\u5B89\u88C5"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash"><pre><code><span class="token comment"># with npm</span>
<span class="token function">npm</span> <span class="token function">install</span> commitlint-config-olad -D

<span class="token comment"># with yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> commitlint-config-olad --dev

<span class="token comment"># with npm</span>
<span class="token function">pnpm</span> <span class="token function">add</span> commitlint-config-olad --dev
</code></pre></div><h2 id="\u4F7F\u7528"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u5728\u4F60\u7684\u5DE5\u7A0B\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A<code>.commitlintrc.js</code>\u914D\u7F6E\u6587\u4EF6</p><p>\u914D\u7F6E\u5982\u4E0B\u5373\u53EF:</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token string">&#39;commitlint-config-olad&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u89C4\u8303"><a class="header-anchor" href="#\u89C4\u8303" aria-hidden="true">#</a> \u89C4\u8303</h2><p>\u683C\u5F0F\uFF1A <code>&lt;type&gt;[(scope)]: &lt;description&gt;</code></p><p>\u793A\u4F8B</p><div class="language-bash"><pre><code><span class="token function">git</span> commit -a -m <span class="token string">&#39;build: xxxxx&#39;</span>
<span class="token function">git</span> commit -a -m <span class="token string">&#39;feat(cli): xxxxx&#39;</span>
</code></pre></div><p>\u5B57\u6BB5\u8BF4\u660E</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u5FC5\u987B</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>\u7528\u4E8E\u8868\u660E\u6211\u4EEC\u8FD9\u6B21\u63D0\u4EA4\u7684\u6539\u52A8\u7C7B\u578B</td><td>\u662F</td></tr><tr><td>scope</td><td>string</td><td>\u4E00\u4E2A\u53EF\u9009\u7684\u4FEE\u6539\u8303\u56F4\u3002\u7528\u4E8E\u6807\u8BC6\u6B64\u6B21\u63D0\u4EA4\u4E3B\u8981\u6D89\u53CA\u5230\u4EE3\u7801\u4E2D\u54EA\u4E2A\u6A21\u5757</td><td>\u5426</td></tr><tr><td>description</td><td>string</td><td>\u4E00\u53E5\u8BDD\u63CF\u8FF0\u6B64\u6B21\u63D0\u4EA4\u7684\u4E3B\u8981\u5185\u5BB9\uFF0C\u505A\u5230\u8A00\u7B80\u610F\u8D45</td><td>\u662F</td></tr></tbody></table><p>type</p><table><thead><tr><th>type \u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>build</td><td>\u4E3B\u8981\u76EE\u7684\u662F\u4FEE\u6539\u9879\u76EE\u6784\u5EFA\u7CFB\u7EDF(\u4F8B\u5982 glup\uFF0Cwebpack\uFF0Crollup \u7684\u914D\u7F6E\u7B49)\u7684\u63D0\u4EA4</td></tr><tr><td>ci</td><td>\u4E3B\u8981\u76EE\u7684\u662F\u4FEE\u6539\u9879\u76EE\u7EE7\u7EED\u96C6\u6210\u6D41\u7A0B(\u4F8B\u5982 Travis\uFF0CJenkins\uFF0CGitLab CI\uFF0CCircle \u7B49)\u7684\u63D0\u4EA4</td></tr><tr><td>docs</td><td>\u6587\u6863\u66F4\u65B0</td></tr><tr><td>feat</td><td>\u65B0\u589E\u529F\u80FD</td></tr><tr><td>fix</td><td>bug \u4FEE\u590D</td></tr><tr><td>perf</td><td>\u4F18\u5316</td></tr><tr><td>refactor</td><td>\u91CD\u6784\u4EE3\u7801</td></tr><tr><td>style</td><td>\u4E0D\u5F71\u54CD\u7A0B\u5E8F\u903B\u8F91\u7684\u4EE3\u7801\u4FEE\u6539(\u4FEE\u6539\u7A7A\u767D\u5B57\u7B26\uFF0C\u8865\u5168\u7F3A\u5931\u7684\u5206\u53F7\u7B49)</td></tr><tr><td>test</td><td>\u65B0\u589E\u6D4B\u8BD5\u7528\u4F8B\u6216\u662F\u66F4\u65B0\u73B0\u6709\u6D4B\u8BD5</td></tr><tr><td>revert</td><td>\u56DE\u6EDA\u67D0\u4E2A\u66F4\u65E9\u4E4B\u524D\u7684\u63D0\u4EA4</td></tr><tr><td>chore</td><td>\u4E0D\u5C5E\u4E8E\u4EE5\u4E0A\u7C7B\u578B\u7684\u5176\u4ED6\u7C7B\u578B(\u65E5\u5E38\u4E8B\u52A1)</td></tr></tbody></table><h2 id="\u6CE8\u610F\u4E8B\u9879"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h2><p>\u5982\u679C\u9879\u76EE\u4E4B\u524D\u5B89\u88C5\u8FC7 CommitLint \u76F8\u5173\u7684\u5305\uFF0C\u5EFA\u8BAE\u5378\u8F7D\uFF0C\u907F\u514D\u5F15\u5165\u4E0D\u5FC5\u8981\u7684\u5305\u3002\u5982<code>@commitlint/cli</code>\u3001<code>@commitlint/config-conventional</code>\u7B49\uFF0C\u76F4\u63A5\u5728 package.json \u641C\u7D22<strong>commitlint</strong>\uFF0C\u76F8\u5173\u7684\u5305\u5168\u90E8\u5378\u8F7D</p>__VP_STATIC_END__`,
    18,
  ),
  o = [d];
function i(c, r, p, l, m, h) {
  return a(), n('div', null, o);
}
var f = t(s, [['render', i]]);
export { g as __pageData, f as default };
