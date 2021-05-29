### es6 字符串

> es6 拓展了一些字符操作的函数

- 子字符串的识别

  - includes(str) 

    返回布尔值, 判断是否找到参数字符串

    ```javascript
    'i am tom'.includes('tom') // true
    ```

  - startsWith(str) 

    返回布尔值, 判断参数字符串是否在原字符串的头部

    ```javascript
    'i am tom'.startsWith('i') // true
    'i am tom'.startsWith('am') // false
    ```

  - endsWidth(str) 

    返回布尔值, 判断参数字符串是否在原字符串的尾部

    ```javascript
    'i am tom'.endsWith('i') // false
    'i am tom'.endsWith('tom') // true
    ```

- 字符串重复

  - repeat(n) 

    返回新的字符串, 表示将字符串重复到指定的次数后返回

    如果参数是小数则向下取整

    如果参数是 NaN, 则等同于 0

    如果参数是字符串, 则会转成数字在做运算

    ```javascript
    '2'.repeat(10) // "2222222222"
    '2'.repeat(2.8) // "22"
    ```

- 字符串补全

  - padStart(n, str)

    返回新的字符串, 表示用参数字符串从头部开始填充

    ```javascript
    '6'.padStart(2, 0) // "06"
    ```

  - padEnd(n, str)

    返回新的字符串, 表示用参数字符串充尾部开始填充

    ```javascript
    '6'.padEnd(2, 0) // "60"
    ```

    如果指定长度小于或者等于原字符串的长度, 则返回原字符串

    如果原字符加上补全字符串长度大于指定长度, 则截去超出位数的补全字符串

- 模板字符串

  用反引号把一个字符串包围起来, 反引号内可以用 ${} 的形式加入变量或javascript表达式

  模板字符串会将文本按写入样式原样输出, 保留排版

  ```javascript
  let name = 'tom';
  `i am ${name}` // "i am tom"
  
  `<div>
  ${name}
  </div>`  // 将 name 换成 tom 后, 原样输出
  ```

  

  