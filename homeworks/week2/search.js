function search(arr, n){                    //傳入一組陣列 arr 和搜尋數 n

	var S = 0;                              //設 S 為陣列搜尋起點的 index 值
	var E = arr.length - 1;                 //設 E 為陣列搜尋終點的 index 值

	while(S <= E){                          //起點 index 值小於等於終點 index 值便進入 while 迴圈
    
		var T = Math.floor( (S+E)/2 );      //設 T 為陣列中點 index 值
        
		if(arr[T] === n){                   //arr[T] 等於搜尋數 n，便回傳 T
			return T;
		}else if(arr[T] > n){               //arr[T] 大於搜尋數 n，表示二分陣列後，n 在陣列左邊，搜尋終點 index 值 E 改設定為 T-1
			E = T - 1;
		}else{
			S = T + 1;						//arr[T] 小於搜尋數 n，表示二分陣列後，n 在陣列右邊，搜尋起點 index 值 S 改設定為 T+1
		}
	}
	return -1                               //陣列中沒有搜尋數 n，便回傳 -1
}

console.log(search([1, 3, 10, 14, 39], 299));
