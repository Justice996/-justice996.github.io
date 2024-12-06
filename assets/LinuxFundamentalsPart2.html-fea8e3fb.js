import{_ as n,o as s,c as a,d as e}from"./app-1ceb8c37.js";const i={},l=e(`<h3 id="linux常用命令2" tabindex="-1"><a class="header-anchor" href="#linux常用命令2" aria-hidden="true">#</a> linux常用命令2</h3><ol><li>目录切换命令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   <span class="token builtin class-name">pwd</span> <span class="token comment">#显示当前所在目录</span>
   <span class="token builtin class-name">cd</span> ~ <span class="token comment">#切换到主目录(home/pi),~可以省略不写</span>
   <span class="token builtin class-name">cd</span> <span class="token function">dir</span> <span class="token comment">#切换到指定文件夹 </span>
   <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span> <span class="token comment">#切换到上一级目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>文件展示命令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   <span class="token function">ls</span> <span class="token comment">#展示当前目录下所有的文件和文件夹(不包含隐藏文件)</span>
   <span class="token function">ls</span> <span class="token parameter variable">-a</span> <span class="token comment">#展示当前目录下所有文件和文件夹(包含隐藏文件)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>文件操作命令 <ul><li>创建文件<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   <span class="token function">touch</span> <span class="token function">file</span> <span class="token comment">#创建文件file</span>
   <span class="token function">mkdir</span> <span class="token function">dir</span> <span class="token comment">#创建目录dir</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>查看文件<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">cat</span> <span class="token function">file</span> <span class="token comment">#查看文件file内容</span>
    <span class="token function">more</span> <span class="token function">file</span> <span class="token comment">#查看文件file内容</span>
    <span class="token function">head</span> <span class="token function">file</span> <span class="token comment">#查看文件file前十行</span>
    <span class="token function">tail</span> <span class="token function">file</span> <span class="token comment">#查看文件file后十行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>删除文件<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">rm</span> <span class="token function">file</span> <span class="token comment">#s删除文件file</span>
 <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token function">dir</span> 删除目录dir 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>重命名或移动 <code>bash mv file1 file2 #若file2不存在，则将file1改名为file2 #若file2存在 则file1覆盖掉原来的file2,并更名为file2 mv file dir #将文件file移动到dir文件夹下 </code></li></ul></li><li>编辑器</li></ol><ul><li>nano编辑器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   <span class="token function">nano</span> <span class="token function">file</span> <span class="token comment">#使用nano编辑文件file,若文件不存在，则创建文件file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>vi编辑器 vi编辑器是linux和unix系统下的标准编辑器 有三种模式：</p><pre><code>1. 插入模式(Insert mode): 在此模式下可以输入字符,按esc将回到命令模式
2. 底行模式(Last line mode): 可以保存文件、退出vi、设置vi、查找等功能
3. 命令模式(Command mode): 可以移动光标、删除字符等
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> <span class="token function">file</span> <span class="token comment">#使用nvi编辑文件file,若文件不存在，则创建文件file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vi常用命令</p><ul><li><p>命令模式下使用：</p><ol><li>:w #保存文件</li><li>:q #退出编辑器,如果文件已修改请使用以下命令</li><li>:q! #退出编辑器且不保存</li><li>:wq #退出编辑器且保存文件</li><li>a #在当前光标位置向右添加文本</li><li>i #在当前光标位置左边添加文本</li><li>o #在当前行的下面新建一行</li></ol></li><li><p>插入模式下使用： esc #切换到命令行模式(不管用户处于何种模式,按下<code>Esc</code>键即可进入命令式。)</p></li><li><p>底行模式 #命令模式下按<code>:</code>进入底行模式</p></li></ul></li></ul>`,9),c=[l];function o(t,d){return s(),a("div",null,c)}const u=n(i,[["render",o],["__file","LinuxFundamentalsPart2.html.vue"]]);export{u as default};