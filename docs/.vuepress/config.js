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
          "/js/Object与Map的异同及使用场景",
          "/js/shadowDOM",
          "/js/宏任务和微任务",
          "/js/generator",
        ],
      },
      {
        title: "VUE相关",
        path: "/vue",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/vue/Vue和react对比",
          "/vue/生命周期",
          "/vue/双向绑定",
          "/vue/组件通讯",
          "/vue/虚拟DOM",
          "/vue/Vue router 怎么实现的",
          "/vue/Vue组件data为什么必须是函数？",
          "/vue/Vue中props、data、computed加载顺序",
          "/vue/Vue初次渲染过程",
          "/vue/从修改data里的数据到视图更新的过程",
          "/vue/Vue组件patch过程",
          "/vue/为什么要异步更新&&nextTick",
          "/vue/computed VS methods VS watch",
          "/vue/v-show&&v-if",
          "/vue/为什么v-if和v-for不建议一起用",
          "/vue/Vue2.0 v-for 中 :key 到底有什么用？",
          "/vue/keep-alive",
          "/vue/vue3中 Composition Api 了解么",
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
          "/css/盒子模型",
          "/css/代码实现",
          "/css/清除浮动",
          "/css/手写动画",
          "/css/BFC",
          "/css/link 和@import ",
          "/css/margin塌陷&合并",
          "/css/rgba()和 opacity",
          "/css/重绘和重排",
          "/css/实现上下左右居中的方法",
          "/css/margin: 0 auto; 什么情况下使用",
          "/css/flex",
          "/css/css 有那些动画",
        ],
      },
      {
        title: "打包相关",
        path: "/打包相关",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/打包相关/webpack的构建流程",
          "/打包相关/webpack和gulp的区别",
          "/打包相关/webpack loader 怎么理解",
          "/打包相关/webpack plugin 怎么理解",
          "/打包相关/Loader和Plugin的区别？编写Loader，Plugin的思路？",
          "/打包相关/webpack的热更新",
          "/打包相关/proxy",
          "/打包相关/如何借助webpack来优化前端性能",
          "/打包相关/如何提高webpack的构建速度",
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
          "/网络/http常见状态码",
          "/网络/强缓存和协商缓存",
          "/网络/浏览器存储",
          "/网络/地址栏输入 URL 敲下回车后发生了什么",
          "/网络/http安全",
          "/网络/说说对WebSocket的理解？应用场景？",
          "/网络/如何理解CDN？说说实现原理",
        ],
      },
      {
        title: "算法",
        path: "/算法",
        collapsable: true,
        sidebarDepth: 1,
        children: ["/算法/获取数组中最大的2个数，要求复杂难度最低"],
      },
      {
        title: "其他",
        path: "/其他",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/其他/说说你对SPA的理解",
          "/其他/SPA首屏加载速度慢的怎么解决",
          "/其他/SSR",
        ],
      },
      {
        title: "面经",
        path: "/面经",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/面经/0628来未来",
          "/面经/0630爱库存",
          "/面经/0702艾耕科技",
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
