module.exports = {
    theme: 'reco',
    // 在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
      ],
    locales: {
        '/': {
            lang: 'zh-CN'
        },
        '/en/': {
            lang: 'en-US'
        }
    },
    themeConfig: {
        /**
     * support for
     * 'default'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     */
    codeTheme: 'tomorrow', // default 'tomorrow'
        type: 'blog',
        authorAvatar: '/avatar.png',
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        // 博客配置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: 'Tag' // 默认文案 “标签”
            },
            socialLinks: [ // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/recoluan' },
                { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
            ]
        },
        nav: [
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
        ],
        friendLink: [
            {
              title: 'vuepress-theme-reco',
              desc: 'A simple and beautiful vuepress Blog & Doc theme.',
              logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
              link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
              title: '午后南杂',
              desc: 'Enjoy when you can, and endure when you must.',
              email: 'recoluan@qq.com',
              link: 'https://www.recoluan.com'
            },
            // ...
          ]
    },
    plugins: [
        [
            'vuepress-plugin-comment',
            {
                choosen: 'valine',
                // options选项中的所有参数，会传给Valine的配置
                options: {
                    el: '#valine-vuepress-comment',
                    appId: '69aDCp6uj6RglRfI1XwkIRef-gzGzoHsz',
                    appKey: 'dMcfGj9gFkPeDlADN2PX3lbq'
                }
            }
        ]
    ]
}