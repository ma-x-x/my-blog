(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{574:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"请求限制"}},[s._v("请求限制")]),s._v(" "),a("p",[s._v("请求限制 "),a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_limit_req_module.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("limit_req_module"),a("OutboundLink")],1),s._v(" 比连接限制更优化，由于一个连接可以被多次复用。")]),s._v(" "),a("h3",{attrs:{id:"_1-limit-req-zone"}},[s._v("1. limit_req_zone")]),s._v(" "),a("p",[s._v("首先需要在 "),a("code",[s._v("http")]),s._v(" 作用域定义 "),a("code",[s._v("limit_req_zone")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("Syntax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_req_zone")]),s._v(" key zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("size rate"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("rate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nDefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" —\nContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_req_zone")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$binary_remote_addr")]),s._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("m rate"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_2-limit-req"}},[s._v("2. limit_req")]),s._v(" "),a("p",[s._v("再在指定的作用域启用。")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("Syntax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_req")]),s._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("burst"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nodelay "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" delay"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nDefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" —\nContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_req_zone")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$binary_remote_addr")]),s._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("m rate"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("search"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_req")]),s._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("one burst"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_req_zone")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$binary_remote_addr")]),s._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("perip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("m rate"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_req_zone")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_name")]),s._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("perserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("m rate"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_req")]),s._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("perip burst"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" nodelay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_req")]),s._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("perserver burst"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[a("code",[s._v("$binary_remote_addr")]),s._v(" 相对 "),a("code",[s._v("remote_addr")]),s._v(" 占用的空间更少。")]),s._v(" "),a("h2",{attrs:{id:"连接限制"}},[s._v("连接限制")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("limit_conn_module"),a("OutboundLink")],1),s._v(" 步骤基本与请求限制一致。")]),s._v(" "),a("h3",{attrs:{id:"_1-limit-conn-zone"}},[s._v("1. limit_conn_zone")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("Syntax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_conn_zone")]),s._v(" key zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nDefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" —\nContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_conn_zone")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$binary_remote_addr")]),s._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_2-limit-zone"}},[s._v("2. limit_zone")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("Syntax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_zone")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$variable")]),s._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nDefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" —\nContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_conn_zone")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$binary_remote_addr")]),s._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("perip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_conn_zone")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_name")]),s._v(" zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("perserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_conn")]),s._v(" perip "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_conn")]),s._v(" perserver "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"访问-ip-限制"}},[s._v("访问 IP 限制")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_access_module.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("access_module"),a("OutboundLink")],1),s._v(" 可用来限制访问的 IP，用法比较简单。")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("Syntax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("allow")]),s._v(" address "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" CIDR "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" unix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nDefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" —\nContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_except")]),s._v("\n\nSyntax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("deny")]),s._v(" address "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" CIDR "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" unix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nDefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" —\nContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_except")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("deny")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("allow")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("allow")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.1")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("allow")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("db8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("deny")]),s._v("  all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"访问-账号-限制"}},[s._v("访问 账号 限制")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("auth_basic_module"),a("OutboundLink")],1),s._v(" 可以为路径添加用户密码访问，可配合 IP 限制使用。")]),s._v(" "),a("h3",{attrs:{id:"_1-生成密码"}},[s._v("1. 生成密码")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成密码工具 htpasswd")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -b 参数为 在一行输入用户名和密码，而非根据提示输入密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -c 参数为 创建一个加密文件(注意已有则覆盖)，即增加用户时无需指定")]),s._v("\nhtpasswd -bc /etc/nginx/auth_conf shanyuhai "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 若缺乏依赖则提示，安装即可")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# centos 下")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" httpd-tools\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ubuntu 下")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" apache2-utils\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/nginx/auth_conf "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"_2-限制说明"}},[s._v("2. 限制说明")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("Syntax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auth_basic")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nDefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auth_basic")]),s._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_except")]),s._v("\n\nSyntax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auth_basic_user_file")]),s._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nDefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" —\nContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit_except")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auth_basic")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"请输入用户名、密码"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auth_basic_user_file")]),s._v(" auth_conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);