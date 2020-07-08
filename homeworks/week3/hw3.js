const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

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

rl.on('close', () => {
  solve(lines);
});
