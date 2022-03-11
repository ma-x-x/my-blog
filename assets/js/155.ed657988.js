(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{686:function(s,n,t){"use strict";t.r(n);var a=t(2),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("当然，你首先需要"),t("a",{attrs:{href:"/os/centos/how-to-install-centos-on-virtualbox"}},[s._v("安装 CentOS")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"更新源"}},[s._v("更新源")]),s._v(" "),t("p",[s._v("CentOS 安装完毕，首先应该修改源，并更新到最新的系统。此处选用阿里云的源，"),t("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("清华源"),t("OutboundLink")],1),s._v("，"),t("a",{attrs:{href:"http://mirrors.ustc.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("中科大源"),t("OutboundLink")],1),s._v("也可。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装工具 wget 或者 curl")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -y\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载阿里云源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o /etc/yum.repos.d/epel.repo https://mirrors.aliyun.com/repo/epel-7.repo\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清理、生成缓存")]),s._v("\nyum clean cache\nyum makecache\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"更新系统"}},[s._v("更新系统")]),s._v(" "),t("p",[s._v("更换源之后就可以使用国内的镜像了，否则下载速度太慢。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum update -y\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"常用包组"}},[s._v("常用包组")]),s._v(" "),t("p",[s._v("一般在安装系统时需要安装的软件包组。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groups")]),s._v(" mark convert\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有包组名称")]),s._v("\nyum grouplist\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果缺乏部分包组，指定该包组")]),s._v("\nyum groupinstall "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cinnamon"')]),s._v(" -y\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"常用工具"}},[s._v("常用工具")]),s._v(" "),t("p",[s._v("更新完系统后还需要一些常用的工具，使用 Ubuntu Server 的时候同样需要安装，只不过指令换为 "),t("code",[s._v("apt install")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" tree nmap dos2unix lrzsz "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" tcpdump "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("htop")]),s._v(" iftop iotop sysstat nethogs psmisc net-tools bash-completion vim-enhanced -y\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"常用指令"}},[s._v("常用指令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 ip")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看服务的端口（例如：ssh）")]),s._v("\nss -lntup "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" sshd "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或 netstat -lntup")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看进程（例如：ssh）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否安装了对应的软件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa openssh openssl\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# openssh 提供 SSH 服务，openssl 为 SSH 提供连接加密")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);