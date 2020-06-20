# 跟你朋友介紹 Git

## 環境設置

Git 官網：https://git-scm.com/

到 Git 官網下載 ，官網右邊 Downloads 圖示點下去，就會自動下載，下載完以後一直按下一步就安裝完成。

安裝 Git 的時候，會一併安裝 git-bash，在 Windows 上面操作 command line 指令時可以使用 git-bash。
  
<br>

## 什麼是 Git？

Git 是一個免費、開源的分散式版本控制系統。
由 Linux 系統的開發者 Linus Torvalds 為了幫助管理 Linux 核心開發而開發的一個開放原始碼的版本控制軟體。

那麼什麼是「版本控制」？  
什麼是「分散式版本控制系統」呢？

* **本地端的版本控制**  
當我們在開發一個專案或編輯一份文件的時候，經過時間的推移，往往會發展出數個修改和進化版本，為了分辨這些版本間的差別，往往會以檔名（例如：在檔名後面加上 v1、v2 或 final 等字來區別）或簡單的資料庫來記錄檔案變更歷史。

    ![](https://i.imgur.com/sGLH1kZ.png)

<br>

* **集中式版本控制系統（Centralized Version Control Systems，簡稱 CVCSs）**  
但是開發專案往往不是一個人的事，而是經由多人協作來完成，因此如何和其他電腦上的開發者協同合作就變成一個重要的問題。為了解決這個問題，集中化的版本控制系統應運而生，像是 CVS、Subversion 和 Perforce 都是集中化的版本控制系統。由一個伺服器來管理所有版本的檔案，而許多用戶端會連到這台伺服器取出檔案來使用。 

    ![](https://git-scm.com/book/en/v2/images/centralized.png)

<br>

* **分散式版本控制系統（Distributed Version Control Systems，簡稱 DVCSs）**  
在 DVCS 系統（如 Git、Mercurial、Bazaar 和 Darcs）中，用戶端把整個倉儲（repository）做個鏡像，各自複製（clone）到本地端進行開發，形成多條分支（branch），更新完成後，把更新的檔案加入（add）版本控制中，再提交（commit）更新到主要倉儲，最後通過討論與協作（code review）後再把分支合併（merge）回主要倉儲，解決版本衝突（conflict）問題，同時記錄了版本變化的歷史。並且由於每一個用戶端都有完整的倉儲鏡像可供還原，解決集中式版本控制系統因為只仰賴一台伺服器而產生的遺失檔案風險。

    ![](https://git-scm.com/book/en/v2/images/distributed.png)
 
<br>

## Git 的三個工作區域 & 檔案的三種狀態

Git 專案的主要可以分為三個區域：
* 工作目錄（working directory）
* 預存區（staging area）
* .git 資料夾（Repository）

藉由這三個工作區域的劃分，我們可以確認檔案所處的狀態。

Git 會把檔案標記為三種狀態：已修改（modified）、已預存（staged）及已提交（committed）。
* 己修改（modified）代表這檔案已被修改但尚未提交到本地端資料庫。
* 已預存（staged）代表這檔案將會被存到下次你提交的快照中。相對於已預存（staged），還有一種狀態是未追蹤（untracked），表示還沒進入預存區。
* 已提交（committed）代表這檔案己安全地存在你的本地端資料庫。

<br>

![](https://git-scm.com/book/en/v2/images/areas.png)

<br>

## 進入 Git 的世界
Git 實際操作流程主要是由幾個指令構成，能夠掌握這些指令，就可以了解 Git 基本的運作方式。
以下將依序由基本到進階，介紹把專案加入版本控制所需要用到的 Git 指令。

<br>

### git init：初始化倉儲（repository）

`$ git init`
* 在現有資料夾中，設定及初始化一個倉儲（repository）
* 在欲執行版控的資料夾底下執行 `git init` 指令，便會在該資料夾中建立 .git 資料夾
  
<br>
  
### rm -rf .git：砍掉倉儲（repository）
`$ rm -rf .git`  
* 以 `rm -rf .git` 指令，將 .git 資料夾強制刪除，版控便會終止



<br>

### git add：檔案加入版控追蹤

`$ git add [file]`

* 執行 `git add` 指令，將檔案加入 Git 版控追蹤（track）。
* 執行 `$ git add [file_name]` 指令，指定的檔案便會**加入**版本控制。狀態變成 staged。
* 工作目錄下的每個檔案有兩種狀態：  
Untracked -- 未追蹤，不加入版本控制  
Staged -- 已追蹤，加入版本控制

例如：  
資料夾中有 code_yes.js 和 code_no.js 兩個檔案。  
對 code_yes.js 下 `$ git add  code_yes.js` 指令後，code_yes.js 就會變成 staged 狀態，而 code_no.js 則是 untracked 狀態。 

```dos=
$ git add code_yes.js

$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   code_yes.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        code_no.js
```
  
---

`$ git add .`

* 執行 `git add .` 指令，所在資料夾中的所有檔案都會**加入**版本控制。狀態全部變成 staged。

```dos=
/**使用 git add . 將所在資料夾中的所有檔案都加入版控**/
$ git add .

/**git status**/
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   code_no.js
        new file:   code_yes.js
```
   
---

`$ git rm --cached <file_name>`

* 若想將 staged 狀態中的檔案，變回 Untracked 狀態，就執行 `git rm --cached <file_name>` 指令，便會**取消版本控制**。。

```dos=
/**使用 git rm --cached**/
$ git rm --cached code_yes.js

/**git status**/
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        code_no.js
        code_yes.js

nothing added to commit but untracked files present (use "git add" to track)
```

<br>

### .gitignore：不想加入版控的檔案就放進 .gitignore 裡吧

* `.gitignore` 不加入版控的檔案清單
* 放在 .gitignore 檔案中的檔名會自動被忽略，不會加入版本控制，也不會進入工作目錄（working directory）。

```dos=
/** git status 查看版控狀態**/
/** 不在版控狀態的檔案有 code_no.js 及 test.txt**/
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        code_no.js
        test.txt

nothing added to commit but untracked files present (use "git add" to track)


/**建立 .gitignore文件**/
$ touch .gitignore


/**執行 vim .gitignore**/
/**在 .gitignore 檔案中，把要忽略版控的檔案加入清單**/
$ vim .gitignore


/** git status 查看版控狀態**/
/** 不在版控狀態的檔案有 .gitignore 和 code_no.js**/
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        code_no.js

nothing added to commit but untracked files present (use "git add" to track)
```

<br>

### git commit：提交（commit）新建版本

`$ git commit -m "[descriptive message]"`

* 執行 `git commit` 把進入 staged 狀態的檔案提交（commit）上去成為新建版本
* `git commit -m <message>` 提交（commit）新版本，並輸入 commit message 作為版本註解
* 如果作業系統是 Windows，注意後面的字串一定要用雙引號，用單引號的話會出錯。
* `git commit -am <message>` 。這個指令是把 `git add .` 和 `git commit -m` 兩個指令合併，會把資料夾內所有已經加入版控的檔案 commit 並輸入 commit message。
:pushpin: ==**注意:** 如果有新檔案之前沒有 git add 過，則執行 git commit -am 的時候不會一起加入版控== 

```dos=
/**使用 git add 將 code_yes.js 加入版控**/

$ git add code_yes.js

$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   code_yes.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        code_no.js
        

/**使用 git commit -m 輸入 commit message，以建立新版本**/

$ git commit -m "first commit"

[master (root-commit) f6bcd0a] first commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 code_yes.js


/**commit 完成，status 只會看到 Untracked files**/

$ git status

On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        code_no.js

nothing added to commit but untracked files present (use "git add" to track)

```

<br>


### git commit --amend：修改 commit message
`$ git commit --amend`  修正已發佈的 commit message

<br>

### git reset：取消 commit

`$ git reset HEAD^ ` 
* HEAD 用來記錄最新 commit 的版本
* **^** 這個符號有「前一個」的意思
* HEAD^ 意指回到前一個 commit 的狀態
  
<br>
  
### [Git reset 的三種模式( soft mixed hard )比較](https://ithelp.ithome.com.tw/articles/10187303)
  
  
`$ git reset HEAD^ --mixed`
* 預設模式
* 移除 commit 及 staged
* 保留檔案變更
<br>

`$ git reset HEAD^ --soft`

* 僅移除 commit
* 保留檔案變更

刪除最新的 commit 版本，回到前一個版本，但是被修改的檔案仍然維持修改後的樣子，並不會把修改後的檔案復原回先前的狀態。

<br>

`$ git reset HEAD^ --hard` 

* 移除 commit 及 staged
* 移除檔案修改的內容
* 完全回到上一版

完全刪除最新的 commit 版本，回到前一個版本，被修改的檔案也變回更改前的狀態。


<br>

### git log：版本歷史紀錄

`$ git log`

* 執行 `git log` 可以查看過去 commit 各版本的歷史紀錄
* 執行 `git log --oneline` 以一行顯示簡短的歷史紀錄，版本編號只會顯示前 7 碼

```dos=
/** git log 查看歷史紀錄**/
$ git log

commit f6bcd0a1a29158fe654325e108d3da5b523975e4 (HEAD -> master)
Author: sylvia-H <***+sylvia-H@users.noreply.github.com>
Date:   Mon Jun 15 15:58:41 2020 +0800

    first commit
    
/** git log --oneline 顯示簡短的歷史紀錄，版本編號只會顯示前 7 碼**/
$ git log --oneline
f6bcd0a (HEAD -> master) first commit

```


  
<br>

<br>
  


## 什麼是 GiHub

GitHub 是透過 Git 進行版本控制的軟體原始碼代管服務平台，主要使用 Ruby on Rails 編寫而成。
GitHub 擁有簡潔美觀的 GUI 介面，在 GitHub 平台上的專案可以透過標準的 Git 命令進行存取和操作，且平台提供了一系列社群網路具有的功能，使得 GitHub 漸漸發展成全球最大工程師社交平台。

<br>

### GitHub Flow
[GitHub 工作流程](https://guides.github.com/introduction/flow/)

<br>

![](https://i.imgur.com/dk9UQte.png)

透過了解 GitHub Flow 我們可以掌握 Git 主要的運作機制。
上圖假設了已經擁有一個版本庫倉儲（repository）後，接下來將進入的一系列工作流程。

* Create a branch
* Add commits
* Open a Pull Request
* Discuss and review your code
* merge


<br>
<br>
  

## 關於 branch

### 為什麼我們需要 branch?
專案的開發過程常常並非是單線運作，開發新功能、修正 bug、功能測試...等等，常常會同時進行，開發者也可能並不是同一人。
branch 的重要性也在此時顯現出來。

這時候就會從主要的 branch 再開出一條新的 branch，新開的 branch 會複製主要的 branch 目前最新狀態。等新開的 branch 開發完成確認沒問題後，再把它合併（merge）回主要的 branch。既可以同時多線程進行專案，又能兼顧版本控制，維持主要版本的穩定性。

了解了 branch 在 Git 運作中的角色後，以下將依序由基本到進階，介紹與 branch 有關的 Git 指令。

<br>

### git branch：建立新分支（branch）

`$ git branch <branch-name>` 開一條新的 branch

`$ git branch -v` 檢視目前有幾條 branch

`$ git branch -d <branch-name>` 刪除 branch

`$ git checkout -b <branch-name>` 
開一條新的 branch 並切換過去（此指令相當於同時執行 `$ git branch <branch-name>` 和 `$ git checkout <branch-name>`）

`$ git branch -m [old_branch_name] [new_branch_name]`
修改分支（branch）名稱

<br>

### git status：查詢所在分支（branch）的版控狀態

`$ git status`

* 執行 `git status` 指令，可以查詢所在分支（branch）的版控狀態。

```dos=
$ git status
fatal: not a git repository (or any of the parent directories): .git


$ git init
Initialized empty Git repository in C:/Users/Sylvia/test/.git/


$ git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```


<br>


### git checkout：切換分支（branch）

`$ git checkout <branch-name>`  

切換到指定的分支（branch）並更新工作目錄（working directory）

<br>


```dos=
    
/** 目前有兩個版本**/

$ git log
commit 000e0fde1d5e979d6193f614e9cd60bf5641b60a (HEAD -> master)
Author: sylvia-H <***+sylvia-H@users.noreply.github.com>
Date:   Mon Jun 15 16:23:28 2020 +0800

    second commit

commit f6bcd0a1a29158fe654325e108d3da5b523975e4
Author: sylvia-H <***+sylvia-H@users.noreply.github.com>
Date:   Mon Jun 15 15:58:41 2020 +0800

    first commit

    
/** 用 git checkout 切換到某版本**/
$ git checkout f6bcd0a1a29158fe654325e108d3da5b523975e4
Note: switching to 'f6bcd0a1a29158fe654325e108d3da5b523975e4'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at f6bcd0a first commit

  
/** 此時用 git log 查詢，就會切換到該版本的歷史紀錄**/
$ git log
commit f6bcd0a1a29158fe654325e108d3da5b523975e4 (HEAD)
Author: sylvia-H <***+sylvia-H@users.noreply.github.com>
Date:   Mon Jun 15 15:58:41 2020 +0800

    first commit
```

<br>
  
### git checkout：回復到未修改前的狀態

* `$ git checkout <branch-name> <file-name>`  
若再加上檔名，則可以將所在分支（branch）的檔案（file）復原回上一個版本  
  
* `$ git checkout -- .`
把專案中所有還未 commit 的檔案全部都回復未修改前的狀態

<br>
 
### git checkout：把遠端分支（branch）抓下來，建立在 local 端
`$ git checkout [遠端的 branch 名稱]`
把遠端的 branch 抓下來，建立在 local 端

<br>

### git merge：合併分支（branch）

`$ git merge <branch-name>` 
在當前所在分支上合併另一個分支。（[branch-name] 輸入要被合併進來的分支名稱）

<br>


### git diff：檢視分支（branch）間的差異
`$ git diff [first-branch]...[second-branch]`
顯示兩個分支之間的內容差異

`$ git diff [commit1] [commit2]`
`$ git diff [<commit-id-1>] [<commit-id-2>]`
比對兩個版本間的差異，其中 commit-id-1 用較舊的版本，而 commit-id-2 則用較新的版本。
  
  
<br>
<br>
  
## 如何把 code 放上 GitHub

### 首先先在 GitHub 上建立一個倉儲（repository）

1. 按下 GitHub 網站右上方的 + 圖示，拉下選單，點選 New Repository
![](https://i.imgur.com/w7UAkox.png) 

2. 進入 Create a new repository 畫面。輸入欲新建的 repo 名稱和敘述後，點擊表單最下方的 Create repository 綠色按鈕。
![](https://i.imgur.com/qgWoezO.png)

3. 不知該如何 push repo 的話，接下來的畫面中有詳細的說明，可以按步驟操作。
![](https://i.imgur.com/PLlapoR.png)
  
  
如果已經有建好的 repo 等待上傳的話，就鍵入以下指令：
```bash=
$ git remote add origin <遠端 repo 位址>
$ git push -u origin master
```
 

<br>

### 如果想刪除倉儲（repository）
**想把已建好的 repo 刪除，可依循下列步驟：**  
1. 進入該 repo 的 setting
![](https://i.imgur.com/UeOsfmO.png)
2. 找到頁面最下方的 Danger Zone，點選 *Delete this repository*
![](https://i.imgur.com/9b5nYQP.png)
3. 進入確認畫面，於對話框中輸入 repo name，並按下確認按紐，即完成刪除流程。
![](https://i.imgur.com/GaUGcf7.png)



<br>

### git remote add：加入遠端倉儲（repository）

`$ git remote add [遠端 repo 簡稱] [url]`  加入遠端倉儲（repository）

`$ git remote -v`  查看遠端倉儲列表（包含 rul）  

可以用 `git reomte` 查詢目前有哪些遠端數據庫名稱，以github來說會取得預設的名稱 origin。因此通常要把本地端的 master branch 上傳到 GitHub 上的話，會用 `git push origin master`  
  
  
```bash=
$ git remote add origin <遠端 repo 位址>

$ git remote -v
origin  https://xxxxx.git (fetch)
origin  https://xxxxx.git (push)
```
 

<br>
  
### git push：將本地資料推送（push）至遠端倉儲（repository）
`$ git push <remote_name> <branch_name>`   
將當前分支上傳到遠端倉儲  

<br>

<br>
  
## 如何將遠端倉儲（repository）與本地端同步

### git pull：拉取（pull）曾提交上去的版本
`$ git pull [url] [branch_name]`  
從遠端倉儲（repository）拉取（pull）曾提交上去的版本，將遠端倉儲與本地端合併

<br>

### git clone：複製遠端倉儲（repository）的完整鏡像版本
`$ git clone [url]`
* Git 支援多種數據傳輸協定。 [url] 的部分，可以採用 https:// 協定、git:// 協定，或 user@server:path/to/repo.git 等使用 SSH 傳輸的協定。

<br>

<br>
<br>
<br>

## 參考資料
> * 胡立 Lidemy 鋰學院 [GIT101] Git 超新手入門 [課程影片連結](https://lidemy.com/courses/enrolled/379441)
> * [Git 官方文件（Documentation - Book）操作說明](https://git-scm.com/book/zh-tw/v2/Git-%E5%9F%BA%E7%A4%8E-%E5%8F%96%E5%BE%97%E4%B8%80%E5%80%8B-Git-%E5%80%89%E5%84%B2)
> * [Git 官方文件（Documentation - Reference（）指令列表](https://git-scm.com/docs)
> * [Git diff 常見用法](https://kknews.cc/zh-tw/code/qeemezb.html)
> * [GitHub git-cheat-sheet](https://github.github.com/training-kit/downloads/zh_CN/github-git-cheat-sheet/)
> * [Git 官方文件（1.1 開始 - 關於版本控制）](https://git-scm.com/book/zh-tw/v2/%E9%96%8B%E5%A7%8B-%E9%97%9C%E6%96%BC%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6#ch01-introduction)
> * [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)


