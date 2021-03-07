## GIT 的基本使用

### 配置工具

> 对所有本地仓库的用户信息进行配置

- 对你的 commit 操作设置关联的用户名

  ```bash
  git config --global user.name "[name]"
  ```

- 对你的 commit 操作设置关联的邮箱地址

  ```bash
  git config --global user.email "[email]"
  ```

- 启用有帮助的彩色命令行输出

  ```bash
  git config --global color.ui auto
  ```

### 创建仓库

> 当着手于一个新的仓库时, 你只需要创建一次. 要么在本地创建, 然后推送到 github; 要么通过 clone 一个现有的库

- 初始化本地仓库

  ```bash
  git init
  ```

- 将本地仓库和远程仓库关联起来

  ```bash
  git remote add origin [url]
  ```

- 下载一个现有的远程仓库, 包括所有文件, 分支, 和提交.

  ```bash
  git clone [url]
  ```

### 分支

### 同步修改
### 进行更改
### 重做提交
### .gitignore 文件