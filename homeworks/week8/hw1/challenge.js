/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-loop-func */

/* 變數區 */
let cum = 0;
let loop = 0;
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
        cum += 1;
      } catch (error) {
        cum += 1;
        freq05 += 1;
        console.log(error);
        return;
      }
      if (data.prize) {
        if (data.prize === 'FIRST') {
          freq01 += 1;
        } else if (data.prize === 'SECOND') {
          freq02 += 1;
        } else if (data.prize === 'THIRD') {
          freq03 += 1;
        } else if (data.prize === 'NONE') {
          freq04 += 1;
        } else {
          freq05 += 1;
          return;
        }
      } else {
        freq05 += 1;
      }
    } else {
      cum += 1;
      freq05 += 1;
    }
    cb();
  };
  request.onerror = function () {
    console.log('error');
  };
  request.send();
}

/* print 功能：印出計算結果 */
function print() {
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

/* window.onload 執行呼叫 API */
window.onload = function () {
  /* 呼叫 100 次 API */
  /* 但此種作法違反 eslint 的 no-loop-func 規則 */
  for (let i = 0; i < 100; i += 1) {
    loop += 1;
    chance(function () {
      console.log(`cum：${cum};loop：${loop}`);
      console.log(`freq01：${freq01};freq02：${freq02};freq03：${freq03};freq04：${freq04};freq05：${freq05};`);
    });
  }

  /* 延遲 25 秒再印出計算結果 */
  let delayTime;
  if (delayTime) {
    clearTimeout(delayTime);
  }
  delayTime = setTimeout(function () {
    if (cum === 100) {
      print();
      document.querySelector('.cutdown').classList.add('hide');
    }
  }, 25000);

  /* 設置倒數計時器，並將倒數秒數顯示在畫面上 */
  let waitTime = 25;
  let countdownSet;

  function countdownfunc() {
    const x = document.getElementById('countdownnumber');
    x.innerHTML = waitTime;
    if (waitTime === 0) {
      clearTimeout(countdownSet);
    } else {
      waitTime -= 1;
      if (countdownSet) {
        clearTimeout(countdownSet);
      }
      countdownSet = setTimeout(countdownfunc, 1000);
    }
  }

  function initial() { countdownfunc(); }
  initial();
};
