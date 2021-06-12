## 什麼是 Ajax？
**AJAX（Asynchronous JavaScript and XML）**，是一種使用 JavaScript 讓瀏覽器端（Client）對伺服器端（Server）進行非同步資料交換的方法和技術，使用 Ajax 處理的資料格式除了 XML 之外，還包括 JSON 等等。<br>

**非同步（Asynchronous）**的重點在於瀏覽器端（Client）對伺服器端（Server）送出請求（request）後，不必像傳統的同步請求（Synchronous request）一樣，必須要收到伺服器端的回應（response）之後才繼續進行下一步動作。送出非同步請求後，等待回應（response）的期間可以持續進行其他的工作流程，待 responese 傳回之後再融合進當下頁面或繼續進行接下來的作業。<br>

除了使用原生的 XMLHttpRequest 物件來實現 Ajax 之外，jQuery 的 $.ajax() 方法、HTML5 的 Fetch API 等等，都可以實現 Ajax 的應用。

<br>
<br>

## 用 Ajax 與我們用表單送出資料的差別在哪？
Ajax 技術的**核心優點在於取得資料的同時不必重新渲染整個頁面**，減少重複傳送沒有更動的資料，使網頁能更迅捷回應使用者動作，且大幅減少伺服器端的工作量。

<br>
<br>

## JSONP 是什麼？
JSONP（JSON with Padding）。
有些東西是不受同源政策限制的，例如說`<script>`這個 Tag，例如我們常常引用的 CDN 或是 Google Analytics 之類的第三方套件，網址都是其他 Domain 的，但是卻能正常載入。<br>

JSONP 就是利用 `<img>` 、 `<script>` 不受同源政策管理的特性來達成跨來源請求並傳送資料。
JSONP 的缺點就是參數永遠都只能用附加在網址上的方式（GET）帶過去，沒辦法用 POST。

<br>
<br>

## 要如何存取跨網域的 API？
由於瀏覽器受同源政策（Same-origin policy）管理，因此想要存取跨網域的 API，達成跨來源資源共享（CORS，Cross-Origin Resource Sharing）的話，Server 必須在 Response 的 Header 裡面加上 `Access-Control-Allow-Origin: *`，才有辦法開啟跨來源 HTTP 請求，允許跨網域存取資源。

<br>
<br>

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
同源政策（Same-origin policy）是瀏覽器加上的枷鎖，若透過 Node.js 即無此限制。<br>

透過瀏覽器來渲染，就會帶上瀏覽器附加的屬性，例如瀏覽器為了安全性考量，要求跨網域存取資源時須遵守 CORS 規範（Cross-Origin Resource Sharing (CORS)，跨來源資源共用）。

<br>
<br>

* 用 node.js 呼叫 API
    ```md
    node.js ----發出 request----> **Server** ----回應 response----> node.js
    ```
<br>
<br>

* 透過瀏覽器發出 request
    ```md
    瀏覽器上的 JS ----> **瀏覽器** ----發出 request----> **Server** ----回應 response----> **瀏覽器** render 畫面 ----> 瀏覽器上的 JS
    ```
