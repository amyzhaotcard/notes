(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{460:function(t,a,s){"use strict";s.r(a);var e=s(26),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"http-安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-安全"}},[t._v("#")]),t._v(" http 安全")]),t._v(" "),s("h2",{attrs:{id:"xss-跨站脚本攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss-跨站脚本攻击"}},[t._v("#")]),t._v(" XSS 跨站脚本攻击")]),t._v(" "),s("p",[t._v("恶意将代码注入到客户端攻击")]),t._v(" "),s("h4",{attrs:{id:"攻击模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#攻击模式"}},[t._v("#")]),t._v(" 攻击模式：")]),t._v(" "),s("ul",[s("li",[t._v("基于 DOM：恶意修改页面的 dom 结构，是纯粹的客户端攻击")]),t._v(" "),s("li",[t._v("存储型：例如写文章的平台，用户恶意写了一段 js 代码，保存文章，那么以后打开这篇文章的人都会遭到恶意代码的攻击")]),t._v(" "),s("li",[t._v("反射型：诱导用户点击恶意连接，用户点击后注入恶意脚本到客户端")])]),t._v(" "),s("h4",{attrs:{id:"预防"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预防"}},[t._v("#")]),t._v(" 预防：")]),t._v(" "),s("ul",[s("li",[t._v("给 cookie 设置 httpOnly ，禁止 js 脚本访问 cookie")]),t._v(" "),s("li",[t._v("输入检查，不要相信用户输入的内容，对输入的内容进行必要的过滤、转义，例如 vue 源码里面 decodingMap 对输入内容转换，转义")]),t._v(" "),s("li",[t._v("输出检查，客户端拿到数据时候，有些渲染也要进行过滤、转义，vue 的 v-html 等")])]),t._v(" "),s("h2",{attrs:{id:"csrf-跨站请求伪造"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf-跨站请求伪造"}},[t._v("#")]),t._v(" CSRF 跨站请求伪造")]),t._v(" "),s("p",[t._v("一种劫持受信任用户向服务器发送非预期请求的方式")]),t._v(" "),s("p",[t._v("通常情况 CSRF 攻击是借助受害者的 cookie 骗取服务器的信任来进行一些操作")]),t._v(" "),s("h4",{attrs:{id:"预防-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预防-2"}},[t._v("#")]),t._v(" 预防：")]),t._v(" "),s("ul",[s("li",[t._v("服务端添加 Referer 判断")]),t._v(" "),s("li",[t._v("token 验证，服务器生成 token，前端请求的时候添加 token，服务器校验 token 是否正确")])])])}),[],!1,null,null,null);a.default=r.exports}}]);