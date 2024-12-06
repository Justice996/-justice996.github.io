import{_ as l,o,c as e,d as t}from"./app-1ceb8c37.js";const i={},c=t('<h3 id="网络安全" tabindex="-1"><a class="header-anchor" href="#网络安全" aria-hidden="true">#</a> 网络安全</h3><blockquote><p>了解网络安全、了解攻击方法并练习入侵目标服务器。</p></blockquote><p>一. 方法</p><ol><li>侦察：侦察是侦察的缩写，是指攻击者尝试尽可能多地了解目标的步骤。服务器类型、操作系统、IP 地址、用户名和电子邮件地址等信息有助于攻击成功。</li><li>武器化：此步骤是指准备带有恶意组件的文件，例如，为攻击者提供远程访问。</li><li>交付：交付是指通过任何可行的方法（例如电子邮件或 USB 闪存）将“武器化”文件交付给目标。</li><li>利用：当用户打开恶意文件时，他们的系统会执行恶意组件。</li><li>安装：上一步应在目标系统上安装恶意软件。</li><li>命令与控制（C2）：恶意软件的成功安装为攻击者提供了对目标系统的命令和控制能力。</li><li>针对目标的行动：在获得对一个目标系统的控制权后，攻击者就达到了他们的目标。目标之一是数据渗透（窃取目标的数据） 二.实战</li><li>我们曾经nmap了解正在运行的服务。<br><code>nmap MACHINE_IP</code></li></ol><blockquote><p>Nmap 是一个网络扫描仪，可以帮助我们发现正在运行的机器以及在其上运行的任何对外界可见的程序。目标的IP地址是MACHINE_IP。</p></blockquote><ol start="2"><li>我们连接到 FTP 服务器以了解有关其配置的更多信息。</li></ol><blockquote><p>连接到目标<code>FTP</code>服务器 ftp MACHINE_IP。</p></blockquote><ol start="3"><li>我们发现一个包含根密码的文件被错误地复制到公共文件夹中。</li></ol><blockquote><p>下载文件 <code>get filename</code></p></blockquote><ol start="4"><li>我们使用找到的密码，成功登录。</li><li>我们获得了对所有用户文件的访问权限。</li></ol>',10),a=[c];function r(n,d){return o(),e("div",null,a)}const _=l(i,[["render",r],["__file","networkSecurity.html.vue"]]);export{_ as default};