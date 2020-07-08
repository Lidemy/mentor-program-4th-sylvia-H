const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function solve(input) {
  const M = Number(input[0]);

  for (let i = 1; i <= M; i += 1) {
    const arr = input[i].split(' ');

    const A = Number(arr[0]);
    const B = Number(arr[1]);
    const K = Number(arr[2]);

    if (A * K === B * K) {
      console.log('DRAW');
    } else if (A * K > B * K) {
      console.log('A');
    } else {
      console.log('B');
    }
  }
}

rl.on('close', () => {
  solve(lines);
});
