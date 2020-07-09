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
  const items = Number(tmp[0]);
  const bagSize = Number(tmp[1]);
  const weight = [];
  const value = [];

  for (let i = 1; i <= items; i += 1) {
    const tmpArray = input[i].split(' ');
    weight.push(Number(tmpArray[0]));
    value.push(Number(tmpArray[1]));
  }

  const bagMatrix = [];

  for (let y = 0; y <= bagSize; y += 1) {
    bagMatrix[y] = [];
    for (let x = 0; x < items; x += 1) {
      if (y === 0) {
        bagMatrix[y][x] = 0;
      }
      if (y < weight[x]) {
        bagMatrix[y][x] = bagMatrix[y][x - 1] || 0;
      }
      if (y >= weight[x]) {
        const predictValue = (bagMatrix[y - weight[x]][x - 1] || 0) + value[x];
        const preValue = (bagMatrix[y][x - 1] || 0);
        bagMatrix[y][x] = Math.max(predictValue, preValue);
      }
    }
  }

  const sumValue = [];
  for (let i = 0; i <= bagSize; i += 1) {
    sumValue.push(bagMatrix[i][items - 1]);
  }
  const maxValue = Math.max.apply(null, sumValue);
  console.log(maxValue);
}

rl.on('close', () => {
  solve(lines);
});
