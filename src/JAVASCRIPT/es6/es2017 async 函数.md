### es2017(es8) async 函数

>  摘自 `es6 全套教程 ecmascript6`

**基本用法**

- `async` 函数返回一个 Promise 对象, 可以使用 `then` 方法添加回调

- 当函数执行时, 一旦遇到 `await` 就会暂停执行, 等到触发的异步操作完成后, 恢复 `async` 函数的执行并返回解析值
- `await` 关键字仅在 `async` 函数中有效, 如果不在 `async` 函数内使用 `await` 则会得到一个语法错误

```javascript
async function a (){}
a() // Promise {<fulfilled>: undefined}

async function b (){
   let resolveRes = await Promise.resolve(7)
   console.log(resolveRes)
    console.log('0s')
}
b() // 7 0s
```

#### await

- `await` 操作符用于等待一个 Promise 对象, 它只能在 `async` 函数内部使用

- `await` 针对所跟不同表达式的处理方式

  - Promise 对象: `await` 会暂停执行, 等待 Promise 对象 resolve, 然后恢复 async 函数的执行
  - 非 Promise 对象: 直接返回对应的值

  ```javascript
  function request(){
      return new Promise(function(resolve){
          setTimeout(()=>resolve(123), 1000)
      })
  }
  
  async function a (){
     let res = await request()
     console.log(res)
     console.log('0s')
  }
  
  a() // 123 0s
  
  // 当等待的 Promise 对象返回 reject 状态时, async 函数内部将不再往下执行
  async function b (){
      let reject = await Promise.reject('reject')
      console.log(reject)
      console.log('0s')
  }
  
  b() // Uncaught (in promise) reject
  b.catch(err=>console.log(err)) // reject
  
  // 当等待的 Promise 对象没有等到 resolve 时, async 函数内部将不再往下执行
  async function c (){
      await new Promise(resolve=>{
          console.log('resolve')
      })
      console.log('0s')
  }
  c() // resolve
  
  // 等待的是非 Promise 对象时
  async function d (){
      let res =  await 1
      console.log(res)
      console.log('0s')
  }
  
  d() // 1 0s
  
  
  // 此时 await 将不再挂起执行, 将不再等待
  async function e (){
      let res = await setTimeout(()=>console.log('timeout 内部'))
      console.log(res)
      console.log('timeout 外部')
  }
  
  e() // 5 'timeout 外部' 'timeout 内部'
  ```

  





