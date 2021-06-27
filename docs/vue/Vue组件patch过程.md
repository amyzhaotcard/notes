# patch 过程

组件化的实现过程就是一个递归 new Vue 的过程， new Vue 后就是一个 init -> render -> patch 的过程， 而 patch 就是把 render 生成的 vnode 转换成真实 DOM 的过程，vnode 又分普通的 vnode 和组件 vnode，patch 过程中遇到了组件 vnode， 就会根据这个组件 vnode 再次执行 new Vue 的过程。

patch 的核心：**diff 算法**（diff 算法是通过同层的树节点进行比较而非对树进行逐层搜索遍历的方式，所以时间复杂度只有 O(n)）
