### webpack 之 require

##### require.context

语法

- directory 目录路径
- includeSubdirs 是否查找子目录
- filter 正则表达式过滤文件 

```javascript
require.context(directory:String, includeSubdirs:Boolean /* 可选的，默认值是 true */, filter:RegExp /* 可选的 */)
```

使用

```javascript
let r = require.context('./dir', false, /\.js$/)

// f: { 
// 	id: '', 
//   keys: ƒ webpackContextKeys(), 
// 	resolve: ƒ webpackContextResolve(req) 
// }

r.keys().forEach(key=>{
    console.log(r(key)) // 文件
})
```

