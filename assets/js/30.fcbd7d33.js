(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{561:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"概念"}},[s._v("概念")]),s._v(" "),a("p",[s._v("存储过程三大作用：")]),s._v(" "),a("ul",[a("li",[s._v("存储和管理 SQL 代码")]),s._v(" "),a("li",[s._v("性能优化")]),s._v(" "),a("li",[s._v("数据安全")])]),s._v(" "),a("p",[s._v("糟糕的是我似乎很少见到它们的应用，到底要不要使用存储过程也有一些探讨：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.zhihu.com/question/54408187",target:"_blank",rel:"noopener noreferrer"}},[s._v("存储过程在实际项目中用的多吗？（知乎）"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/q/1010000007981279",target:"_blank",rel:"noopener noreferrer"}},[s._v("存储过程在实际项目中用的多吗？（SF）"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.zhihu.com/question/57545650/answer/325422160",target:"_blank",rel:"noopener noreferrer"}},[s._v("为什么阿里巴巴Java开发手册里要求禁止使用存储过程？"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("但基础的还是要了解的。")]),s._v(" "),a("h2",{attrs:{id:"创建存储过程"}},[s._v("创建存储过程")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PROCEDURE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),s._v(" get_customer_by_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELIMITER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PROCEDURE")]),s._v(" get_customer_by_id "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("  customers c\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cust_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELIMITER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("再调用：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CALL")]),s._v(" get_customer_by_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10003")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);