### 对象中的 getter 和 setter

- setter

  **`set`**语法将对象属性绑定到要调用的函数

  下面 current 被定义为伪属性, 必须设置过 getter 后才可获取值

  ```javascript
  const language = {
    set current(name) {
      this.log.push(name);
    },
    log: []
  };
  
  language.current = 'EN';
  language.current = 'FA';
  
  console.log(language.log); // ["EN", "FA"]
  ```

  可以使用 delete 删除 current 

  ```javascript
  delete language.current // true
  ```

- getter

  **`get`**语法将对象属性绑定到查询该属性时将被调用的函数

  ```javascript
  const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
      if (this.log.length === 0) {
        return undefined;
      }
      return this.log[this.log.length - 1];
    }
  };
  
  console.log(obj.latest); // c
  ```

  