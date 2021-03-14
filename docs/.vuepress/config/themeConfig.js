const navConfig = require('./navConfig.js');

module.exports = {
    type: "blog", //选择类型博客
    fullscreen: true,
    sidebarDepth: 3,
    blogConfig: {
        category: {
            location: 2, // 在导航栏菜单中所占的位置，默认2
            text: "分类", // 默认 “分类”
        },
        tag: {
            location: 3, // 在导航栏菜单中所占的位置，默认3
            text: "标签", // 默认 “标签”
        },
        socialLinks: [
            { icon: "reco-github", link: "https://github.com/ma-x-x" },
            { icon: "reco-qq", link: "tencent://message/?uin=897114723" },
            { icon: "reco-mail", link: "mailto:maxingxiang1@gmail.com" },
        ],
    },
    nav: navConfig,
    // displayAllHeaders: true, // 默认值：false
    subSidebar: "auto",
    valineConfig: {
        recordIP: true,
        placeholder: '欢迎留言',
        enableQQ: true,
        appId: '69aDCp6uj6RglRfI1XwkIRef-gzGzoHsz', // your appId
        appKey: 'dMcfGj9gFkPeDlADN2PX3lbq', // your appKey
    },
    // 备案号
    record: 'xxxx',
    recordLink: 'http://www.baidu.com',
    cyberSecurityRecord: '2222',
    cyberSecurityLink: 'http://www.baidu.com',
    startYear: "2021", // 项目开始时间，只填写年份
    lastUpdated: "最后更新时间", // string | boolean
    author: "ma-xx",
    logo: '/avatar.png',
    authorAvatar: "/avatar.png", //作者头像
    mode: "light", //默认显示白天模式
    codeTheme: "okaidia", // default 'tomorrow'
    smooth: "true", //平滑滚动
};