### es6 对象

- 对象字面量

  - es6 允许直接写入变量和函数, 作为对象的属性和方法

    ```javascript
    var foo = 'bar';
    var baz = {foo};
    baz // {foo: "bar"}
    
    // 等同于
    var baz = {foo: foo};
    ```

  - 除了属性可以简写外, 对象内的函数也可以简写

    ```javascript
    let a = {
        bar(){}
    }
    
    // 等同
    let a = {
        bar: function(){}
    }
    ```

  - es6 还允许用表达式来作为属性名, 但必须将表达式放在方括号内

    ```javascript
    let name = 'x'
    let a = {
        [name+'2'](){
            return '小明'
        },
        [name]:name
    }
    
    a.x2() // "小明" 
    a.x // "x"
    ```

- 对象拓展运算符

  - 拓展运算符用三个点表示, 用于取出参数对象所有可以遍历的属性, 然后拷贝到当前对象

  - 当自定义的对象和拓展运算符对象里面的属性相同的时候, 排在后面的属性会覆盖前面同名的属性

  - 拓展运算符后面是 空对象, null 或 undefined 时不会报错, 且没有效果

    ```javascript
    let person = {name: 'tom', age: 18}
    let a = {...person, name: 'lusy'}
    a.name // "lusy"
    
    let c = {...undefined, age: 1}
    c // {age: 1}
    ```

- 对象的新方法

  - 新增 Object.assign(target, source1, source2, ...)

    > 用于将源对象的所有可枚举属性都复制到目标对象
    >
    > assign 的属性拷贝是浅拷贝
    >
    > 后面的同名属性会替换前面的属性

    ```javascript
    let target = {a: 1}
    let s1 = {b: 2}
    let s2 = {c: 3}
    Object.assign(target, s1, s2)
    target // {a:1, b:2, c:3}
    
    let sourceObj = { a: { b: 1}};
    let targetObj = {c: 3};
    Object.assign(targetObj, sourceObj);
    targetObj.a.b = 2;
    sourceObj.a.b;  // 2
    
    targetObj = { a: { b: 1, c:2}};
    sourceObj = { a: { b: "hh"}};
    Object.assign(targetObj, sourceObj);
    targetObj;  // {a: {b: "hh"}}
    
    // 数组的合并, 下标相同合并
    Object.assign([2,3], [5]);  // [5,3]
    ```

  - 新增 Object.is(value1, value2)

    > 用来比较两个值是否严格相等，与（===）基本类似。

    ```javascript
    Object.is("q","q");      // true
    Object.is(1,1);          // true
    Object.is([1],[1]);      // false
    Object.is({q:1},{q:1});  // false
    ```

    

