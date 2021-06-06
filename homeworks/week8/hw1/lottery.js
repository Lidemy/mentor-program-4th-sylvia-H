const contentGame = document.querySelector('.content__game');
const contentGameAfter = document.querySelector('.content__game-after');
const gameResult = document.querySelector('.game-result');
const prizeItem = document.querySelector('.prize-item');

function lottery(e) {
  if (e.target.classList.contains('btn-lottery')) {
    document.querySelector('.game-method').classList.add('hide');
    prizeItem.style.color = '#292222';
    prizeItem.innerText = ('');
    gameResult.classList.remove('hide');

    const request = new XMLHttpRequest();
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        const obj = JSON.parse(request.responseText);
        switch (obj.prize) {
          case 'FIRST':
            contentGameAfter.style.opacity = '0.4';
            contentGame.style = 'background:url("img/firstBG.jpg") center/cover no-repeat;';
            prizeItem.innerText = ('恭喜你中頭獎了！日本東京來回雙人遊！');
            break;
          case 'SECOND':
            contentGameAfter.style.opacity = '0.4';
            contentGame.style = 'background:url("img/secondBG.jpg") center/cover no-repeat;';
            prizeItem.innerText = ('二獎！90 吋電視一台！');
            break;
          case 'THIRD':
            contentGameAfter.style.opacity = '0.4';
            contentGame.style = 'background:url("img/thirdBG.jpg") center/cover no-repeat;';
            prizeItem.innerText = ('恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！');
            break;
          case 'NONE':
            contentGame.style.background = '#000';
            contentGameAfter.style.opacity = '0';
            prizeItem.style.color = '#fff';
            prizeItem.innerText = ('銘謝惠顧');
            break;
          default:
            alert('系統不穩定，請再試一次');
        }
      } else {
        prizeItem.innerText = ('');
        alert('系統不穩定，請再試一次');
      }
    };
    request.onerror = function () {
      prizeItem.innerText = ('');
      alert('系統不穩定，請再試一次');
    };
    request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true);
    request.send();
  }
}

contentGame.addEventListener('click', lottery);
