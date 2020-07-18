## 請以自己的話解釋 API 是什麼

API 是「**應用程式編譯介面（Application Programming Interface）**」的縮寫。  

<br>

API 的重點就在「**介面（Interface）**」，既然是做為一種「介面」，表示是一種連接的管道和媒介，可以說是為了取得某個服務、元件或應用程式的功能與資料所定義的「溝通模式」。API 是屬於**軟體領域的介面**，而像 USB、HDMI、RJ45...等等就是**硬體領域的介面**，規範與定義這些介面都是為了溝通順利並達到規模化的生產與周邊服務的延伸運用。  

<br>

如果覺得用定義的方式來說明「介面」太抽象的話，可以用更生活化的例子來理解。  

**人與機器**：例如咖啡機上面的按鈕與控制面板、電視機的遙控器等，都是為了讓使用者能夠控制咖啡機和電視機所設計出來的「人機互動介面」。  
<br>

**人與軟體**：除了與機器的互動之外，我們也與軟體互動。例如平常使用的 Google 搜尋引擎的搜尋框、Google Maps 的地址輸入框都是為了方便使用 Google 系統而設計的「使用者介面（User Interface）」。  

<br>

**軟體與軟體**：由以上兩個例子可以理解「介面」是作為兩個主體的溝通管道，除了可以溝通人與機器、人與軟體系統之外，軟體與軟體間溝通最好的例子就是 API。
例如口罩地圖的網站與 Google Maps 間的溝通就是軟體與軟體間溝通的例子。口罩地圖的網站要取得 Google Maps 的資料庫資訊以及地圖顯示功能，就必須要使用 Google Maps 的 API 才能完成。

<br>

API 又分為作業系統級 API 與非作業系統級 API 等許多種類，而以網頁前端開發領域來說，最主要使用到的是透過 HTTP 協定發出請求（request）與接受回應（response）來對資料進行 CRUD 操作的 **Web API**。

<br>

> **參考資料**
> * [API是什麼？認識 Web API、HTTP 和 JSON 資料交換格式](https://tw.alphacamp.co/blog/api-introduction-understand-web-api-http-json)
> * [API & SDK Design #2, 設計專屬的 SDK](https://columns.chicken-house.net/2016/10/23/microservice4/)


<br>


## 請找出三個課程沒教的 HTTP status code 並簡單介紹

HTTP 狀態碼回應分為五種：
* 資訊回應 (Informational responses, 100–199)
* 成功回應 (Successful responses, 200–299)
* 重定向 (Redirects, 300–399)
* 用戶端錯誤 (Client errors, 400–499)
* 伺服器端錯誤 (Server errors, 500–599)

<br>

| Status Code  | Tutorials               |
| ------------ |:----------------------- |
|      401     |  未授權（Unauthorized）。表示當前請求需要用戶驗證。有點類似 403，但 403 表示用戶無訪問權限或是伺服器不想提供任何反饋訊息來描述拒絕的原因，而 401 只是需要授權才能給予回應。  |
|      451     |  因法律原因不可使用（Unavailable For Legal Reasons）。表示用戶端請求的資源經政府審查是違法的。該網頁可能對於國家安全產生危險，或是該網頁可能違反著作權、隱私權、褻瀆神明或其他法律或法院命令。  |
|      511     |  客戶端需要進行身分驗證才能獲得網路存取權限，旨在限制用戶群存取特定網路。（例如連接WiFi熱點時要求你必須接受一些協議或者必須登入後才能使用）  |

<br>

> **參考資料**
> * [HTTP 狀態碼 | MDN](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status)
> * [HTTP報錯401和403詳解及解決辦法](https://www.itread01.com/content/1547791593.html)
> * [HTTP 451 | 維基百科](https://zh.wikipedia.org/wiki/HTTP_451)
> * [Http_4個新的http狀態碼：428、429、431、511](https://www.itread01.com/content/1550073247.html)

<br>


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

### Root URL
`https://api.lidemy-restaurant.com`

<br>

### Requests
|      action      | Method |   path   |   parameters   |          example          |      explanation            
|---------------|:--------|:---------|:----------|:----------------|:----------------|
| 回傳所有餐廳資料 | GET    | /data     | _limit: 限制回傳資料數量 | /data?_limit=100 | 回傳 100 家餐廳資料
| 回傳單一餐廳資料 | GET    | /data/:city-code/:id | none       | /data/TPE/105      | 回傳一筆位於台北市 id 編號 105 的餐廳資料
| 新增餐廳        | POST   | /data/:city-code     | name: 餐廳名  | /data/TPE?"Din Tai Fung"  | 新增一筆位於台北市的餐廳資料，餐廳名稱為 Din Tai Fung
| 刪除餐廳        | DELETE | /data/:city-code/:id | none       |  /data/TPE/105       | 刪除一筆位於台北市 id 編號 105 的餐廳資料
| 更改餐廳    | PATCH  | /data/:city-code/:id | name: 餐廳名 | /data/TPE/105?"Din-Tai-Fung"  | 將一筆位於台北市 id 編號 105 的餐廳，更改餐廳名稱為 Din-Tai-Fung

<br>

> **參考資料**
> * [Lidemy/mentor-program-4th/homeworks/week4/README.md](https://github.com/Lidemy/mentor-program-4th/tree/master/homeworks/week4)
> * [Twitch API v5](https://dev.twitch.tv/docs/v5)
