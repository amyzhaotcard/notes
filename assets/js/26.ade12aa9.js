(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{394:function(e,r,s){"use strict";s.r(r);var t=s(26),o=Object(t.a)({},(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"promise"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[e._v("#")]),e._v(" Promise")]),e._v(" "),s("p",[e._v("可以把 Promise 看成一个状态机。初始是 pending 状态，可以通过函数 resolve 和 reject ，将状态转变为 resolved 或者 rejected 状态，状态一旦改变就不能再次变化。")]),e._v(" "),s("p",[e._v("then 函数会返回一个 Promise 实例，并且该返回值是一个新的实例而不是之前的实例。因为 Promise 规范规定除了 pending 状态，其他状态是不可以改变的，如果返回的是一个相同实例的话，多个 then 调用就失去意义了。")]),e._v(" "),s("p",[e._v("Promise.all 可以将多个 Promise 实例包装成一个新的 Promise 实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被 reject 失败状态的值。")]),e._v(" "),s("p",[e._v("Promse.race 就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态")]),e._v(" "),s("h2",{attrs:{id:"多个-promise-实现串行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多个-promise-实现串行"}},[e._v("#")]),e._v(" 多个 promise 实现串行")])])}),[],!1,null,null,null);r.default=o.exports}}]);