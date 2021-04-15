# BFC

#### css 中的 BFC（格式化上下文）有什么作用？

- 可以清除浮动
- 解决 margin 塌陷
- 可以阻止元素被浮动元素覆盖
- 阻止因为浏览器四舍五入造成的多列布局换行的情况

#### 如何创建一个 BFC？

- float:left 或 right
- overflow:hidden,auto,scoll
- display:inline-block;
- position:fixed,absolute
