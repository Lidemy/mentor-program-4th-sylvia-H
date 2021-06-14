/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-loop-func */

/* 變數區 */
let cum = 0;
let freq01 = 0;
let freq02 = 0;
let freq03 = 0;
let freq04 = 0;
let freq05 = 0;

/* chance 功能：呼叫 API，並累計呼叫次數以及 response 種類 */
function chance(cb) {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      let data;
      try {
        data = JSON.parse(request.responseText);
      } catch (err) {
        cb(err, null);
        return;
      }
      if (!data.prize) {
        cb('error1', null);
        return;
      }
      cb(null, data.prize);
    } else {
      cb('error2', null);
    }
  };
  request.onerror = function () {
    cb('error3', null);
  };
  request.send();
}

/* print 功能：印出計算結果 */
function print() {
  document.getElementById('cumNumber').innerText = cum;
  const chances = document.querySelectorAll('.chance');
  const chance01 = ((freq01 / cum).toFixed(5)) * 100;
  chances[0].innerText = `${chance01} %`;
  const chance02 = ((freq02 / cum).toFixed(5)) * 100;
  chances[1].innerText = `${chance02} %`;
  const chance03 = ((freq03 / cum).toFixed(5)) * 100;
  chances[2].innerText = `${chance03} %`;
  const chance04 = ((freq04 / cum).toFixed(5)) * 100;
  chances[3].innerText = `${chance04} %`;
  const chance05 = ((freq05 / cum).toFixed(5)) * 100;
  chances[4].innerText = `${chance05} %`;
}

function loop() {
  if (cum > 100) return;
  let delayTime;
  if (delayTime) {
    clearTimeout(delayTime);
  }
  chance((err, prize) => {
    cum += 1;
    if (err) {
      freq05 += 1;
      console.log(err);
    } else {
      switch (prize) {
        case 'FIRST':
          freq01 += 1;
          break;
        case 'SECOND':
          freq02 += 1;
          break;
        case 'THIRD':
          freq03 += 1;
          break;
        case 'NONE':
          freq04 += 1;
          break;
        default:
          freq05 += 1;
          console.log(err);
      }
    }
  });
  print();
  delayTime = setTimeout(loop, 200);
}

/* window.onload 執行呼叫 API */
window.onload = function () {
  loop();
};
