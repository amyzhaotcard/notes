# css 相关

## rgba()和 opacity 的透明效果有什么不同？

rgba()子元素不会继承透明效果

## css 中的 BFC（格式化上下文）有什么作用？

- 可以清除浮动
- 解决 margin 塌陷
- 可以阻止元素被浮动元素覆盖
- 阻止因为浏览器四舍五入造成的多列布局换行的情况

#### 如何创建一个 BFC？

- float:left 或 right
- overflow:hidden,auto,scoll
- display:inline-block;
- position:fixed,absolute

## 如果需要手动写动画，你认为最小时间间隔是多久，为什么？

多数显示器默认频率是 60Hz，即 1 秒刷新 60 次，所以理论上最小间隔为 1/60＊1000ms ＝ 16.7ms

#### 手写动画一般用到的 api 是什么合适?

- window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
- 若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用 window.requestAnimationFrame()
- 请确保总是使用第一个参数(或其它获得当前时间的方法)计算每次调用之间的时间间隔，否则动画在高刷新率的屏幕中会运行得更快。
- window.requestAnimationFrame(callback);

## 如何设定一个 div，不使用 height 属性的情况下，固定高度是宽度的 20%？

```
<div class="test">
    <div class="test1"></div>
</div>

.test {
   width: 100px;
}
.test1 {
  padding-top: 20%;
  background: red;
  width: 100%;
}
```

## 页面导入样式时，使用 link 和@import 有什么区别？

- link 属于 XHTML 标签，而@import 是 css 提供的；
- 页面被加载时，link 会同时被加载，而@import 引用的 css 会等到页面被加载完再加载；
- @import 只在 IE5 以上才能识别，而 link 是 XHTML 标签，无兼容问题；
- link 方式的样式的权重高于@import 的权重

## 清除浮动

- 父元素设置高度
- clear：both
- 父元素 overflow：hidden
- 伪元素 after
- 父元素 overflow：auto
- 父元素一起浮动
- 父元素 display：table

## margin 塌陷

出现：对于两个嵌套关系（父子关系）的块元素，子元素设置了 margin-top，会表现在父元素上；若子元素和父元素都设置了 margin-top，也只表现在父元素上，取最大的 margin-top 值。

解决：

- 为父盒子设置 border，为外层添加 border 后父子盒子就不是真正意义上的贴合。
- 为父盒子添加 overflow：hidden；
- 为父盒子设定 padding 值。

## margin 合并

出现：当上下相邻的两个块元素（兄弟关系）相遇时，如果上面的元素有下外边距 margin-bottom，下面的元素有
上外边距 margin-top ，则他们之间的垂直间距不是 margin-bottom 与 margin-top 之和。取两个值中的
较大者这种现象被称为相邻块元素垂直外边距的合并

解决：在两容器外都套上相同容器（class/id 相同的），并在容器中触发 BFC 规则，如设定 overflow：hidden。
