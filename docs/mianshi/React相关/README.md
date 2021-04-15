# React相关
## setState是同步还是异步？

##### setState本身并不是异步，只是因为react的性能优化机制体现为异步。在react的生命周期函数或者合成事件下为异步，在DOM原生事件下以及setTimeOut为同步。

#### 为什么在react的生命周期函数或者作用域下为异步?
在state中定义一个值，在componentDidMount中setState改变这个值，如：
```
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
  }
  componentDidMount() {
    this.setState({ number: 3 });
    console.log(this.state.number);  // 1
  }
```

此时的打印结果为1，从表象上看，像是异步的操作， 但其实只是异步的表现形式，每次调用setState都会触发更新，异步操作是为了提高性能，将多个状态合并一起更新，减少重新render的次数。如果在一个循环中setState，在同步机制下，就会重复渲染，消耗性能，所以react会将多个setState合并为一个执行，当执行setState时，state中的数据不会立马更新。

```
for (let i = 0; i < 100; i++) {
  this.setState({ number: this.state.number + 1 });
  console.log(this.state.number); 
}
```
打印结果：

<img src="./img/setState1.png" width="600"> 

#### 如何同步的获取到更新后的数据？
通过回调函数
```
this.setState({ number: 3 }, () => {
  console.log(this.state.number); // 3
});
```


#### 为什么 setTimeout 可以将 setState 的执行顺序从异步变为同步？
```
 setTimeout(() => {
  this.setState({ number: 3 });
  console.log(this.state.number);  // 3
}, 0);
```

并不是 setTimeout 改变了 setState，而是 setTimeout 帮助 setState “逃脱”了 React 对它的管控。只要是在 React 管控下的 setState，一定是异步的。


setState工作流为：

<img src="./img/setState2.png" width="600"> 

isBatchingUpdates是一个react全局唯一的变量，初始值是false，意味着“当前并未进行任何批量更新操作”，每当 React 去执行更新动作时，会将isBatchingUpdates置为true，表示现在正处于批量更新过程中。置为true时，任何需要更新的组件都只能暂时进入 dirtyComponents 里排队等候下一次的批量更新。
isBatchingUpdates 这个变量，在 React 的生命周期函数以及合成事件执行前，已经被 React 悄悄修改为了 true，这时我们所做的 setState 操作自然不会立即生效。当函数执行完毕后，事务的 close 方法会再把 isBatchingUpdates 改为 false。
因为 isBatchingUpdates 是在同步代码中变化的，而 setTimeout 的逻辑是异步执行的。当 this.setState 调用真正发生的时候，isBatchingUpdates 早已经被重置为了 false，这就使得当前场景下的 setState 具备了立刻发起同步更新的能力。

#### 为什么在原生DOM操作中也是同步的？
原生js绑定的事件，不受react的控制，isBatchingUpdates不设置为true。
