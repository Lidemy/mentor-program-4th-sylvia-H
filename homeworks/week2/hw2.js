function capitalize(str) {
    let arr = str.split('');
    if(str.charCodeAt(0)>96){
      arr[0]=arr[0].toUpperCase();
    }
    return arr.join('');
}

console.log(capitalize('hello'));



/* 自我檢討，更好的寫法：
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
*/