module.exports = {
  title: "存在したくないし",
  description: "记录生活",
  dest: "./dist",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  plugins: [
    ["ribbon"],
    ["@vuepress/medium-zoom"],
    ["cursor-effects"],
    ["dynamic-title"],
    // 音乐插件
    [
      "meting",
      {
        meting: {
          auto: "https://music.163.com/#/discover/toplist?id=3778678",
        },
        // 不配置该项的话不会出现全局播放器
        aplayer: {
          // 吸底模式
          fixed: true,
          mini: true,
          // 自动播放
          autoplay: true,
          // 歌曲栏折叠
          listFolded: true,
          // 颜色
          theme: "#de6f62",
          // 播放顺序为随机
          order: "random",
          // 初始音量
          volume: 0.7,
          // 关闭歌词显示
          lrcType: 0,
        },
        mobile: {
          cover: true,
        },
      },
    ],
  ],
  themeConfig: {
    noFoundPageByTencent: false,
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间轴",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "文档",
        icon: "reco-message",
        items: [
          {
            text: "主题",
            link: "/docs/theme-reco/",
          },
        ],
      },
      {
        text: "个人空间",
        icon: "reco-message",
        items: [
          {
            text: "哔哩哔哩",
            link: "https://space.bilibili.com/257970060/dynamic",
            icon: "reco-bilibili",
          },
        ],
      },
    ],
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin", "api"],
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    friendLink: [
      {
        title: "前端技术月刊",
        desc:
          "聚焦前端，记录过去一个月探索发现的值得推荐的前端技术栈、文章以及应用，每月28日更新",
        email: "xiaoluoboding@gmail.com",
        link: "https://xiaoluoboding.github.io/monthly/",
      },
      {
        title: "后端技术月刊",
        desc: "分享 GitHub 上有趣、入门级的开源项目，每月28日更新",
        email: "595666367@qq.com",
        link: "https://hellogithub.com",
      },
    ],
    logo: "/logo.jpg",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "最后一次更新",
    author: "存在したくないし",
    authorAvatar: "/avatar.jpg",
    record: "",
    startYear: "2020",
  },
  markdown: {
    lineNumbers: true,
  },
};
