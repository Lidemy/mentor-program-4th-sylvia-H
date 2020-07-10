const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function judge(A, B, K) {
  if (K === 1) {
    console.log(A > B ? 'A' : 'B');
  }

  if (K === -1) {
    console.log(A > B ? 'B' : 'A');
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

rl.on('close', () => {
  solve(lines);
});
