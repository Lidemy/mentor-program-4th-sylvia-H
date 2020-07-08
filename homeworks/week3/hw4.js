const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function solve(input) {
  const str = input[0];
  let res = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    res += str[i];
  }

  if (res === str) {
    console.log('True');
  } else {
    console.log('False');
  }
}

rl.on('close', () => {
  solve(lines);
});
