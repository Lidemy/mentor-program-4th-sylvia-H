## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

### \<fieldset> 和 \<legend>
語法：  
```htmlembedded=
<fieldset>
  <legend>Form Title</legend>
  ...
  <label>...</label>
  <input/>
  ...
</fieldset>
```

\<fieldset> 標籤可將許多與表單內容相關的元素打包成一組。這一整組的表單元素將能統一設定背景、邊框及各種 CSS 屬性。  

而 \<legend> 標籤經常與 \<fieldset> 標籤作為組合一起出現，\<legend> 標籤可以為一整組 fieldset 元素定義標題，並針對這個標題欄目設定字體大小、邊框等 CSS 屬性。

[W3C School 範例參考](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_fieldset_css)

<br>

### \<blockquote> 區塊引言元素
語法：`<blockquote cite="URL">...</blockquote>`
  
\<blockquote> 標籤所包裹的文字會透過縮排來從常規文字中分離出來，呈現一段獨立區塊的引言空間，引言的網址來源可透過 cite 屬性賦予。
  
\<blockquote> 標籤預設左右縮排 40px，上下縮排 1em，若要更改縮排可以用 `margin` 屬性進行修改。

<br>

### \<textarea>
語法：`<textarea>...</textarea>`  

\<textarea> 標籤用來定義多行文字輸入框，可視作是有卷軸功能且可輸入多行文字的 \<input>。  
可透過 cols 、 rows 、 height 和 width 等屬性來控制其尺寸大小。

<br>

> 參考資料：
> * [HTML \<fieldset> Tag](https://www.w3schools.com/tags/tag_fieldset.asp)  
> * [HTML \<legend> Tag](https://www.w3schools.com/tags/tag_legend.asp)  
> * [HTML \<blockquote> Tag](https://www.w3schools.com/tags/tag_blockquote.asp)  
> * [HTML \<textarea> Tag](https://www.w3schools.com/tags/tag_textarea.asp)  

<br>
<br>



## 請問什麼是盒模型（box modal）

![](https://mdn.mozillademos.org/files/16560/box-model-devtools.png)

<br>

盒模型的概念就是將 HTML 中的每個元素都視為是一個盒子，除了元素內容（content）之外，藉由調整 border（邊框）、padding（內距） 和 margin（外距）可以調整元素的整體寬高大小。

在預設狀況下（如上圖所示），border、padding 和 margin 會外加在 content 的寬高之上，一層層拓大整體寬高，此時設定的 width（寬）和 height（高）其實只是元素內容（content）的寬高，設計上往往需要衡量 border、padding 和 margin 另做計算。  

因此為了設計方便，`box-sizing` 屬性有不同的值可進行調整，讓計算元素寬高更簡便。其中以 `content-box` 和 `border-box` 為設定值大宗。

<br>

### content-box 預設值
`box-sizing: content-box;`  
--> 把 pading 和 border 往外加  
width（寬）和 height（高）只是 content 的寬高

<br>

### border-box 自動內縮調整
`box-sizing: border-box;`  
--> 把 pading 和 border 包進來  
width（寬）和 height（高）是整個 box 的寬高

<br>

> 圖片來源 / 參考資料：  
> https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model

<br>
<br>



## 請問 display: inline, block 跟 inline-block 的差別是什麼？

### block 區塊元素
  元素寬度預設向右佔滿一整行，下個元素會換行呈現，而不會並排。
  div、h1、p......都屬於 `display: block;`
  
### inline 行內元素
  元素可在同一行內呈現，無法調寬高和上下 margin 邊距，元素的寬高由它自身的內容撐開。  
  （margin 只能調左右兩邊。padding 雖可調上下，但不會動到元素位置）  
  a、span......都屬於 `display: inline;`

### inline-block 行內元素 
  元素可併排呈現（像 inline）；且可調寬高邊距等各種屬性（像 block）。
  button、input、select......都屬於 `display: inline-block;` 

<br>
<br>



## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

### static 預設值
`position: static;`  
沒有定位，按瀏覽器預設顯示流進行排版。

<br>

### relative 相對定位
`position: relative;`  
相對原本預設的定位點（即 static 的位置），再加上下左右偏移的距離來進行定位。  
因此基本上預設位置和 static 一樣，但可設定 top、right、bottom 和 left 屬性，設定之後會使其元素相對原本的位置進行調整。  
元素偏移之後不會改變其他元素的位置，只有自身的位置會變動。  

<br>

### absolute 絕對定位
`position: absolute`  
依據某個參考點（往父層找不是 static 的元素）做定位，若找不到，就以 body 來定位。

<br>

### fixed 固定定位
`position: fixed`  
相對於瀏覽器（viewport）做定位，固定在瀏覽器視窗的某個指定位置，不會隨捲軸移動。


