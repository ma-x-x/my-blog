(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{737:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"介绍"}},[s._v("介绍")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[s._v("FRP（Fast Reverse Proxy）is a fast reverse proxy to help you expose a local server behind a NAT or firewall to the Internet. As of now, it supports "),t("strong",[s._v("TCP")]),s._v(" and "),t("strong",[s._v("UDP")]),s._v(", as well as "),t("strong",[s._v("HTTP")]),s._v(" and "),t("strong",[s._v("HTTPS")]),s._v(" protocols, where requests can be forwarded to internal services by domain name.")]),s._v(" "),t("p",[s._v("来自 "),t("a",{attrs:{href:"https://github.com/fatedier/frp",target:"_blank",rel:"noopener noreferrer"}},[s._v("FRP"),t("OutboundLink")],1)])]),t("p",[s._v("此处仅以配置 SSH 服务为示例。")]),s._v(" "),t("h2",{attrs:{id:"准备"}},[s._v("准备")]),s._v(" "),t("h3",{attrs:{id:"_1-安全设置"}},[s._v("1. 安全设置")]),s._v(" "),t("p",[s._v("这是一件有风险的事情，所以开始前最好确认你的公网、内网服务器都已经做好防护工作，例如"),t("a",{attrs:{href:"/os/linux/login-with-rsa-key"}},[s._v("修改 ssh 配置")]),s._v("：禁用 root、使用密钥替换密码登录、切换端口等操作。")]),s._v(" "),t("h3",{attrs:{id:"_2-资源下载"}},[s._v("2. 资源下载")]),s._v(" "),t("p",[s._v("需要在 github 上下载最新的 "),t("a",{attrs:{href:"https://github.com/fatedier/frp/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("frp release"),t("OutboundLink")],1),s._v(" 到公网、内网服务器上，注意选择对应的版本。")]),s._v(" "),t("h3",{attrs:{id:"_3-端口开放"}},[s._v("3. 端口开放")]),s._v(" "),t("p",[s._v("如果是阿里云，需要在云实例中开放下方将要使用的端口。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("bind_port/server_port")])]),s._v(" "),t("li",[t("code",[s._v("remote_port")])])]),s._v(" "),t("h2",{attrs:{id:"配置"}},[s._v("配置")]),s._v(" "),t("h3",{attrs:{id:"_1-公网服务器"}},[s._v("1. 公网服务器")]),s._v(" "),t("p",[s._v("公网服务器修改 "),t("code",[s._v("frps.ini")]),s._v(" 文件。")]),s._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# frps.ini")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("[common]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("bind_port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" 7000")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("配置解释：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("bind_port")]),s._v(" 为 "),t("code",[s._v("frp")]),s._v(" 服务器端接收客户端流量的端口")])]),s._v(" "),t("p",[s._v("启动服务端 "),t("code",[s._v("frp")]),s._v(" 程序。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./frps -c frps.ini "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-内网服务器"}},[s._v("2. 内网服务器")]),s._v(" "),t("p",[s._v("内网服务器修改 "),t("code",[s._v("frpc.ini")]),s._v(" 文件。")]),s._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# frpc.ini")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("[common]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("server_addr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" x.x.x.x")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("server_port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" 7000")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("[ssh]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" tcp")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("local_ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" 127.0.0.1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("local_port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" 22")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("remote_port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" 6000")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("配置解释：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("server_addr")]),s._v(" 为 "),t("code",[s._v("frp")]),s._v(" 服务端 "),t("code",[s._v("ip")]),s._v(" 地址，也可以是域名")]),s._v(" "),t("li",[t("code",[s._v("server_port")]),s._v(" 为 "),t("code",[s._v("frp")]),s._v(" 服务端的 "),t("code",[s._v("bind_port")])]),s._v(" "),t("li",[t("code",[s._v("local_ip")]),s._v(" 为 "),t("code",[s._v("frp")]),s._v(" 客户端的 "),t("code",[s._v("ip")]),s._v(" 或 "),t("code",[s._v("127.0.0.1")])]),s._v(" "),t("li",[t("code",[s._v("local_port")]),s._v(" 为 "),t("code",[s._v("frp")]),s._v(" 客户端的 ssh 端口，其默认为 22，在安全设置时可能修改为其他")]),s._v(" "),t("li",[t("code",[s._v("remote_port")]),s._v(" 为 "),t("code",[s._v("frp")]),s._v(" 客户端挂载到 "),t("code",[s._v("frp")]),s._v(" 服务端的端口。在此示例中访问服务端 "),t("code",[s._v("6000")]),s._v(" 端口相当于访问客户端 "),t("code",[s._v("22")]),s._v(" 端口")])]),s._v(" "),t("p",[s._v("启动客户端 "),t("code",[s._v("frp")]),s._v(" 程序。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./frpc -c frpc.ini "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-停止服务"}},[s._v("3. 停止服务")]),s._v(" "),t("p",[s._v("以上述形式启动的服务，需要先找到进程号再停止。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aux "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" frp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 72029")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("72029")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aux "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" frp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"使用"}},[s._v("使用")]),s._v(" "),t("h3",{attrs:{id:"_1-公网跳板-不推荐"}},[s._v("1. 公网跳板（不推荐）")]),s._v(" "),t("p",[s._v("在之前安全设置中已经使用了密钥登录，为了简化操作可以配置 "),t("RouterLink",{attrs:{to:"/os/linux/login-with-rsa-key.html#快速访问服务器"}},[s._v("ssh config")]),s._v("。")],1),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入公网")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" aliyun\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再从公网进入内网")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" private\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"_2-直接访问"}},[s._v("2. 直接访问")]),s._v(" "),t("p",[s._v("若公网服务端被黑了，就会导致黑客可以直接进入你的内网。当然如果希望公网只是一个跳板，方便其余机器进入也可以选择上一种方式。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接访问内网")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置该 config 时可以认识到 `local_port` 与 `remote_port` 之间的关系")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" aliyun2private\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"systemd"}},[s._v("systemd")]),s._v(" "),t("p",[s._v("在下载对应的 "),t("code",[s._v("frp")]),s._v(" 文件时，解压后注意到存在 "),t("code",[s._v("systemd")]),s._v(" 文件夹，查看例如服务端配置。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat systemd/frps.service")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Frp Server Service\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("simple\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nobody\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RestartSec")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("5s\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/frps -c /etc/frp/frps.ini\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat systemd/frpc.service")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Frp Client Service\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("simple\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nobody\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RestartSec")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("5s\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/frpc -c /etc/frp/frpc.ini\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecReload")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/frpc reload -c /etc/frp/frpc.ini\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("p",[s._v("仅说明 "),t("code",[s._v("frps.service")]),s._v(" 配置文件：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("frps")]),s._v(" 启动程序放入 "),t("code",[s._v("/usr/bin")]),s._v(" 目录中")]),s._v(" "),t("li",[t("code",[s._v("frps.ini")]),s._v(" 配置文件放入 "),t("code",[s._v("/etc/frp")]),s._v(" 目录中")]),s._v(" "),t("li",[t("code",[s._v("frps.service")]),s._v(" 服务程序放入 "),t("code",[s._v("/lib/systemd/system")]),s._v(" 目录中")])]),s._v(" "),t("p",[s._v("最后：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新服务文件，记得加上 sudo")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start frps\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);