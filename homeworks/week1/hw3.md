## 教你朋友 CLI

### 什麼是 command line？
  
command line 就是通常被稱為**命令行**（Command Line）或**命令行介面**（Command Line Interface，CLI）的應用程式，主要以「文字」來進行人機溝通，與之相對的是**圖形化介面**（Graphical User Interface，GUI），以「圖形介面」來進行人機溝通。  

<br>

* 用「文字」來溝通 --> Command Line Interface (CLI)
* 用「圖形介面」來溝通 --> Graphical User Interface (GUI)

<br>

例如我們所熟悉的 Windows 或 Mac 系統，或是 Chrome, FireFox...等網頁瀏覽器，都是常見的 GUI 圖形操作介面，可以用滑鼠點擊或拖曳圖形按鈕和對話框來對電腦下指令。但有些時候，某些電腦主機並沒有圖形化介面可供操作，此時我們就需要透過鍵盤以文字來對電腦下指令，這也是 CLI 至今依然具有重要性的原因。

<br>

> **常見的 Command Line Interface (CLI)**  
> **Mac** : Terminal.app 終端機  
> **Windows** : cmd.exe 命令提示字元


<br>
<br>


## 環境設置 - 安裝 Command Line Tool
*  Windows（git-bash）  
安裝 Git 的時候，會一併安裝 git-bash  
在 Windows 上面操作 command line 指令時可以使用 git-bash。  
Git 官網：https://git-scm.com/

* Windows（Cmder）  
或是安裝 [Cmder](http://cmder.net/)  
可參考保哥的文章: [介紹好用工具：Cmder ( 具有 Linux 溫度的 Windows 命令提示字元工具 )](https://blog.miniasp.com/post/2015/09/27/Useful-tool-Cmder)  

* Mac (iTerm2)  
在 Mac 上面可以直接使用 Terminal.app，或是安裝 iTerm2  
可參考(1): [[心得] iTerm2 + zsh，打造更好的工作環境](http://huli.logdown.com/posts/402147-iterm2-zsh-better-environment)  
可參考(2): [超簡單！十分鐘打造漂亮又好用的 zsh command line 環境](https://medium.com/statementdog-engineering/prettify-your-zsh-command-line-prompt-3ca2acc967f)  

<br>
<br>
 
## Command Line 指令介紹

:bulb: [Unix 與 MS-DOS 指令對照表](https://github.com/shyangs/blog/issues/8)
 
<br>

### pwd
* **`pwd`** (print working directory) 印出所在位置
 
<br>
  
### ls
* **`ls`** (list Segment) 列出目前所在資料夾的檔案清單
* **`ls -a`** 列出目前所在資料夾的隱藏檔案列表
* **`ls -l`** 使用長格式 (long format) 列出目前所在資料夾的 ***詳細*** 檔案列表
* **`ls -al`** 列出目前所在資料夾的 ***詳細*** 檔案清單 (包含隱藏檔案)。列出的項目除了檔名，還有權限、擁有者、檔案大小、最後修改日期時間
 
<br>
  
### cd
* **`cd`** (change directory) 切換資料夾
* **`cd ..`** 回到上一層資料夾位置
* **`cd ~`** 預設 /Users/XXX 資料夾位置
* **`cd /`** 根目錄


:bulb: 輸入資料夾名稱時，可善用tab鍵，只要打出開頭幾個字母，就會自動補齊完整資料夾名稱。

  
<br>
 
### man
:pushpin: 這個指令 windows 不支援  
:pushpin: 可改用 `help` 代替部分功能。或是在指令後方加`--help` 可以得到更詳盡的功能說明。  
* **`man`** (manual) 指令使用手冊
* **`clear`** (clear) 畫面清除
* **`q`** (quit) 離開
  
 
<br>
  
### touch
* **`touch + 檔名`**
檔案不存在時: 建立新檔案
檔案存在時: 更改檔案時間為目前時間
 
<br>
  
### rm
* **`rm`** (remove) 刪除檔案
* **`rmdir`** (remove directory) 刪除資料夾
* **`rm -r`** & **`rm -R`** (remove root) 刪除資料夾(及底下所有檔案)
* **`rm -f`** (remove forcely) 強制移除  
:pushpin: 小心使用
 
<br>
  
### mkdir
* **`mkdir`** (make directory) 建立資料夾
 
<br>

### mv
* **`mv`** (move) 移動檔案或是改名
* **`mv 檔名 已存在的資料夾`** 移動檔案至某資料夾
* **`mv 檔名 ..`** 移動檔案至上一層資料夾
* **`mv 檔名 不存在的檔名`** 更改檔案名稱
 
<br>
  
### cp
* **`cp`** (copy) 複製檔案
* **`cp 檔名 不存在的檔名`** 複製檔案成為新的檔案
* **`cp -r 資料夾 不存在的資料夾`** 複製檔案成為新的資料夾
 
<br>
  
### cat
* **`cat`** (catenate) 連接檔案
* **`cat 檔名`** 將檔案內容列出
  
<br>
  
### date
* **`date`** 印出現在時間
  
<br>
 
### top
* **`top`** (Table of Processes) 印出所有的 process
* **`q`** (quit) 離開
 
<br>
 
### less
* **`less 檔名`** 分頁式印出檔案內容 (可用上下鍵分頁瀏覽檔案)
* **`q`** (quit) 離開
 
<br>
 
### grep
* **`grep`** 抓取特定關鍵字
* **`grep 關鍵字 檔名`** 抓取某檔案中含有關鍵字的段落
 
<br>
  
### echo
* **`echo 字串`** 印出字串

<br>
  
### wget
* **`wget`** 下載檔案
* **`wget 網址`** 下載(該網址的)檔案
 
<br>
  
### curl
* **`curl`** 送出 request，測試api
* **`curl [api]`** 送出 request，show 出 response
* **`curl -I [api]`** 擷取header資訊
  
 
<br>

### pipe
* **`|`** 串接指令。把左邊指令的輸出，變成右邊指令的輸入
 
<br>
 
### redirection
* **`>`** 重新導向 input output
* **`>>`** 重新導向 input output
* **`ls -al > list_result`** 將詳細列表輸出到檔名為 list_result的檔案中，並覆蓋掉原先的內容
* **`ls -al >> list_result`** 將詳細列表輸出到檔名為 list_result的檔案中，加在原先的內容後面

<br>
  
## 編輯器：Vim
* **`vim`** 或 **`vi`** 進入文字編輯器
* **`vim 檔名`** 編輯某檔案
* **`i`** (insert) 編輯模式
* **按esc鍵** 跳出編輯模式，回到一般指令模式，無法插入文字
* **`:q`** (quit) 離開
* **`:wq`** (write quit) 寫完後，存檔離開
  
<br>
  
  > [鳥哥的 Linux 私房菜 - 第九章、vim 程式編輯器](http://linux.vbird.org/linux_basic/0310vi.php)  
  > vi 共分為三種模式，分別是『一般指令模式』、『編輯模式』與『指令列命令模式』。：
  > 
  > * 一般指令模式（預設模式）（command mode） 
  > 可以使用『上下左右』按鍵來移動游標、可以使用『刪除字元』或『刪除整列』來處理檔案內容，以及複製、貼上等等的動作，但是無法編輯（insert）文件內容 
  > 
  > * 編輯模式（insert mode）
  > 按下 **『i, I, o, O, a, A, r, R』** 等任何一個字母之後，會進入編輯模式。
  > 按下這些按鍵時，在畫面的左下方會出現『 INSERT 或 REPLACE 』的字樣，此時才可以進行編輯。
  > 如果要回到一般指令模式時， 則必須要按下『Esc』這個按鍵即可退出編輯模式。
  > 
  > * 指令列命令模式 (command-line mode)
  > 在一般指令模式當中，輸入 **『 : / ? 』** 三個中的任何一個按鈕，就可以將游標移動到最底下那一列。
  > 在這個模式當中，可以提供你『搜尋資料』的動作
  > 讀取、存檔、大量取代字元、離開 vi 、顯示行號等等的動作，是在此模式中達成的！
  
<br>
  
## h0W 哥的問題

> h0w 哥：「我想用 command line 建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案。」

1. 打開終端機程式 (git-bash / Terminal.app / iTerm2) 
  
2. 確認目前所在位置  
    ```bash=
    $ pwd
    ```
  
4. 用 `cd` 指令移動到想要建立新資料夾的位置 
  
5. 建立一個叫做 wifi 的資料夾  
    ```bash=
    $ mkdir wifi
    ```
  
6. 進入 wifi 資料夾  
    ```bash=
    $ cd wifi
    ```
  
7. 在 wifi 資料夾中建立一個叫 afu.js 的檔案  
    ```bash=
    $ touch afu.js
    ```

