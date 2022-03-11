(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{707:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"grep"}},[t._v("grep")]),t._v(" "),a("p",[t._v("grep（global regular expression print），适用于查找匹配文本，支持基础正则表达式，扩展的正则表达式需要增加 "),a("code",[t._v("-E")]),t._v(" 选项或使用 "),a("code",[t._v("egrep")]),t._v(" 命令。")]),t._v(" "),a("h3",{attrs:{id:"_1-命令格式"}},[t._v("1. 命令格式")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"title"}),a("p",[t._v("grep [选项…] patterns 文件")])]),a("h3",{attrs:{id:"_2-常用选项"}},[t._v("2. 常用选项")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-c")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("统计匹配的行数。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-i")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("忽略模式中的字母大小写。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-v")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("取反，列出没有匹配到的。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-w")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配整个单词。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-n")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("显示匹配的行号。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-E")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("扩展正则表达式。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-o")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("仅输出文件中匹配到的部分。")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-示例"}},[t._v("3. 示例")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("取出存在 name 的行：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" name package.json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("取出没有 name 的行并显示行号：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -vn name package.json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("获取文件中出现 docs 的次数：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -o docs package.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -c docs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -o docs package.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" -l\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"sed-行"}},[t._v("sed（行）")]),t._v(" "),a("p",[t._v("sed（stream edit 流编辑器），就类似于 vim，可快速实现对文件的增删改查。区别是 vim 还需要交互操作，而 sed 可以预置一组规则。")]),t._v(" "),a("h3",{attrs:{id:"_1-命令格式-2"}},[t._v("1. 命令格式")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"title"}),a("p",[t._v("sed [选项…] [内置命令] 文件")])]),a("h3",{attrs:{id:"_2-常用选项-2"}},[t._v("2. 常用选项")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-n")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("取消 sed 的默认输出（仅输出自己想要的）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-i")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("直接修改文件的内容，而非输出到终端。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-e")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("脚本命令。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-f")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("脚本文件命令。")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-内置命令"}},[t._v("3. 内置命令")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("命令")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("a")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("append，表示追加文本。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("d")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("delete，表示匹配行的文本。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("insert，表示插入文本。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("p")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("print，表示打印匹配行的内容。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("匹配 regexp 部分内容，使用 replacement 替换 regexp 匹配的内容。")])])])]),t._v(" "),a("h3",{attrs:{id:"_4-示例"}},[t._v("4. 示例")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("替换文本中的 docs 为 hello：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s/docs/hello/g'")]),t._v(" package.json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("删除所有含有 @ 的行：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/@/'")]),t._v("d package.json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("输出 20 - 23 行的内容：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v(" -23 package.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" -3\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20,23p'")]),t._v(" package.json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("修改 20 -23 行中 bugs 为 features：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2,3s/bugs/features/'")]),t._v(" package.json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("在第 5 行追加 hello world：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5a hello world'")]),t._v(" package.json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("输出第 5 行到第一个包含 docs 行之间的所有行：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5,/docs/p'")]),t._v(" package.json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("输出 5 - 10 行的内容到新的文件中：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5,10w test.txt'")]),t._v(" package.json\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" test.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"awk-列"}},[t._v("awk（列）")]),t._v(" "),a("p",[t._v("awk（Aho、Weingberger、Kernighan 三人姓名） 是一种编程语言，适用于处理数据和生成报告，进行更为复杂的处理。可以顺带了解下 cut。")]),t._v(" "),a("p",[t._v("awk 会自动给一行中的每个数据元素分配一个变量，默认情况下：")]),t._v(" "),a("ul",[a("li",[t._v("$0：代表整个文本行；")]),t._v(" "),a("li",[t._v("$1：代表文本行中的第 1 个数据字段；")]),t._v(" "),a("li",[t._v("$2：代表文本行中的第 2 个数据字段；")]),t._v(" "),a("li",[t._v("$n：代表文本行中的第 n 个数据字段；")]),t._v(" "),a("li",[t._v("$NF：代表文本行中的最后一个数据字段；")]),t._v(" "),a("li",[t._v("$(NF-1)：代表文本行中的倒数第二个数据字段。")])]),t._v(" "),a("h3",{attrs:{id:"_1-命令格式-3"}},[t._v("1. 命令格式")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"title"}),a("p",[t._v("awk [选项…] pattern{action} 文件")])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"title"}),a("p",[t._v("awk 'BEGIN{ commands } pattern{ commands } END{ commands }'")])]),a("h3",{attrs:{id:"_2-常用选项-3"}},[t._v("2. 常用选项")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-F")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("指定分隔符。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-f")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("指定脚本文件。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-v")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在处理过程之前，初始化变量。")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-示例-2"}},[t._v("3. 示例")]),t._v(" "),a("p",[t._v("了解其基本使用即可。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("输出第一列内容：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1,5p'")]),t._v(" /etc/passwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" -F "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("}'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("使用变量：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{ var1="v1"; var2="v2"; var3="v3"; print var1"="var2"="var3; }\'')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("输出 20 - 23 行的行号及内容：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NR>19&&NR<24 {print NR,"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$0")]),t._v("}'")]),t._v(" package.json\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NR=20,NR=21,NR=22,NR=23 {print NR,"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$0")]),t._v("}'")]),t._v(" package.json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("输出含有 docs 的行：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/docs/'")]),t._v(" package.json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);