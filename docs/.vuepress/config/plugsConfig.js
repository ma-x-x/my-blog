module.exports = [
  [
    "meting",
    {
      // metingApi: "https://meting.sigure.xyz/api/music",
      meting: {
        server: "netease",
        type: "playlist",
        mid: "4902520778",
      },
      aplayer: {
        lrcType: 3,
        theme: "#3489fd",
      },
    },
  ],
  [
    "social-share", //分享插件
    {
      networks: ["qq", "weibo", "twitter", "facebook", "email"], //分享类型
      email: "maxingxiang1@gmail.com", //email地址
      twitterUser: "maxingxiang1@gmail.com", //Twitter账号
    },
  ],
  [
    "@vuepress-reco/vuepress-plugin-rss", //RSS插件
    {
      site_url: "https://ma-x-x.github.io/my-blog", //网站地址
      copyright: "ma-xx", //版权署名
    },
  ],

  ["flowchart"], // 支持流程图
  ["vuepress-plugin-smooth-scroll"], // 平滑滚动
  ["@vuepress/nprogress"], // 加载进度条
  ["reading-progress"], // 阅读进度条
  ["vuepress-plugin-code-copy", true], //一键复制代码插件
  ["'@vuepress-reco/extract-code'"], // 展示代码
  [
    "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    {
      theme: [
        "miku",
        "whiteCat",
        "haru1",
        "haru2",
        "haruto",
        "koharu",
        "izumi",
        "shizuku",
        "wanko",
        "blackCat",
        "z16",
      ],
      clean: false,
      messages: {
        welcome: "欢迎来到我的博客",
        home: "心里的花，我想要带你回家。",
        theme: "好吧，希望你能喜欢我的其他小伙伴。",
        close: "你不喜欢我了吗？痴痴地望着你。",
      },
      messageStyle: { right: "68px", bottom: "290px" },
      width: 250,
      height: 320,
    },
  ],
  [
    "vuepress-plugin-auto-sidebar",
    {
      collapsable: true,
      nav: true,
      titleMode: "uppercase",
      sort: {
        // 更多选项:
        // `asc`、`desc`、`created_time_asc`、`created_time_desc`
        mode: "asc",
        readmeFirst: true,
      },
    },
  ],
  [
    "@vuepress/last-updated",
    {
      transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
        const moment = require("moment");
        moment.locale(lang);
        return moment(timestamp).fromNow();
      },
    },
  ],
  ["@vuepress/medium-zoom"],
];
