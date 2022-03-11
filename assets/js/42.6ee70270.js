(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{573:function(n,s,t){"use strict";t.r(s);var a=t(2),e=Object(a.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"检测源"}},[n._v("检测源")]),n._v(" "),t("p",[n._v("首先需要检查当前源是否有 Nginx（CentOS示例），当没有的时候需要自己添加源。")]),n._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("yum list "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("grep")]),n._v(" nginx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# nginx.x86_64                             1:1.12.2-2.el7                  epel   ")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# nginx-all-modules.noarch                 1:1.12.2-2.el7                  epel   ")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# nginx-filesystem.noarch                  1:1.12.2-2.el7    ")]),n._v("\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br")])]),t("h2",{attrs:{id:"更新-yum-源并安装"}},[n._v("更新 yum 源并安装")]),n._v(" "),t("p",[t("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("官网"),t("OutboundLink")],1),n._v(" 可见 Nginx 稳定版本已经是 "),t("code",[n._v("1.16.1")]),n._v(" ，所以需要"),t("a",{attrs:{href:"http://nginx.org/en/linux_packages.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("修改"),t("OutboundLink")],1),n._v(" yum 源。")]),n._v(" "),t("p",[n._v("更新 Nginx 的源在 "),t("a",{attrs:{href:"/os/centos/install-the-latest-version-of-nginx"}},[n._v("CentOS")]),n._v("、"),t("a",{attrs:{href:"/os/ubuntu/install-the-latest-version-of-nginx"}},[n._v("Ubuntu")]),n._v(" 中稍有不同，需要区别安装。")]),n._v(" "),t("h2",{attrs:{id:"编译安装"}},[n._v("编译安装")]),n._v(" "),t("p",[n._v("当需要添加一些第三方模块时就可以使用该形式。")]),n._v(" "),t("h3",{attrs:{id:"_1-环境"}},[n._v("1. 环境")]),n._v(" "),t("p",[n._v("虚拟机：CentOS 7.6")]),n._v(" "),t("h3",{attrs:{id:"_2-下载"}},[n._v("2. 下载")]),n._v(" "),t("p",[n._v("进入"),t("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("官网"),t("OutboundLink")],1),n._v("获取对应的版本下载链接。")]),n._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[n._v("wget")]),n._v(" http://nginx.org/download/nginx-1.16.1.tar.gz\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("tar")]),n._v(" -zxvf nginx-1.16.1.tar.gz "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 解压")]),n._v("\nll nginx-1.16.1 "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 验证")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("cp")]),n._v(" -r nginx-1.16.1/contrib/vim/* ~/.vim "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 拷贝 vim 配置")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("vim")]),n._v(" nginx-1.16.1/conf/nginx.conf "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 验证")]),n._v("\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br")])]),t("h3",{attrs:{id:"_3-配置"}},[n._v("3. 配置")]),n._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("./configure --help "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("less")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 查看帮助")]),n._v("\n./configure --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("/home/shanyuhai/nginx "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 指定目录")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 可能会缺乏依赖（解决方案）")]),n._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" -y httpd-devel pcre perl pcre-devel zlib zlib-devel GeoIP GeoIP-devel "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 重新执行，当然也可以先使用 yum 安装自动获取一遍依赖（暂不清楚是否会导致负面影响）")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 结果如下")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# creating objs/Makefile # 新增目录")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v('# nginx path prefix: "/home/shanyuhai/nginx"')]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v('# nginx binary file: "/home/shanyuhai/nginx/sbin/nginx"')]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v('# nginx modules path: "/home/shanyuhai/nginx/modules"')]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v('# nginx configuration prefix: "/home/shanyuhai/nginx/conf"')]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v('# nginx configuration file: "/home/shanyuhai/nginx/conf/nginx.conf"')]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v('# nginx pid file: "/home/shanyuhai/nginx/logs/nginx.pid"')]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v('# nginx error log file: "/home/shanyuhai/nginx/logs/error.log"')]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v('# nginx http access log file: "/home/shanyuhai/nginx/logs/access.log"')]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v('# nginx http client request body temporary files: "client_body_temp"')]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v('# nginx http proxy temporary files: "proxy_temp"')]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v('# nginx http fastcgi temporary files: "fastcgi_temp"')]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v('# nginx http uwsgi temporary files: "uwsgi_temp"')]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v('# nginx http scgi temporary files: "scgi_temp"')]),n._v("\n\nll objs "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 查看稍后 make 的内容")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("make")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 编译")]),n._v("\nll objs "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 验证")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("make")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 安装")]),n._v("\n\n/home/shanyuhai/nginx/sbin/nginx -V "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 验证")]),n._v("\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);