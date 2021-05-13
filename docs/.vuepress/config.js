const plugsConfig = require('./config/plugsConfig.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
    host: "127.0.0.1", // 生成网页地址（本地调试使用）
    port: "8080", // 生成网页端口（本地调试使用）
    title: "ma-xx Blog", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: "个人博客", // meta 中的描述文字，用于SEO
    /* 
     部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，
     如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，
     它的值应当总是以斜杠开始，并以斜杠结束。
    */
    base: '/my-blog/',
    head: [
        ["link", { rel: "icon", href: "/favicon.svg" }], //浏览器的标签栏的网页图标,基地址/docs/.vuepress/public
        [
            "meta",
            {
                name: "viewport",
                content: "width=device-width,initial-scale=1,user-scalable=no",
            },
        ], //在移动端，搜索框在获得焦点时会放大
    ],
    extraWatchFiles: [ //指定额外的需要被监听的文件
        './config/plugsConfig.js',
        './config/themeConfig.js',
        './config/navConfig.js',
        'docs/.vuepress/config/*.js'
    ],
    theme: "reco", //选择主题‘reco’
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
        },
    },
    themeConfig: themeConfig,
    markdown: {
        lineNumbers: true, //代码显示行号
        // markdown-it-anchor 的选项
        anchor: { permalink: false },
        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2] },
        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
            md.use(require('markdown-it'))
        }
    }, // 搜索设置
    search: true,
    searchMaxSuggestions: 10, // 插件
    plugins: plugsConfig,
};
