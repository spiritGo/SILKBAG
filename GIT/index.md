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

> 分支是 git 中的一个重要的部分, 你做的任何提交都会发生在当前分支上, 使用 `git status` 查看当前分支

- 创建一个新的分支

  ```bash
  git branch [branch-name]
  ```

- 切换到指定分支并更新工作目录

  ```bash
  git checkout [branch-name]
  ```

- 将指定分支的历史合并到当前分支

  ```bash
  git merge [branch]
  ```

- 删除指定分支

  ```bash
  git branch -d [branch-name]
  ```

### 同步修改

> 将你本地仓库和远程仓库同步

- 下载远端跟踪分支的所有历史

  ```bash
  git fetch
  ```

- 将远端分支合并到本地分支

  ```bash
  git merge
  ```

- 将所有本地分支提交到远程仓库

  ```bash
  git push
  ```

- 下载远端分支并合并本地分支

  ```bash
  git pull
  ```

### 进行更改

> 浏览并检查项目文件的发展

- 列出当前分支的版本历史

  ```bash
  git log
  ```

- 列出文件的版本历史, 包括重命名

  ```bash
  git log --follow [file]
  ```

- 展示两个分支之间的内容差异

  ```bash
  git diff [first-bransh]...[second-branch]
  ```

- 输出指定 commit 的元数据和内容变化

  ```bash
  git show [commit]
  ```

- 将文件进行快照处理用于版本控制

  ```bash
  git add [file]
  ```

- 将文件快照永久的记录在版本历史中

  ```bash
  git commit -m "[descriptive message]"
  ```

### 重做提交

> 清除错误和构建用于替换的历史

- 撤销所有 commit 后的提交, 在本地保存更改

  ```bash
  git reset [commit]
  ```

- 放弃所有历史, 改回指定提交

  ```bash
  git reset --hard [commit]
  ```
  
  注意: 更改历史可能带来不良后果。如果你需要更改 GitHub（远端）已有的提交，请谨慎操作

### .gitignore 文件

> 有时有些文件最好不要用 git 跟踪, 这通常在名为 .gitignore 的特殊文件中完成. 你可以在 github.com/github/gitignore 找到有用的 .gitignore 文件模板