module.exports = [
    //导航栏设置
    { text: '首页', link: '/', icon: 'reco-home' },
    {
        text: '系统',
        items: [
            { text: 'Linux', link: '/views/os/linux/' },
            { text: 'Manjaro', link: '/views/os/manjaro/' },
            { text: 'Ubuntu', link: '/views/os/ubuntu/' },
            { text: 'CentOS', link: '/views/os/centos/' },
            { text: 'Kubernetes', link: '/views/os/kubernetes/' },
        ]
    },
    {
        text: '笔记',
        items: [{
                text: '前端',
                link: '/views/front-end/',
                items: [
                    { text: 'JavaScript', link: '/views/front-end/javascript/' },
                    { text: 'TypeScript', link: '/views/front-end/typescript/' },
                    { text: 'CSS', link: '/views/front-end/css/' },
                    { text: 'Vue', link: '/views/front-end/vue/' },
                    { text: 'Webpack', link: '/views/front-end/webpack/' },
                    { text: 'Flutter', link: '/views/front-end/flutter/' },
                    { text: 'D3', link: '/views/front-end/d3js/' },
                    { text: 'Jest', link: '/views/front-end/jest/' },
                    { text: 'Utils', link: '/views/front-end/utils/' },
                ]
            },
            {
                text: '后端',
                items: [
                    { text: 'Nodejs', link: '/views/back-end/nodejs/' },
                    { text: 'Nestjs', link: '/views/back-end/nestjs/' },
                    { text: 'Golang', link: '/views/back-end/golang/' },
                    { text: 'Nginx', link: '/views/back-end/nginx/' },
                    { text: 'MySQL', link: '/views/back-end/mysql/' },
                    { text: 'MongoDB', link: '/views/back-end/mongodb/' },
                    { text: 'Redis', link: '/views/back-end/redis/' },
                    { text: 'Docker', link: '/views/back-end/docker/' },
                ]
            }
        ]
    },
    {
        text: '开发工具',
        items: [
            { text: 'Git', link: '/views/tools/git/' },
            { text: 'Github', link: '/views/tools/github/' },
            { text: 'VSCode', link: '/views/tools/vscode/' },
            { text: 'Chrome Developer tools', link: '/views/tools/chrome/' },
            { text: 'Bookmark scripts', link: '/views/tools/bookmark-scripts/' },
        ]
    },
    { text: '时间线', link: '/timeline/', icon: 'reco-date' },
    {
        text: '更多',
        items: [
            { text: '留言板', link: '/views/message-board/' },
            { text: '面试题', link: '/views/more/interview/' },
            { text: '小工具', link: '/views/more/hodgepodge/' },
            { text: 'VuePress 官网', link: 'https://vuepress.vuejs.org/zh/' },
        ]
    },
    {
        text: "联系",
        icon: "reco-message",
        items: [{
                text: "GitHub",
                link: "https://github.com/ma-xx",
                icon: "reco-github",
            },
            {
                text: "QQ",
                link: "tencent://message/?uin=897114723",
                icon: "reco-qq",
            },
            {
                text: "Gmail",
                link: "mailto:maxingxiang1@gmail.com",
                icon: "reco-mail",
            },
        ],
    },
]