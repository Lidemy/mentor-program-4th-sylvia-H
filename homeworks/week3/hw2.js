const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

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

rl.on('close', () => {
  solve(lines);
});
