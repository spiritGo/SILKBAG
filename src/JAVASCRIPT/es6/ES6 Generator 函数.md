### es6 Generator 函数

> Generator 函数可以通过 yield 关键字把函数的执行流挂起, 为了改变执行流程提供了可能, 从而为异步编程提供解决方案

**语法**

- 在 function 后面, 函数名前面有一个 `*`  号
- 函数内部有 `yield` 表达式

```javascript
function* fun(){
	yield 1
	yield 2
	yield 3
}
```

**执行**

- 和普通函数一样, 在函数名后面加括号调用, 但不会和普通函数一样立即调用, 而是返回一个指向内部状态对象的指针, 所以要调用遍历器对象 Iterator 的 next 方法, 指针就会从函数头部或者上一次停下来的地方开始执行
- 调用 next 方法会返回一个对象, 它的 value 属性值就是当前 yield 表达式的值, done 属性值就是表示遍历是否结束, true 表示结束, false 则相反
- 当遍历完且超出 yield 表达式数量时, next 方法返回的对象的 value 值会变成 undefined, done 值变成 true

```javascript
let f = fun()
f.next() // {value: 1, done: false}
f.next() // {value: 2, done: false}
f.next() // {value: 3, done: false}
f.next() // {value: undefined, done: true}
```

#### yield 表达式

- 遇到 yield 表达式就暂停执行后面的操作, 并将紧跟在 yield 后面的那个表达式的值作为返回对象的 value 属性的值
- 下次调用 next 方法时, 在继续往下执行, 直到遇到下一个 yield 表达式
- 如果没有遇到新的 yield 表达式, 就一直运行到函数结束, 或 return 语句为止, 并将 return 语句后面的表达式的值作为返回对象的 value 的值
- 如果该函数没有 return 语句, 则返回对象的 value 的值为 undefined
- yield 表达式只能存在于 Generator 函数内, 否则会报错

#### next 方法

- yield 表达式本身没有返回值, 或者总是返回 undefined , next 方法可以带一个参数, 该参数会被当做上一个 yield 表达式的返回值

  ```javascript
  function* f(){
      console.log(yield 1)
   	console.log(yield 2)
  }
  
  let test = f()
  test.next() 
  // {value: 1, done: false}
  
  test.next('1') 
  // 1
  // {value: 2, done: false}
  
  test.next('2')
  // 2
  // {value: undefined, done: true}
  
  test.next(3)
  // {value: undefined, done: true}
  ```

#### for...of 循环

- for...of 循环可以自动遍历 Generator 函数运行时生成的 Iterator 对象, 且此时不再需要调用 next 方法
- 一旦 next 方法的返回对象的 done 属性值为 true, for...of 循环就会终止

```javascript
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5
```

#### Generator.prototype.return()

- Generator 函数返回的遍历器对象还有一个 return 方法, 可以返回给定的值, 并且终结遍历 Generator 函数

  ```javascript
  function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  var g = gen();
  
  g.next()        // { value: 1, done: false }
  g.return('foo') // { value: "foo", done: true }
  g.next()        // { value: undefined, done: true }
  ```

- 如果 return 方法调用时不提供参数, 则返回对象的 value 的值为 undefined

  ```javascript
  function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  var g = gen();
  
  g.next() // { value: 1, done: false }
  g.return() // { value: undefined, done: true }
  ```

- 如果 Generator 函数内部有`try...finally`代码块，且正在执行`try`代码块，那么`return()`方法会导致立刻进入`finally`代码块，执行完以后，整个函数才会结束

  ```javascript
  function* numbers () {
    yield 1;
    try {
      yield 2;
      yield 3;
    } finally {
      yield 4;
      yield 5;
    }
    yield 6;
  }
  var g = numbers();
  g.next() // { value: 1, done: false }
  g.next() // { value: 2, done: false }
  g.return(7) // { value: 4, done: false }
  g.next() // { value: 5, done: false }
  g.next() // { value: 7, done: true }
  ```

  

