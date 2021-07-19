# BFC

#### css 中的 BFC（格式化上下文）有什么作用？

- 可以清除浮动
- 解决 margin 塌陷
- 可以阻止元素被浮动元素覆盖（一个正常文档流的 block 元素可能被一个 float 元素覆盖，挤占正常文档流，因此可以设置一个元素的 float、display、position 值等方式触发 BFC，以阻止被浮动盒子覆盖。）
- 阻止因为浏览器四舍五入造成的多列布局换行的情况

#### 如何创建一个 BFC？

- float:left 或 right
- overflow:hidden,auto,scoll
- display:inline-block;
- position:fixed,absolute
