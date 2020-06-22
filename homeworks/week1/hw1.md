## 交作業流程


1. **把遠端 repository clone 到本地端**
    * 進入 github.com/lidemy/mentor-program-4th-<GitHub_id>
    
    * 點擊 clone or download 複製網址
    
    ![](https://i.imgur.com/uBhjreV.png)
    <br>
    ![](https://i.imgur.com/hheGUps.png)
    <br>
    
    
    * 打開 Git-Bash (或 iTerm2)，把複製的網址加在 `$ git clone` 指令之後
    
        ```bash=
        $ git clone https://github.com/Lidemy/mentor-program-4th-<Your_id>.git
        ```

<br>

2. **新開一個 branch，命名為 week1**
    ```bash=
    $ git branch week1
    ```
    
3. **切換到新開的 branch**
    ```bash=
    $ git checkout week1
    ```
    
    <br>
    
    :bulb: 可以用 `$ git checkout -b week1`，合併 2 & 3 步驟，同時完成新開一個 branch 並切換過去的動作。
    
    <br>

4. **開啟專案資料夾開始寫作業**
    
    <br>

5. **寫完以後檢查:**
    * 進入專案資料夾 /examples/week*/README.md ，看完當週的自我檢討並修正錯誤。
    * 檔案內容格式排版遵守[中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines)
    * 完成當周所有作業後再進行繳交動作
    
    <br>

6. **輸入 `$ git status` 確認目前所在分支是在 week1，而不是 master。**
    
    <br>

7. **將所有作業檔案加入版控（Staged 狀態）**
    ```bash=
    $ git add
    ```
    
    <br>

8. **提交（Commit）一個新版本**
    ```bash=
    $ git commit -m "week1 finished"
    ```
    
    <br>


    :bulb: 檔案做過 add 動作之後，下一次提交新版本可以直接用 `$ git commit -am` ，合併 7 & 8 步驟

    
    <br>

9. **用 `$ git status` 確認目前專案沒有需要 commit 的檔案，專案回復 working directory 狀態。**
    
    <br>

10. **確認 commit 完成後，把本地端的 branch（week1）push 到遠端 GitHub 上的 repository（origin）**

    ```bash=
    $ git push origin week1
    ```
    
    <br>

11. **發起 PR（Pull Request）**
    * 前往 github 的 repo 點擊 Pull requests 項目。進入後應該會看到黃色提示條顯示 week1 的 branch 可以進行 merge，點擊綠色的 Compare & pull request 按鈕即可。
    但若沒有看到黃色提示條的話，可以自行手動發起PR (如下圖所示），按下綠色的 New pull request 按鈕。
    ![](https://i.imgur.com/3DiL0K1.png)

    * 進入 Compare Changes 頁面，選擇想要 merge 的 branch（week1）
    ![](https://i.imgur.com/ujeHkNs.png)

    * 輸入 PR 的標題，也可以在 write 區域寫下想留言的內容，檢查完下方列出改動 code 的內容後，最後點擊 Creat pull request，便完成 PR

<br>

12. **進入學習系統的 [作業列表](https://learning.lidemy.com/homeworks) 後，點擊 新增作業**  
**選定週次後，貼上 PR 連結，按下 送出。**
![](https://i.imgur.com/WcXH2Jz.png)

<br>

13. **等待助教批改完成，並 merge 到 master 之後，就可以在本地端把批改好的 master pull下來，將本地端和遠端的 master 同步**

    ```bash=
	$ git checkout master
	$ git pull origin master
    ```

<br>

14. **刪掉本地端的 week1 branch**

    ```bash=
	$ git branch -d week1
    ```
    
<br>

15. **完成作業繳交流程**



<br>
<br>
<br>

## 更新課綱

胡立老師的課綱隨時會進行更動，但我們自己在 GitHub 上的 repository 是從老師的課綱複製過來的，並不會跟著自動更新。若想要和老師的課綱同步可以做以下幾個步驟：

1. **確認本地端切換到 master branch**
    ```bash=
    $ git checkout master
    ```

2. **把老師的課綱 pull 下來**
    ```bash=
    $ git pull https://github.com/Lidemy/mentor-program-4th.git master
    ```

3. **若進入 vim 編輯器，鍵入 `:wq` 存檔跳出編輯器**

4. **把本地端已更新過的課綱，push 上遠端 GitHub 的 master**
    ```bash=
    $ git push origin master
    ```




