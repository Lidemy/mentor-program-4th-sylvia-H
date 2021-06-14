/* eslint-disable no-alert */
/* eslint-disable func-names */
const btnDraw = document.querySelector('.btn-lottery');
const contentGame = document.querySelector('.content__game');
const contentGameAfter = document.querySelector('.content__game-after');
const gameMethod = document.querySelector('.game-method');
const gameResult = document.querySelector('.game-result');
const prizeItem = document.querySelector('.prize-item');
const errMSG = '系統不穩定，請再試一次';
let className;
let prizeTitle;

function lottery(e) {
  if (e.target.classList.contains('btn-lottery')) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true);
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        let data;
        try {
          data = JSON.parse(request.responseText);
        } catch (error) {
          alert(errMSG);
          console.log(error);
          return;
        }
        if (data.prize) {
          if (data.prize === 'FIRST') {
            className = 'firstPrize';
            prizeTitle = '恭喜你中頭獎了！日本東京來回雙人遊！';
            prizeItem.style.color = '#292222';
            contentGameAfter.style.opacity = '0.5';
          } else if (data.prize === 'SECOND') {
            className = 'secondPrize';
            prizeTitle = '二獎！90 吋電視一台！';
            prizeItem.style.color = '#292222';
            contentGameAfter.style.opacity = '0.5';
          } else if (data.prize === 'THIRD') {
            className = 'thirdPrize';
            prizeTitle = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！';
            prizeItem.style.color = '#292222';
            contentGameAfter.style.opacity = '0.5';
          } else if (data.prize === 'NONE') {
            className = 'nonePrize';
            prizeTitle = '銘謝惠顧';
            prizeItem.style.color = '#fff';
            contentGameAfter.style.opacity = '0';
          } else {
            alert(errMSG);
            return;
          }
          gameMethod.classList.add('hide');
          gameResult.classList.remove('hide');
          contentGame.classList.add(className);
          prizeItem.innerText = prizeTitle;
        } else {
          alert(errMSG);
        }
      } else {
        alert(errMSG);
      }
    };
    // 2021-06-14 添加[訂正：防止連續點擊]
    request.addEventListener('loadend', () => {
      console.log('loadend');
      btnDraw.addEventListener('click', lottery, { once: true });
    });
    // 以上：2021-06-14 添加[訂正：防止連續點擊]
    request.onerror = function () {
      alert(errMSG);
    };
    request.send();
  }
}

// 2021-06-14 添加[訂正：防止連續點擊]
function init() {
  btnDraw.addEventListener('click', lottery, { once: true });
}

document.addEventListener('DOMContentLoaded', init);
// 以上：2021-06-14 修正為 DOMContentLoaded 狀態觸發 init() [訂正：防止連續點擊]
