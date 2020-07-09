## hw1：好多星星
[LIOJ1021](https://oj.lidemy.com/problem/1021)  

```javascript=
function solve(input) {
  let str = '';
  for (let i = 0; i < input[0]; i += 1) {
    str += '*';
    console.log(str);
  }
}
```
  
**【解題邏輯】**  
* 設一個字串變數 `str`
* 跑 for 迴圈把 `'*'` 疊加進 `str` 變數。
  
<br>
  
**【觀摩學習】**  
看了 @cwc329 同學的 [hw1.js](https://github.com/Lidemy/mentor-program-4th-cwc329/blob/master/homeworks/week3/hw1.js) 發現我忘了還有內建函式 `repeat()` 可以代替字串疊加的方式來解這題。

<br>
<br>

## hw2：水仙花數

[LIOJ1025](https://oj.lidemy.com/problem/1025)  

```javascript=
function solve(input) {
  const tmp = input[0].split(' ');
  const N = Number(tmp[0]);
  const M = Number(tmp[1]);
  for (let i = N; i <= M; i += 1) {
    const arr = i.toString().split('');
    const pwr = arr.length;
    let sum = 0;
    for (let x = 0; x < pwr; x += 1) {
      sum += Number(arr[x]) ** pwr;
    }
    if (sum === i) {
      console.log(i);
    }
    sum = 0;
  }
}
```

**【解題邏輯】**  
* 以雙層 for 迴圈來跑：  
  **第一層**設變數 `i` 把範圍在 `N` ~ `M` 之間的所有數字跑一輪，同時把傳入的 `i` 值用字串拆解的方式存成陣列 `arr`。陣列 `arr` 的長度則設成常數 `pwr`，用來做為水仙花數的乘冪數。    
  **第二層**取出陣列 `arr` 裡的元素，逐一以常數 `pwr` 做為乘冪數並加總，其值為變數 `sum`。  
* `i` 的各個位數經過乘冪後加總的值 `sum` 若與 `i` 值相等，表示 `i` 為水仙花數。   
  
<br>
  
**【心得】**  
原先使用內建函式 Math.pow()，但 eslint 建議使用 `**`，因此學到了新寫法。

<br>
<br>
  
## hw3：判斷質數

[LIOJ1020](https://oj.lidemy.com/problem/1020)  

```javascript=
function solve(input) {
  const N = input[0];
  let factor = 0;

  for (let i = 1; i <= N; i += 1) {
    for (let x = 1; x < input[i]; x += 1) {
      if (input[i] % x === 0) {
        factor += 1;
      }
    }

    if (input[i] !== 1 && factor === 1) {
      console.log('Prime');
    } else {
      console.log('Composite');
    }
    factor = 0;
  }
}
```

**【解題邏輯】**  
* 設一個變數 `factor` 記錄因數數量。  
* 以雙層 for 迴圈來跑：  
  **第一層**把所有的輸入值跑一輪    
  **第二層**以 1 到輸入值之間的所有數字為除數，以輸入值為被除數，當餘數為 0 時，`factor` 數值加 1  
* 當輸入值不是 1，且因數數量 factor 等於 1 時，表示該輸入值為質數，輸出 `'Prime'` 字串。  
  反之，表示該輸入值為合數或是 1，因此輸出 `'Composite'` 字串。  
  
<br>
  
**【心得】**  
判斷式本想用簡潔的三元運算子寫法，結果 eslint 檢查時一直跳出 no-unused-expressions 錯誤，只好改為比較冗長的 if-else 寫法。看了這篇文章 [Disallow Unused Expressions (no-unused-expressions)](https://eslint.org/docs/rules/no-unused-expressions) 以後，還是不太懂。不太確定造成錯誤的原因是否是因為三元運算子，除了直接添加 disable 排除，找不出別的解決方式，直到寫完作業後參考其他同學的解法，才發現大家是直接把三元運算包在 `Console.log()` 裡，一下子豁然開朗。
  
<br>
  
**【觀摩學習】**  
謝謝 @WooooHuan 的[心得](https://github.com/Lidemy/mentor-program-4th-WooooHuan/blob/master/homeworks/week3/hw6.md)，學到可以用[根式排除法](https://www.youtube.com/watch?v=4vbcC4TcMGc)來簡化。

<br>
<br>
  
## hw4：判斷迴文

[LIOJ1030](https://oj.lidemy.com/problem/1030)  

```javascript=
function solve(input) {
  const str = input[0];
  let res = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    res += str[i];
  }

  if (res === str) {
    console.log('True');
  } else {
    console.log('False');
  }
}
```

**【解題邏輯】**  
* 將傳入的字串設為變數 `str`  
* 設一個字串變數 `res`  
* 跑反向的 for 迴圈，將傳入的字串 `str` 由後至前逐一疊加進字串變數 `res`  
* 若 `str` 等於 `res` 表示該字串符合迴文特性，回傳字串 'True'；反之，回傳字串 'False'
  
<br>
  
**【心得】**  
同 hw3 的心得，學到可以用 `Console.log()` 包住三元運算，讓 code 更簡潔。
  
<br>
  
**【觀摩學習】**  
看了 @awuuu0716 同學的[作業](https://github.com/Lidemy/mentor-program-4th-awuuu0716/blob/master/homeworks/week3/hw4.js) 學習到可以用 `.reverse().join('')` 代替字串疊加。

<br>
<br>

## hw5：聯誼順序比大小

[LIOJ1004](https://oj.lidemy.com/problem/1004)  

```javascript=
function judge(A, B, K) {
  if (K === 1) {
    if (A > B) {
      console.log('A');
    } else {
      console.log('B');
    }
  }

  if (K === -1) {
    if (A > B) {
      console.log('B');
    } else {
      console.log('A');
    }
  }
}

function solve(input) {
  const M = Number(input[0]);

  for (let i = 1; i <= M; i += 1) {
    const arr = input[i].split(' ');

    const A = arr[0];
    const B = arr[1];
    const K = Number(arr[2]);

    if (A === B) {
      console.log('DRAW');
    } else if (Number(A.length) * K > Number(B.length) * K) {
      console.log('A');
    } else if (Number(A.length) * K < Number(B.length) * K) {
      console.log('B');
    } else if (Number(A.length) * K === Number(B.length) * K) {
      judge(A, B, K);
    }
  }
}
```

**【解題邏輯】**  
* 將輸入值設為常數 `A`、`B` 和 `K`。  
  `A` 和 `B` 是要進行比大小的兩個數字。  
  `K` 若為 `1` 表示要比大，若為 `-1` 表示要比小。  
* 寫一個函式 `judge( )` 用來**判斷位數相等的兩數的大小**。
* 主函式 `solve( )` 則**以位數多寡判斷兩數的大小**。  
  將 `A`、`B` 兩數的位數各自與 `K` 相乘，就所得數值來判斷比大比小時各是哪方獲勝。  
  `A` 的位數與 `K` 相乘，不論比大比小，只要相乘數**大於** `B` 的位數與 `K` 的相乘數，表示 `A` 勝出。  
  `B` 的位數與 `K` 相乘，不論比大比小，只要相乘數**大於** `A` 的位數與 `K` 的相乘數，表示 `B` 勝出。  
* 當 `A` 的位數與 `K` 的相乘數**等於** `B` 的位數與 `K` 的相乘數，代表兩數位數相等，便進入函式 `judge()` 進行**字串比大小**的判斷。  
  
<br>
  
**【心得】**  
解這題時忽略了最大整數的限制，被 WA 了幾回之後才注意到 input 可能超出 Number.MAX_SAFE_INTEGER，最後以字串比大小的方式解題。
  
<br>
  
**【觀摩學習】**  
解題後看了 @awuuu0716 同學的[作業](https://github.com/Lidemy/mentor-program-4th-awuuu0716/blob/master/homeworks/week3/hw5.js)和 @ahwei777 同學的[作業](https://github.com/Lidemy/mentor-program-4th-ahwei777/blob/master/homeworks/week3/hw6.md)，才知道還可以用新語法 `BigInt()` 來處理最大整數的問題。


<br>
<br>


## 超級挑戰題 - LIOJ1052 - 貪婪的小偷 Part2

[LIOJ1052](https://oj.lidemy.com/problem/1052)  

```javascript=
function solve(input) {
  const tmp = input[0].split(' ');
  const items = Number(tmp[0]);
  const bagSize = Number(tmp[1]);
  const weight = [];
  const value = [];

  for (let i = 1; i <= items; i += 1) {
    const tmpArray = input[i].split(' ');
    weight.push(Number(tmpArray[0]));
    value.push(Number(tmpArray[1]));
  }

  const bagMatrix = [];

  for (let y = 0; y <= bagSize; y += 1) {
    bagMatrix[y] = [];
    for (let x = 0; x < items; x += 1) {
      if (y === 0) {
        bagMatrix[y][x] = 0;
      }
      if (y < weight[x]) {
        bagMatrix[y][x] = bagMatrix[y][x - 1] || 0;
      }
      if (y >= weight[x]) {
        const predictValue = (bagMatrix[y - weight[x]][x - 1] || 0) + value[x];
        const preValue = (bagMatrix[y][x - 1] || 0);
        bagMatrix[y][x] = Math.max(predictValue, preValue);
      }
    }
  }

  const sumValue = [];
  for (let i = 0; i <= bagSize; i += 1) {
    sumValue.push(bagMatrix[i][items - 1]);
  }
  const maxValue = Math.max.apply(null, sumValue);
  console.log(maxValue);
}
```


**【解題邏輯】**  
* 將輸入值設為常數 `items`（物品數量）和 `bagSize`（背包承重）。
* 使用 for 迴圈將輸入值分別設為陣列 `weight`（物品重量）和陣列 `value`（物品價值）。
* 利用以上兩個常數、兩個陣列跑雙重 for 迴圈，展開一組多維陣列 `bagMatrix`。
* 多維陣列 `bagMatrix` 的行數（Column，可視為陣列 x 軸）等於 `items`（物品數量），列數（Row，可視為陣列 y 軸）等於 `bagSize`（背包承重）。
* 代入值的方式是先判斷 `bagSize`（背包承重）是否能容納  `weight`（物品重量）。 
  * 當 y 軸數值為 0 時，無法裝任何東西，因此陣列元素值亦為 0。
  * 當 y 軸數值小於 `weight[x]`（各項物品重量）時，無法容納該項物品，故陣列元素值應維持 `bagMatrix[y][x - 1] ` 前一個 x 軸的元素值，或是為 0。
  * 當 y 軸數值等於或大於 `weight[x]`（各項物品重量）時，就要判斷是否要裝入該項物品，若 `bagSize`（背包承重）還能容納新物品就可以加入新物品的重量，若已經裝入前一項物品導致裝入新物品會超重的話，就無法裝入新物品。判斷是否加入新物品的方式是，先將當前 y 軸值減掉 `weight[x]`（該項物品重量），表示還沒裝進新物品前的背包容量，以此值找到相對應的 y 軸，把前一項物品（`weight[x-1]`）與新的 y 軸相對應的陣列元素值加上 `weight[x]`（新物品重量），所得出的預估值設為常數 `predictValue`；再找到當前 y 軸值與前一項物品相對應的陣列元素值 `bagMatrix[y][x - 1]`，把此值設為常數 `preValue`。接著比較常數 `predictValue` 和常數 `preValue` 兩者孰大，取較大的值代入目前的陣列元素值 `bagMatrix[y][x]`。
  * 完成多維陣列 `bagMatrix`
* 取出多維陣列 `bagMatrix` 的最後一行，設成陣列 `sumValue`
* 以 `Math.max.apply(null, arr)` 方法取出陣列 `sumValue` 中的最大值，即為背包可裝入物品價值的最大值。
  
<br>
  
**【心得】**  
採用「動態規劃」（Dynamic programming）分階段求最佳解的解題方式大大打開了我的視野，尤其是參考資料中把輸入值展開成多維陣列的求解法真的非常精采，雖然是藉由慢慢歸納資料才解出這一題，讓我有點心虛，但在釐清解題思維的過程裡獲益良多，非常開心。
  
<br>
  
**【參考資料】**  
* [背包問題（Knapsack Problem）](https://openhome.cc/Gossip/AlgorithmGossip/KnapsackProblem.htm)
* [Day24-動態規劃-0/1背包問題](https://ithelp.ithome.com.tw/articles/10226021)  
* [js取陣列最大值，最小值的方式](https://www.itread01.com/content/1543920722.html)


