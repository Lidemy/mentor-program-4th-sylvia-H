``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 建立一個函式命名為 isValid，傳進一個參數 arr
2. 此範例中，陣列 [3, 5, 8, 13, 22, 35] 即是參數 arr，陣列長度 6
3. **進入第一個 for 迴圈**
* 此時 i = 0，且 i < 6  
i = 0 代入判斷式 arr[i] <= 0，提取 arr 陣列第一個元素得出 3 <= 0 為假（false），回第 2 行
* i + 1  
i = 1 代入判斷式 arr[i] <= 0，提取 arr 陣列第二個元素得出 5 <= 0 為假（false），回第 2 行
* i + 1  
i = 2 代入判斷式 arr[i] <= 0，提取 arr 陣列第三個元素得出 8 <= 0 為假（false），回第 2 行
* i + 1  
i = 3 代入判斷式 arr[i] <= 0，提取 arr 陣列第四個元素得出 13 <= 0 為假（false），回第 2 行
* i + 1  
i = 4 代入判斷式 arr[i] <= 0，提取 arr 陣列第五個元素得出 22 <= 0 為假（false），回第 2 行
* i + 1  
i = 5 代入判斷式 arr[i] <= 0，提取 arr 陣列第六個元素得出 35 <= 0 為假（false），回第 2 行
* i + 1  
i = 6 大於終止值，**結束第一個迴圈** <br>
4. **進入第二個 for 迴圈**
* 此時 i = 2，且 i < 6  
i = 2 代入判斷式 arr[i] !== arr[i-1] + arr[i-2]，提取 arr 陣列第三個元素得出 8 !== 5 + 3 為假（false），回第 5 行
* i + 1  
i = 3 代入判斷式 arr[i] !== arr[i-1] + arr[i-2]，提取 arr 陣列第三個元素得出 13 !== 8 + 5 為假（false），回第 5 行
* i + 1  
i = 4 代入判斷式 arr[i] !== arr[i-1] + arr[i-2]，提取 arr 陣列第三個元素得出 22 !== 13 + 8 為真（false）
* 回傳「invalid」字串，**跳出迴圈**
