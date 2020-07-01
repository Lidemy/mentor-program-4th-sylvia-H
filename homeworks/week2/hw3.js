function reverse(str) {
    let ans = []
    for(let i=str.length-1; i>=0; i--){
      ans.push(str[i]);
    }
    return ans.join('');
}

reverse('hello');
