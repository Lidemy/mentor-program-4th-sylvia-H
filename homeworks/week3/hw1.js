const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function solve(input) {
  let str = '';
  for (let i = 0; i < input[0]; i += 1) {
    str += '*';
    console.log(str);
  }
}

rl.on('close', () => {
  solve(lines);
});
