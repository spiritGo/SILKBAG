### FileReader

> FileReader 允许 web 应用程序异步读取存储在用户计算机上的文件(或原始数据缓冲)的内容, 使用 File 或 Blob 对象指定要读取的文件或数据

- 常规使用

  ```javascript
  const reader = new FileReader();
  reader.onload = function () {
    // ...
  };
  reader.readAsDataURL(file);
  ```
