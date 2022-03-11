(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{570:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"配置格式"}},[s._v("配置格式")]),s._v(" "),a("p",[s._v("基本的 Nginx 文件由若干个部分组成，每个部分都是通过下列的方法定义的。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("section"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("directive"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("parameters"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("；\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("大括号实际上表示一个新上下文（context），需要注意的是，每一个指令行需要使用 "),a("code",[s._v(";")]),s._v(" 来进行结束。")]),s._v(" "),a("h2",{attrs:{id:"nginx-conf"}},[s._v("nginx.conf")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/nginx/nginx.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("获取内容如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 worker 进程的用户和组，默认是 nginx")]),s._v("\nuser  nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Nginx 进程，一般设置为和 CPU 核数一致，示例的阿里云学生机为 1 核")]),s._v("\nworker_processes  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 错误日志存放目录，指令的第二个参数表示被记录错误的级别")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 错误级别：debug、info、notice、warn、error 等")]),s._v("\nerror_log  /var/log/nginx/error.log warn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置记录主进程 ID 的文件")]),s._v("\npid        /var/run/nginx.pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nevents "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单个进程最大并发数")]),s._v("\n    worker_connections  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主要配置文件")]),s._v("\nhttp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件扩展名与类型映射表")]),s._v("\n    include       /etc/nginx/mime.types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认文件类型")]),s._v("\n    default_type  application/octet-stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置日志格式：访问地址-访问用户-本地事件-请求")]),s._v("\n    log_format  main  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_user")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$time_local")]),s._v('] "'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request")]),s._v("\" '")]),s._v("\n                      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$status")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$body_bytes_sent")]),s._v(' "'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_referer")]),s._v("\" '")]),s._v("\n                      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\""),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_user_agent")]),s._v('" "'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_x_forwarded_for")]),s._v("\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 访问日志")]),s._v("\n    access_log  /var/log/nginx/access.log  main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接复制数据从一个文件到另一个文件描述符")]),s._v("\n    sendfile        on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仅依赖于 sendfile 的使用")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在一个数据包中尝试发送响应头，以及在数据包中发送一个完整的文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#tcp_nopush     on;")]),s._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保持连接的时间（超时时间）")]),s._v("\n    keepalive_timeout  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启 gzip 压缩")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#gzip  on;")]),s._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前文件为 Nginx 主配置文件（入口），控制子配置项位置和文件")]),s._v("\n    include /etc/nginx/conf.d/*.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br")])]),a("h2",{attrs:{id:"default-conf"}},[s._v("default.conf")]),s._v(" "),a("p",[s._v("在主配置文件（nginx.conf）中可以看到子配置项所在的目录：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# include /etc/nginx/conf.d/*.conf;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看该目录下的文件：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /etc/nginx/conf.d/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# default.conf # 默认")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_1-解析"}},[s._v("1. 解析")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/nginx/conf.d/default.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("获取内容如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 任何由关键字 server 的部分都被称为 “虚拟服务器”")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一个虚拟服务器由 listen 和 server_name 指令组合定义")]),s._v("\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听端口")]),s._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听域名")]),s._v("\n    server_name  localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#charset koi8-r;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#access_log  /var/log/nginx/host.access.log  main;")]),s._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# location 指令可以用在虚拟服务器 server 部分，并且意味着来自客户端的 URI 或者内部重定向访问")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# location 定义： location [modifier] uri {...}")]),s._v("\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务默认启动目录")]),s._v("\n        root   /usr/share/nginx/html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认文件格式")]),s._v("\n        index  index.html index.htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_page  404              /404.html;")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redirect server error pages to the static page /50x.html")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 错误状态码对应的页面")]),s._v("\n    error_page   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v("  /50x.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对应页面的路径")]),s._v("\n    location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /50x.html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        root   /usr/share/nginx/html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# proxy the PHP scripts to Apache listening on 127.0.0.1:80")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#location ~ \\.php$ {")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    proxy_pass   http://127.0.0.1;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#location ~ \\.php$ {")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    root           html;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    fastcgi_pass   127.0.0.1:9000;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    fastcgi_index  index.php;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    include        fastcgi_params;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deny access to .htaccess files, if Apache's document root")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# concurs with nginx's one")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#location ~ /\\.ht {")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    deny  all;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);