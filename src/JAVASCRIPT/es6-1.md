1. const, let

- 没有变量提升
- 暂时性死区
  ES6 明确规定，代码块内如果存在 let 或者 const，代码块会对这些命令声明的变量从块的开始就形成一个封闭作用域
- 代码块内有效

  ```js
  var PI = "a";
  if (true) {
    console.log(PI); // ReferenceError: PI is not defined
    const PI = "3.1415926";
  }
  ```

2. 结构赋值

- 结构赋值是对赋值运算符的扩展
- 支持对象和数组
- 支持设置默认值
- 支持重命名

  ```js
  let [a, b, c] = [1, 2, 3];
  // a = 1
  // b = 2
  // c = 3

  let { foo, bar } = { foo: "aaa", bar: "bbb" };
  // foo = 'aaa'
  // bar = 'bbb'

  let { baz: foo } = { baz: "ddd" };
  // foo = 'ddd'

  let { a = 10, b = 5 } = { a: 3 };
  // a = 3; b = 5;

  let { a: aa = 10, b: bb = 5 } = { a: 3 };
  // aa = 3; bb = 5;
  ```

3. symbol

- 表示独一无二的值
- 不能使用 new 命令
- 可以接受一个参数, 用来描述这个 symbol

  ```js
  let sy = Symbol("KK");
  console.log(sy); // Symbol(KK)
  typeof sy; // "symbol"

  // 相同参数 Symbol() 返回的值不相等
  let sy1 = Symbol("kk");
  sy === sy1; // false
  ```

- Symbol.for
  类似单例模式, 首先会在全局搜索被登记的 Symbol 中是否有该字符串作为名称的 Symbol 值, 如果有则返回该 Symbol 的值,没有则新建并返回一个以该字符串为名称的 Symbol 值

  ```js
  let yellow = Symbol("Yellow");
  let yellow1 = Symbol.for("Yellow");
  yellow === yellow1; // false

  let yellow2 = Symbol.for("Yellow");
  yellow1 === yellow2; // true
  ```

- Symbol.keyFor
  返回一个已登记的 Symbol 类型值的 key, 用来检测该字符串是否已经被登记

  ```js
  let yellow1 = Symbol.for("Yellow");
  Symbol.keyFor(yellow1); // "Yellow"
  ```

4. Map 与 Set

- Map 的键可以是任何值, 包括对象和函数
- Map 中的键值是有序的

  ```js
  var myMap = new Map();

  var keyString = "a string";
  myMap.set(keyString, "和键'a string'关联的值");
  myMap.get(keyString); // "和键'a string'关联的值"
  myMap.get("a string"); // "和键'a string'关联的值"

  var keyObj = {};
  myMap.set(keyObj, "和键 keyObj 关联的值");
  myMap.get(keyObj); // "和键 keyObj 关联的值"
  myMap.get({}); // undefined, 因为 keyObj !== {}
  ```

- Map 与 Array 的转换

  ```js
  var kvArray = [
    ["key1", "value1"],
    ["key2", "value2"],
  ];

  // Map 构造函数可以将一个 二维 键值对数组转换成一个 Map 对象
  var myMap = new Map(kvArray);

  // 使用 Array.from 函数可以将一个 Map 对象转换成一个二维键值对数组
  var outArray = Array.from(myMap);
  ```

- Set 对象允许你存储任何类型的唯一值, 无论是原始值或者是对象引用

  ```js
  let mySet = new Set();

  mySet.add(1); // Set(1) {1}
  mySet.add(5); // Set(2) {1, 5}
  mySet.add(5); // Set(2) {1, 5} 这里体现了值的唯一性
  mySet.add("some text");
  // Set(3) {1, 5, "some text"} 这里体现了类型的多样性
  var o = { a: 1, b: 2 };
  mySet.add(o);
  mySet.add({ a: 1, b: 2 });
  // Set(5) {1, 5, "some text", {…}, {…}}
  // 这里体现了对象之间引用不同不恒等，即使值相同，Set 也能存储
  ```

  ```js
  // Array 转 Set
  var mySet = new Set(["value1", "value2", "value3"]);
  // 用...操作符，将 Set 转 Array
  var myArray = [...mySet];
  String;
  // String 转 Set
  var mySet = new Set("hello"); // Set(4) {"h", "e", "l", "o"}
  // 注：Set 中 toString 方法是不能将 Set 转换成 String
  ```
