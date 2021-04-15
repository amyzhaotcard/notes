# call 、apply 、 bind

共同点：

- 都是改变 this 指向的
- 三者的第一个参数都是 this 指向的对象

区别：语法不同

## call

```
fun.call(thisArg, arg1, arg2, ...)
```

- 调用 `call` 的对象，必须是个函数 `Function`
- 第一个参数：`thisArg` 是 `this` 的指向，如果不传默认为全局对象 `window`
- 第二个参数开始，可以接受任意参数，会映射到相应位置的 `Function` 的参数上面

## apply

```
fun.apply(thisArg, [argsArray])
```

- 调用 apply 的对象，必须是个函数 `Functin`
- 第一个参数：`thisArg` 是 `this` 的指向，如果不传默认为全局对象 `window` 。和 `call` 一致。
- 第二个参数：**必须是数组或者类数组，它们会被转成类数组**，传到调用的函数中，并且映射到 function 对应的参数上。call 和 apply 之间很重要的一个区别

## bind

```
fun.bind(thisArg[, arg1[, arg2[, ...]]])
```

- `bind` 方法的返回值是函数，并且需要调用后，才会执行。而 `apply` 和 `call` 是立即调用的

## this 的指向

this 永远指向最后调用它的那个对象

#### 怎么解决由于 this 指向产生的问题

- 使用 ES6 的箭头函数
- 在函数内部使用 \_this = this
- 使用 apply、call、bind （改变 this 指向）
- new 实例化一个对象 （改变 this 指向）
