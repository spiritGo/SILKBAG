### es6 迭代器

- Iterator

  1. 通过 Symbol.iterator 创建一个迭代器, 指向当前数据结构的起始位置
  2. 随后通过 next 函数进行向下迭代, next 函数会返回当前位置的对象, 对象包含 value(当前值) 和 done(是否完成迭代)
  3. done 为真时完成迭代
  4. 可迭代的数据结构是: Array, String, Map, Set

  ```javascript
  const a = [1, 2, 3]
  const it = a[Symbol.iterator]()
  
  it.next() // {value: 1, done: false}
  it.next() // {value: 2, done: false}
  it.next() // {value: 3, done: false}
  it.next() // {value: undefined, done: true}
  ```

  

- for ... of ...

  1. 用于替代 for ... in ... 和 forEach
  2. 可迭代 Array, String, Map, Set 等可迭代的数据结构, 如果是类数组对象则要转成数据后迭代

  ```javascript
  const likeArray = {length: 2, 0: 0, 1: 2}
  for(let item of likeArray) {} // likeArray is not iterable
  ```

  