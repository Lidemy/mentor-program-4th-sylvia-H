## 什麼是 DOM？
DOM（Document Object Model，文件物件模型）是 HTML、XML 和 SVG 文件的程式介面。

DOM 提供了對文件的結構化表述，將文件解析為由節點和物件組成的樹狀結構集合，讓程式可以對文件進行存取並改變文件的架構、風格和內容。

就「JavaScript 與瀏覽器之間的溝通」這個層面來說，就是瀏覽器提供了 DOM 這個橋樑，讓 JavaScript 能夠改變 HTML、XML 和 SVG 文件的架構、風格和內容。

<br>

![](https://i.imgur.com/JNijhTz.jpg)

<br>

> 圖片來源： [https://zh.wikipedia.org/wiki/%E6%96%87%E6%A1%A3%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%9E%8B#/media/File:DOM-model.svg](https://zh.wikipedia.org/wiki/%E6%96%87%E6%A1%A3%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%9E%8B#/media/File:DOM-model.svg)

<br>
<br>
<br>


## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
使用者操作瀏覽器並觸發事件後，瀏覽器會主動收集和事件有關的資訊，並製造出事件物件（Event Object）。

我們可以透過呼叫已經註冊的**事件處理器**（也可以說是觸發事件後的 callback function - 事件處理函式），來取得或使用**事件物件（Event Object）**。

事件物件產生後的傳遞過程，可以依序拆解成三個階段的事件傳遞機制（Event Propagation）：

* 捕獲階段（Capture Phase）
* 目標階段（Target Phase）
* 冒泡階段（Bubbling Phase）

「捕獲」與「冒泡」便是其中的兩個階段。
瀏覽器由最上層的 DOM 節點往下捕捉事件物件的過程是在「捕獲階段」；事件物件所在的 DOM 節點，則是「目標階段」；捕捉後，向上傳遞的過程是在「冒泡階段」。因此有 **「先捕獲（capture）再冒泡（bubbling）」** 的說法。

<br>

![](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)

<br>

> 參考資料：
> * [網頁前端工程入門：Javascript 事件處理 - Event Object 事件物件 By 彭彭](https://www.youtube.com/watch?v=6MIZmmV00cg)

<br>
<br>
<br>

## 什麼是 event delegation，為什麼我們需要它？

事件代理 （event delegation）是運用事件冒泡的原理，在父元素中來為目標元素添加 EventListener，可節省資源，並有效處理動態新增元素時同時要增加多個 EventListener 的狀況。

<br>
<br>
<br>

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
* `event.preventDefault()` 阻止瀏覽器繼續執行預設行為。

* `event.stopPropagation()` 阻止當前事件繼續進行捕獲及冒泡（不會再把事件傳遞給「下一個節點」，只會觸發 target phase 事件）。

[範例](https://codepen.io/Cosmosheart/pen/qBaxgMK)

我在範例中用 `.outerBox` 大外框，包裹一個設置了超連結的 `.innerBox` 黑色小方塊。<br>
`.outerBox` 大外框上設置一個點擊時會觸發的 EventListener，使大外框被點擊時會改背景色為紅色。<br>
`.innerBox` 黑色小方塊上設置一個點擊時會觸發的 EventListener。<br>
小方塊的 EventListener 裡若只添加 `event.preventDefault()`，則點擊小方塊時會阻止預設的超連結執行，但因為繼續冒泡，所以大外框的背景色仍會被改成紅色。<br>
但若小方塊的 EventListener 改成 `event.stopPropagation()`，則點擊小方塊時超連結會執行，但大外框的背景色不變。


* 補充：連同一層級的 listener 也不想被觸發，可以使用 `event.stopImmediatePropagation()` 