### es6 class 类

> 摘自 阮一峰的 es6 全套教程 [http://jsrun.net/t/SZKKp](http://jsrun.net/t/SZKKp)

**基础用法**

- 构造函数的语法糖

  ```javascript
  function Dog (name){
  	this.name = name
  }
  
  Dog.prototype.getName = function(){
      console.log(this.name)
  }
  
  let dog = new Dog('小明')
  dog.getName() // 小明
  
  
  // 等同于
  class Dog{
      constructor(name) {
          this.name = name
      }
      
      getName() {
          console.log(this.name)
      }
  }
  
  let dog = new Dog('小李')
  dog.getName() // 小李
  ```

- class 其实也是一个构造函数， 它里面的方法也是定义在 prototype 内

- 所以我们也可以在类中使用 prototype 添加方法

  ```javascript
  Dog.prototype // {constructor: ƒ, getName: ƒ}
  
  Dog.prototype.getAge = function(){}
  Dog.prototype // {getAge: ƒ, constructor: ƒ, getName: ƒ}
  ```

- 在类里面定义的方法无法遍历, 但在 prototype 中添加的方法可以遍历

  ```javascript
  Object.keys(Dog.prototype) // ["getAge"]
  ```

- constructor 方法

  - constructor 是类的默认方法, 当使用 new 关键字创建实例时, 会自动调用该方法 

  - 一个类必须有constructor 方法, 如果没有显示定义, 一个空的 constructor 将会被添加

    ```javascript
    constructor (){}
    ```

  - constructor 默认返回实例对象, 当然也可以指定返回其他对象

    ```javascript
    class Foo{
        constructor(){
            return {} // 返回其他对象
        }
    }
    ```

- class 表达式

  - 与 es5 一致, 类也可以使用表达式的形式定义

  - 当使用表达式定义类时, calss 后跟的类名将只能在类里面使用, 指代当前类

    ```javascript
    const myDog = class Dog {
        name = '狗'
        getName(){
            return Dog.name + this.name
        }
    }
    
    let dog1 = new Dog() // Dog is not defined
    let dog2 = new myDog() // Dog {}
    dog2.getName() // "Dog狗
    
    // 上面定义类的简写(如果没有使用到类后面的类名的话)
    const myDog = class {}
    ```

  - 采用 class 表达式可以写出立即执行的 class

    ```javascript
    const dog3 = new class {
    	constructor(name){
            this.name = name
        }    
        
        bark(){
            console.log(this.name, '汪汪汪')
        }
    }('小明')
    
    dog3.bark() // 小明 汪汪汪
    ```

- 私有方法

  - 使用命名区分私有变量

    ```javascript
    class Wedget {
        // 公有
        foo(){
            this._bar()
        }
        
        //私有
        _bar(){}
    }
    ```

  - 将私有变量移除类, 创建在类的外部

    ```javascript
    class Wedget {
        foo(){
           bar.call(this)
        }
    }
    
    function bar (){}
    ```

  - 使用 Symbol 

    ```javascript
    const bar = Symbol('bar')
    class Wedget {
        foo(){
            this[bar]()
        }
        
        [bar](){}
    }
    ```

- this 指向

  - 类的方法里面如果含有 this, 则默认指向类的实例, 但是如果方法被单独使用, 则 this 指向将被改变
  - 如果想要绑定类的实例, 可以使用 bind, call, applay 或者 箭头函数

  

**封装与继承**

- 类之间可以使用 extends 关键字实现继承

- 子类如果想要继承父类, 则必须在子类自己的 constructor 内调用 super 方法

- 在子类中, 只有调用了 super 方法, 才可以使用 this 关键字, 因为子类中的 this 是基于父类的

  ```javascript
  class child extends parent {}
  ```



#### class 的取值和存值函数

- 与ES5一样，在Class内部可以使用`get`和`set`关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。

  ```javascript
  class Cat {
  	constructor(name){
          this.name = name
      }
      
      set name (value){
          console.log('我被赋值了', value)
      }
      
      get name (){
          return '我不可能被改变'
      }
  }
   
  let cat = new Cat('小苗') // 我被赋值了 小苗
  cat.name = '哈哈哈' // "我不可能被改变"
  ```

  