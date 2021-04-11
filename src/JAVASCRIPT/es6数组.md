### es6 数组

- **es6 新增了几个创建数组的方式**

  - Array.of(item...)

    将参数中所有值作为元素形成数组

    ```javascript
    Array.of(1, undefined, 'string', null, true, Symbol('symbol'))
    
    //  [1, undefined, "string", null, true, Symbol(symbol)]
    
    Array.of() // []
    ```

  - Array.from(arrayLike[, mapFn[, thisArg]])

    - arrayLike 想要转换的类数组对象或可迭代对象

      一个类数组对象必须含有 length 属性, 且元素属性名必须是数值或者可转换成数值的字符

    - mapFn 用于对每个元素进行处理, 放入数组的是处理后的元素

    - thisArg 用于指定 mapFn 函数执行时的上下文环境

    将类数组对象或可迭代对象转换成数组

    ```javascript
    Array.from([1,2]) // [1, 2]
    
    Array.from([1, ,2]) // [1, undefined, 2]
    
    Array.from([1,2,3], (n) => n*2) // [2, 4, 6]
    
    Array.from('abc') // ["a", "b", "c"]
    
    Array.from(new Set([1,2,3])) // [1, 2, 3]
    ```

- **es6 对数组拓展了一些可操作的函数**

  - find(callback[, thisArg])

    - 查找数组中符合条件的元素, 若有多个符合条件的元素, 则返回第一个

      ```javascript
      let a = [1,2,3]
      a.find(val => val > 2) // 3
      ```

  - findIndex(callback[, thisArg])

    - 查找数组符合天剑的元素索引, 若有多个符合条件的元素, 则返回符合条件的第一个元素的索引

      ```javascript
      let a = [1,2,3]
      a.findIndex(val=> val == 1) // 0
      ```

  - fill(arg[, startIndex, endIndex])

    - 将一定索引范围的数组元素内容填充为单个指定的值 `arg`

      ```javascript
      let a = [1,2,3]
      a.fill('a', 1, 2) // [1, "a", 3]
      a.fill('a', 1, 3) // [1, "a", "a"]
      a.fill('a', 1, 6) // [1, "a", "a"]
      ```

  - copyWithin(editIndex[, copyIndex, copyEndIndex])

    - 将一定索引范围的数组元素修改为此数组另一指定索引范围的元素

    - editIndex 被修改的起始索引, 若为负数则表示倒数

    - copyIndex 被用来覆盖的数据的起始索引

    - copyEndIndex 被用来覆盖的数据的结束索引, 默认为数组末尾

      ```javascript
      [1, 2, 3, 4].copyWithin(0,2,4) // [3, 4, 3, 4]
      [1, 2, 3, 4].copyWithin(-2, 0) // [1, 2, 1, 2]
      ```

  - entries()

    - 遍历键值对

      ```javascript
      for(let [key, value] of ['a', 'b'].entries()){
          console.log(key, value);
      }
      // 0 "a"
      // 1 "b"
       
      // 不使用 for... of 循环
      let entries = ['a', 'b'].entries();
      console.log(entries.next().value); // [0, "a"]
      console.log(entries.next().value); // [1, "b"]
       
      // 数组含空位
      console.log([...[,'a'].entries()]); // [[0, undefined], [1, "a"]]
      ```

  - keys()

    - 遍历键名

      ```javascript
      for(let key of ['a', 'b'].keys()){
          console.log(key);
      }
      // 0
      // 1
       
      // 数组含空位
      console.log([...[,'a'].keys()]); // [0, 1]
      ```

  - values()

    - 遍历键值

      ```javascript
      for(let value of ['a', 'b'].values()){
          console.log(value);
      }
      // "a"
      // "b"
       
      // 数组含空位
      console.log([...[,'a'].values()]); // [undefined, "a"]
      ```

  - includes(value[, startIndex])

    - 数组是否包含指定值

    - value 是否包含的指定值

    - startIndex 搜索的起始索引, 默认为 0

      ```javascript
      [1, 2, 3].includes(1);    // true
      [1, 2, 3].includes(1, 2); // false
      [1, 2, 3].includes(1, 0); // true
      [1, NaN, 3].includes(NaN); // true
      ```

  - flat(n)

    - 将嵌套数组转成一维数组

    - n 指定转换的嵌套层数

      ```javascript
      [1, [2, 3]].flat() // [1, 2, 3]
      [1, [2, [3, [4, 5]]]].flat(2) // [1, 2, 3, [4, 5]]
      
      // 将多维数组转成一维数组
      [1, [2, [3, [4, 5]]]].flat(Infinity) // [1, 2, 3, 4, 5]
      
      // 去除空位
      [1, [2, , 3]].flat() // [1, 2, 3]
      ```

  - flatMap(callback[, thisArg])

    - 先对数组中每个元素进行了的处理，再对数组执行 flat() 方法

    - callback 遍历函数，该遍历函数可接受3个参数：当前元素、当前元素索引、原数组

    - thisArg 指定上下文环境

      ```javascript
      [1, 2, 3].flatMap(n => [n * 2]) // [2, 4, 6]
      ```

- **拓展运算符**

  - 用来合并或者复制数组, 此函数为浅拷贝

    ```javascript
    let a = [1];
    let b = [2];
    [...a, ...b] // [1, 2]
    ```

    