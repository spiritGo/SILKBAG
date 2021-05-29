### es6 模块

> 本文摘自 阮一峰老师的 《ES6全套教程》[http://jsrun.net/t/KgKKp](http://jsrun.net/t/KgKKp)

模块功能主要由两个命令构成： export, import

export 用于规定模块的对外接口(导出)

import 用于输入其他模块提供的功能(导入)

```javascript
// 导出
let fn = function(){}
export {fn}

// 导入
import fn from 文件路径
console.log(fn) // undefined

import {fn} from 文件路径
console.log(fn) // ƒ fn() {}
```



- **export 命令**

  - 输出变量
  - 输出函数
  - 重命名

  ```javascript
  // 输出变量
  let name = 'tom'
  export {name}
  
  // 输出函数
  let fn = function(){}
  export {fn}
  export function fn2(){}
  
  // 重命名
  export {fn as fn2}
  ```

  

- **import 命令**

  - 通过 export 命令定义了的对外接口, 可以在其他的 js 文件中使用 import 命令加载这个模块

    ```javascript
    // modules.js 模块
    
    export function fn(){
      this.name = 'tom'
    }
    
    // 导入 fn
    import {fn} from './modules'
    console.log(fn)
    
    // 控制台输出
    ƒ fn() {
      this.name = 'tom';
    }
    ```

  - import 不能使用表达式和变量

    ```javascript
    // 报错
    import { 'f' + 'oo' } from 'my_module';
    
    // 报错
    let module = 'my_module';
    import { foo } from module;
    
    // 报错
    if (x === 1) {
      import { foo } from 'module1';
    } else {
      import { foo } from 'module2';
    }
    ```

  - 如果多次重复执行同一句`import`语句，那么只会执行一次，而不会执行多次。

    ```javascript
    import 'lodash';
    import 'lodash';
    
    // 实际只会导入 lodash 一次
    ```

    

- **模块的整体加载**

  - import 可以使用 * 号指定一个对象, 使得 export 输出值都加载在这个对象上

    ```javascript
    // circle.js
    
    export function area(radius) {
      return Math.PI * radius * radius;
    }
    
    export function circumference(radius) {
      return 2 * Math.PI * radius;
    }
    
    // main.js
    
    import { area, circumference } from './circle';
    
    console.log('圆面积：' + area(4));
    console.log('圆周长：' + circumference(14));
    
    // 使用 * 号
    import * as circle from './circle';
    
    console.log('圆面积：' + circle.area(4));
    console.log('圆周长：' + circle.circumference(14));
    ```

    

- **export default**

  - 用于指定默认输出

  - 可以导出匿名函数

  - 使用 import 导入时, 接收输出值的对象名称可以自定义

    ```javascript
    // modules.js
    export default function (){
    	console.log('hahaha')
    }
    
    import fn from './modules'
    fn() // "hahaha"
    ```

- **export 与 import 的复合写法**
  - 如果在一个模块之中，先输入后输出同一个模块，`import`语句可以与`export`语句写在一起。
    ```javascript
    export { foo, bar } from 'my_module';
    
    // 等同于
    import { foo, bar } from 'my_module';
    export { foo, bar };
    
    // 接口改名
    export { foo as myFoo } from 'my_module';
    
    // 整体输出
    export * from 'my_module';
    ```

    

- **跨模块常量**

  ```javascript
  // constants/db.js
  export const db = {
    url: 'http://my.couchdbserver.local:5984',
    admin_username: 'admin',
    admin_password: 'admin password'
  };
  
  // constants/user.js
  export const users = ['root', 'admin', 'staff', 'ceo', 'chief', 'moderator'];
  
  // constants/index.js
  export {db} from './db';
  export {users} from './users';
  
  // script.js
  import {db, users} from './constants';
  ```

  

