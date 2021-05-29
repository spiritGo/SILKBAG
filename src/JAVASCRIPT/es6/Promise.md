### Promise

> 本文摘自 阮一峰的 es6 全套教程 [http://jsrun.net/t/jZKKp](http://jsrun.net/t/jZKKp)

Promise 有三种状态: pending(进行中), fulfilled(已成功), rejected(已失败)

只有异步操作的结果可以决定当前是哪一种状态, 任何其他操作都无法改变这个状态

状态只能从 pending 变为 fulfilled 或 rejected, 且改变后状态就被凝固了, 无法再次更改

#### 基本用法

Promise 对象是一个构造函数, 它接受一个函数作为参数, 该函数有两个参数分别是 resolve 和 reject

```javascript
const promise = new Promise(function(resolve, reject){
    if(success) {
        resolve() // 表示成功的回调
    }else {
        reject() // 表示失败的回调
    }
})
```



#### Promise.prototype.then()

then() 是 Promise 原型上的方法, 它的作用是为 Promise 实例添加状态改变时的回调, 只要 Promise 状态更改为 fulfilled 或 rejected, 都会触发 then 方法

then() 方法有两个参数, 分别是异步成功的回调和异步失败的回调

```javascript
promise.then(function(res){
    // 异步成功的回调, res 是 resolve() 方法传递过来的参数
}, function(err){
    // 异步失败的回调, err 是 reject() 方法传递过来的参数
})
```



#### Promise.prototype.catch()

它是 .then(null, function(){}) 的别名, 用于指定发生错误时的回调

```javascript
promise.catch(function(){
    // 只要是 promise 内发生错误或者状态失败, 都会触发该回调
})

// eg:
var promise = new Promise(function(resolve, reject) {
  throw new Error('test');
});
promise.catch(function(error) {
  console.log(error);
});
// Error: test
```



#### Promise.prototype.finally()

finally() 方法返回一个Promise。在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。这为在Promise是否成功完成后都需要执行的代码提供了一种方式

finally() 函数不接受任何参数

```javascript
const p = new Promise(function(resolve){
    resolve(123)
}).finally(res=>{
    console.log(res)
    // undefined
})

const p2 = new Promise(function(resolve, reject){
    throw new Error('123')
}).then(res=>{
    console.log('成功了', res)
}).catch(err=>{
    console.log(err)
}).finally(res=>{
    console.log(res)
})

// 控制台输出 catch 被调用
Error: 123
    at <anonymous>:2:11
    at new Promise (<anonymous>)
    at <anonymous>:1:1
                    
// 控制台输出 finally 被调用                    
undefined
```





#### Promise.all()

Promise.all 方法用于将多个 Promise 实例包装成一个新的 Promise 实例

```javascript
var p = Promise.all([p1, p2, p3]);
```

上面只有当 p1,  p2,  p3 的状态都市 resolve 时， p 的状态才是 fulfilled， 否则 rejected, 并且 p 的状态要等待 p1， p2， p3 都完成后才会改变

```javascript
p.then(function(res){
    // res 是一个数组, 依次包含 p1, p2, p3 的成功回调返回的数据
}, function(err){
    // err 是三个 promise 第一个发生错误的回调
})
```



#### Promise.resolve()

将现有的对象转成 promise 对象

```javascript
const  p = Promise.resolve('foo')

// 等价于
new Promise(resolve => resolve('foo'))
```



#### Promise.reject()

Promise.reject(err) 方法也会返回一个新的 Promise 实例，该实例的状态为 rejected

```javascript
var p = Promise.reject('出错了');
// 等同于
var p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
  console.log(s)
});
// 出错了
```



#### promise.any()

promise.any() 接受一个可迭代的对象, 只要其中一个 promise 成功, 就返回已成功的 promise

如果可迭代对象中没有一个成功, , 就返回失败的 promise

成功状态

```javascript
const pErr = new Promise((resolve, reject) => {
  reject("总是失败");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "最终完成");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "很快完成");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
  // 很快完成
})
```

失败状态

```javascript
const pErr = new Promise((resolve, reject) => {
  reject('总是失败');
});

const p2 = new Promise((resolve, reject) =>{
  reject('又一个失败')
})

Promise.any([pErr, p2]).catch((err) => {
  console.log(err);
  // AggregateError: All promises were rejected
})
```



#### promise.race()

和 promise 类似, 但是 promise.race 是只要迭代器中的某个 promise 的状态改变, promise.race() 的状态就改变,

输出内容是迭代器中第一个改变的 promise 的输出内容

```javascript
var p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "one");
});
var p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "two");
});

Promise.race([p1, p2]).then(function(value) {
  console.log(value); // "two"
  // 两个都完成，但 p2 更快
});

var p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "three");
});
var p4 = new Promise(function(resolve, reject) {
    setTimeout(reject, 500, "four");
});

Promise.race([p3, p4]).then(function(value) {
  console.log(value); // "three"
  // p3 更快，所以它完成了
}, function(reason) {
  // 未被调用
});

var p5 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "five");
});
var p6 = new Promise(function(resolve, reject) {
    setTimeout(reject, 100, "six");
});

Promise.race([p5, p6]).then(function(value) {
  // 未被调用
}, function(reason) {
  console.log(reason); // "six"
  // p6 更快，所以它失败了
});
```



#### Promise.allSettled()

该 Promise.allSettled() 方法返回一个在所有 promise 都已经 fulfilled 或 rejected 后的 promise, 并带有一个对象数组, 每个对象表示对应的 promise 的结果

```javascript
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) => {
    console.log(results)
});

// 控制台输出
(2) [{…}, {…}]
0: {status: "fulfilled", value: 3}
1: {status: "rejected", reason: "foo"}
length: 2
__proto__: Array(0)
```

