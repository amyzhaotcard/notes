# Object 与 Map 的异同及使用场景

## Map

Map 是一种数据结构,在 Map 中，每一对数据的格式都为 key value 的形式。Map 中的 key 和 value 可以是任何数据类型，不仅限于字符串或整数。

## map 的属性和方法

属性： size 属性（返回 Map 结构的成员总数）

方法：

- set()

  - 设置键名 key 对应的键值为 value，然后返回整个 Map 结构
  - 如果 key 已经有值，则键值会被更新，否则就新生成该键
  - 同时返回的是当前 Map 对象，可采用链式写法

  ```javascript
  const m = new Map();
  m.set("edition", 6); // 键是字符串
  m.set(262, "standard"); // 键是数值
  m.set(undefined, "nah"); // 键是 undefined
  m.set(1, "a").set(2, "b").set(3, "c"); // 链式操作
  ```

- get() 读取 key 对应的键值，如果找不到 key，返回 undefined
  ```javascript
  const m = new Map();
  const hello = function () {
    console.log("hello");
  };
  m.set(hello, "Hello ES6!"); // 键是函数
  m.get(hello); // Hello ES6!
  ```
- has() 返回一个布尔值，表示某个键是否在当前 Map 对象之中
  ```javascript
  const m = new Map();
  m.set("edition", 6);
  m.set(262, "standard");
  m.set(undefined, "nah");
  m.has("edition"); // true
  m.has("years"); // false
  m.has(262); // true
  m.has(undefined); // true
  ```
- delete() 删除某个键，返回 true。如果删除失败，返回 false

  ```javascript
  const m = new Map();
  m.set(undefined, "nah");
  m.has(undefined); // true
  m.delete(undefined);
  m.has(undefined); // false
  ```

- clear() 清除所有成员，没有返回值
  ```javascript
  let map = new Map();
  map.set("foo", true);
  map.set("bar", false);
  map.size; // 2
  map.clear();
  map.size; // 0
  ```

## Object

Object 遵循与 Map 类型相同 key value 的存储结构。JavaScript 中的 Object 拥有内置原型(prototype)。需要注意的是，JavaScript 中几乎所有对象都是 Object 实例，包括 Map。

## 区别

- key：Object 遵循普通的字典规则，key 必须是单一类型，并且只能是整数、字符串或是 Symbol 类型。但在 Map 中，key 可以为任意数据类型（Object, Array 等）。
- 元素顺序：Map 会保留所有元素的顺序，而 Object 并不会保证属性的顺序。
- 继承：Map 是 Object 的实例对象，而 Object 显然不可能是 Map 的实例对象。
- 构建方式：

object：

- 直接定义（var obj = {}; //空对象 var obj = {id: 1, name: "Test object"}; ）
- 构造方法（new Object）
- Object.prototype.create

map:

- new Map()

## 应用场景

- 如果知道所有的 key，它们都为字符串或整数（或是 Symbol 类型），你需要一个简单的结构去存储这些数据，Object 是一个非常好的选择。构建一个 Object 并通过知道的特定 key 获取元素的性能要优于 Map（字面量 vs 构造函数，直接获取 vs get()方法）。
- 如果需要在对象中保持自己独有的逻辑和属性，只能使用 Object
- JSON 直接支持 Object，但尚未支持 Map。因此，在某些我们必须使用 JSON 的情况下，应将 Object 视为首选。
- Map 是一个纯哈希结构，而 Object 不是（它拥有自己的内部逻辑）。使用 delete 对 Object 的属性进行删除操作存在很多性能问题。所以，针对于存在大量增删操作的场景，使用 Map 更合适。
- 不同于 Object，Map 会保留所有元素的顺序。Map 结构是在基于可迭代的基础上构建的，所以如果考虑到元素迭代或顺序，使用 Map 更好，它能够确保在所有浏览器中的迭代性能。
- Map 在存储大量数据的场景下表现更好，尤其是在 key 为未知状态，并且所有 key 和所有 value 分别为相同类型的情况下。

## object 为什么是无序的（Object 是怎么存储的）

[栈空间和堆空间：数据是如何存储的](https://blog.poetries.top/browser-working-principle/guide/part3/lesson12.html)

对象是以 Hash 结构存储的（hash 表其实就是管理一对对<Key，Value>这样的结构）

在 JavaScript 的执行过程中， 主要有三种类型内存空间，分别是代码空间、栈空间和堆空间。

```

```
