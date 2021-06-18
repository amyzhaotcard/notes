module.exports = {
  base: "/notes/",
  title: "知食",
  description: "拾柒",
  dest: "./dist",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  head: [["link", { rel: "icon", href: "/logo-2.jpeg" }]],
  theme: "",
  port: 9000,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "VuePress", link: "https://vuepress.vuejs.org/zh/" },
    ],
    sidebar: [
      {
        title: "JS相关",
        path: "/js",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/js/原型和原型链",
          "/js/继承",
          "/js/new操作符",
          "/js/call-apply-bind",
          "/js/闭包",
          "/js/作用域和作用域链",
          "/js/let、const和var的区别",
          "/js/深浅拷贝",
          "/js/防抖和节流",
          "/js/Promise",
          "/js/数组相关",
        ],
      },
      {
        title: "VUE相关",
        path: "/vue",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/vue/Vue组件data为什么必须是函数？",
          "/vue/Vue中props、data、computed加载顺序",
        ],
      },
      {
        title: "React相关",
        path: "/react",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/react/生命周期",
          "/react/setState",
          "/react/调用super的目的",
        ],
      },
      {
        title: "CSS相关",
        path: "/css",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/css/代码实现",
          "/css/清除浮动",
          "/css/手写动画",
          "/css/BFC",
          "/css/link 和@import ",
          "/css/margin塌陷&合并",
          "/css/rgba()和 opacity",
        ],
      },
      {
        title: "网络相关",
        path: "/网络",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/网络/对称加密和非对称加密区别",
          "/网络/七层网络模型",
          "/网络/tcp",
          "/网络/http",
        ],
      },
      {
        title: "面试",
        path: "/mianshi",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/mianshi/JS/数据类型",
          "/mianshi/JS/作用域和作用域链",
          "/mianshi/JS/闭包",
          "/mianshi/JS/原型和原型链",
          "/mianshi/JS/this的指向",
          "/mianshi/JS/call-apply-bind",
          "/mianshi/JS/new操作符",
          "/mianshi/JS/继承",
          "/mianshi/JS/深浅拷贝",
          "/mianshi/JS/Promise",
          "/mianshi/JS/instanceof",
          "/mianshi/JS/常用的方法",
          "/mianshi/JS/数组",
          "/mianshi/算法/",
        ],
      },
    ],
    lastUpdated: "上次更新",
  },
  plugins: [
    "@vuepress/back-to-top",
    [
      "vuepress-plugin-zooming",
      {
        selector: ".page img",
        delay: 1000,
        options: {
          bgColor: "black",
          zIndex: 10000,
        },
      },
    ],
  ],
};
