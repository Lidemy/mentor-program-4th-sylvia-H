function capitalize(str) {
    let arr = str.split('');
    if(str.charCodeAt(0)>96){
      arr[0]=arr[0].toUpperCase();
    }
    return arr.join('');
}

console.log(capitalize('hello'));
