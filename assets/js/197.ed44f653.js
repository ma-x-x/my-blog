(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{728:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"情况"}},[s._v("情况")]),s._v(" "),a("p",[s._v("双系统使用情况下，当切换系统时挂载硬盘时仅具有只读权限。")]),s._v(" "),a("p",[s._v("直接使用 "),a("code",[s._v("dolpgin")]),s._v(" 操作无提示，后采用命令行操作得到提示：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/sda2 /run/media/shanyuhai/GROCERY\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提示")]),s._v("\nThe disk contains an unclean "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" system "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\nMetadata kept "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" Windows cache, refused to mount.\nFalling back to read-only "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" because the NTFS partition is "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" an\nunsafe state. Please resume and "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v(" Windows fully "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("no hibernation\nor fast restarting."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"修复"}},[s._v("修复")]),s._v(" "),a("p",[s._v("可利用 "),a("code",[s._v("ntfs")]),s._v(" 自带的修复工具：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ntfsfix /dev/sda2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再次挂载")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/sda2 /run/media/shanyuhai/GROCERY\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("再次尝试在文件夹内进行编辑、删除操作发现可行了。")])])}),[],!1,null,null,null);n.default=e.exports}}]);