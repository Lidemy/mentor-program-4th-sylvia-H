## 請解釋後端與前端的差異。

### 前端 / 後端定義
網路世界的運行可以粗略分為 前端 與 後端。
* 前端：前端主要是指使用者主機（電腦或手機）、DNS Server 和 Host Server 之間的 request & response 運作關係
* 後端：後端則主要是指 Host Server 和資料庫（Database）之間的 request & response 運作關係
* 主要來說，前端負責的是畫面的顯示；後端負責與資料庫之間的溝通。

### 細說前端
* 前端的完整運作是指使用者經由操作電腦或手機應用程式介面，透過作業系統（Operation System，OS）編譯指令後，向底層硬體（例如：網路卡）發出命令，發出 request 路由請求的指令封包給 DNS Server，由 DNS 將域名轉換成 IP 位置找到對應的 Host Server 後，把 Host Server 的 ip 位址 response 給使用者主機，使用者主機再用取得的 ip 位址找到 Host Server 並發出 request 指令封包。
* 或是反過來，由 Host Server 回傳 response 指令封包給使用者主機，使用者主機硬體透過作業系統編譯指令後，透過電腦或手機應用程式介面渲染出畫面和訊息。
* 以上兩者構成前端主要的運作循環。


<br>
<br>
<br>

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 按下 Enter 之後，瀏覽器檢查 DNS cache 有沒有 google.com
    * 有的話，便取得 google.com 的 IP 地址
    * 沒有的話，透過網路卡將 google.com 的路由請求傳送到 DNS server 取得 IP 地址
4. 經由取得的 IP 位址向 Google server 發出 request，要求搜尋關鍵字「JavaScript」
5. Google server 向資料庫發出 request，要求查詢資料庫中含有「JavaScript」關鍵字的資料
6. 資料庫將撈出來的資料打包回傳 response 給使用者主機
7. 使用者主機網卡接收到傳來的 response 後，透過 OS 編譯，於瀏覽器上把資料依照設計的框架渲染成畫面
8. 看到搜尋結果

<br>
<br>
<br>

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
 
### **ps**（Process Status）：列出系統中當前運行的所有程序
* 提供的查看結果並非動態連續，而是顯示「當前」時點的運作狀態。想要觀察動態的變化，可以使用 `top` 指令
* `ps au`       顯示較詳細的資訊
* `ps aux`      列出系統中（包含其他使用者）當前運行的所有程序 
* `ps aux | grep ssh`  列出所有正在執行 ssh 的程序

<br>

### **chmod**：改變檔案或資料夾權限

```bash=
$ chmod 644 test.sh     # test.sh 檔案權限 644 =>『-rw-r--r--』
```

Linux 檔案的基本權限有 9 種，分別是 owner（擁有者）/ group（群組）/ others（其他使用者）三種身分，每一個身分又各有 read（讀）/ write（寫）/ execute（執行）權限。
  
因此檔案的權限字元會以 r、w、x 分別代表 read / write / execute，以九個字元組成的字串來代表檔案的權限，例如『-rwxrwxrwx』，權限字元以三個為一組，依序代表 owner / group / others 三種身分。
  
各個權限又有不同的權限分數，r 是 4 分，w 是 2 分，x 是 1 分，各身分的權限分數是累加的，故每個身分最高的權限分數是 7 分。
  
所以當我們設定權限變更時，若要將檔案的所有權限都設定啟用，那麼權限分數就以 777 來表示『-rwxrwxrwx』。若檔案擁有者權限全開、群組不能編輯檔案、其他使用者只能讀取，那麼權限分數以 [4+2+1][4+0+1][4+0+0]=754 來表示『-rwxr-xr--』。

<br>

### **sudo**：暫時取得權限
系統管理員分配給一般用戶合理的權限，讓他們執行一些只有系統管理員或其他特定帳號才能完成的任務或者編輯系統設定檔。這個指令的所有者是 root，配置 sudo 必須通過編輯 /etc/sudoers 文件，而且只有超級用戶才可以修改它。sudo 可以看做是 root 的分身，用以減少 root 的登錄次數和管理時間，讓系統管理員集中地管理用戶的使用權限和使用的主機，提高系統安全性。
  
這個指令的使用時間也有限制，當用戶執行 sudo 並且輸入密碼後，用戶獲得了一張預設為期 5 分鐘的「入場券」(預設值可以在編譯時更改)。超過時間以後，用戶必須重新輸入密碼。
 
<br>

> 參考資料：
> * [<鳥哥的私房菜：第十六章、程序管理與 SELinux 初探>](http://linux.vbird.org/linux_basic/0440processcontrol.php#lsof)
> * [[Linux] chmod 檔案權限大統整](https://shian420.pixnet.net/blog/post/344938711-%5Blinux%5D-chmod-%E6%AA%94%E6%A1%88%E6%AC%8A%E9%99%90%E5%A4%A7%E7%B5%B1%E6%95%B4!) 
> * [sudo 指令使用說明](http://note.drx.tw/2008/01/linuxsudo.html)
