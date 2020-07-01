function join(arr, concatStr) {
    let str = arr[0]
    if(arr.length>=1){
      for(let i=1; i<arr.length; i++){
          str += concatStr + arr[i];
      }
          return str;
    }else{
          return '';
    }
}

function repeat(str, times) {
    let ans=""
    for(let i=0; i < times; i++){
      ans += str
    }
    return ans;
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
