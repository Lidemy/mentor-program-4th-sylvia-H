/* eslint-disable no-alert */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* 程式碼優化重點：資料與 UI 分離、未來可能變動的資料設成變數。 */

/* 變數區 */
let gameName;
let streamsData;
let offset = 0;
const GAME_URL = 'https://api.twitch.tv/kraken/games/top?limit=5';
const STREAM_URL = 'https://api.twitch.tv/kraken/streams?game=';
const CLIENT_ID = 'ovhkxvwlkldq4ihxon1yc97gr6ywm9';
const ACCEPT_HEADER = 'application/vnd.twitchtv.v5+json';
const errMSG = 'System is unstable. Please try again.';
const STREAM_TEMPLATE = `<img src="$preview" />
  <div class="stream__data">
      <div class="stream__avatar">
          <img src="$logo">
      </div>
      <div class="stream__info">
          <div class="stream__discrip">$status</div>
          <div class="stream__name">$name</div>
      </div>
  </div>`;

/* getGames 功能：取得遊戲名稱資料 */
function getGames(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', GAME_URL, true);
  xhr.setRequestHeader('Client-ID', CLIENT_ID);
  xhr.setRequestHeader('Accept', ACCEPT_HEADER);
  xhr.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      let games;
      try {
        games = JSON.parse(this.response).top;
      } catch (error) {
        console.log(error);
        return;
      }
      cb(games);
    }
  };
  xhr.onerror = function () {
    alert(errMSG);
  };
  xhr.send();
}

/* getStreams 功能：取得實況資料 */
function getStreams(cb) {
  const xhr2 = new XMLHttpRequest();
  xhr2.open('GET', `${STREAM_URL}${encodeURIComponent(gameName)}&limit=20&offset=${offset}`, true);
  xhr2.setRequestHeader('Client-ID', CLIENT_ID);
  xhr2.setRequestHeader('Accept', ACCEPT_HEADER);
  xhr2.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      try {
        streamsData = JSON.parse(this.response).streams;
      } catch (error) {
        console.log(error);
        return;
      }
      cb(streamsData);
    }
  };
  xhr2.onerror = function () {
    alert(errMSG);
  };
  xhr2.send();
}

/* checkMoreStream 功能：確認是否需要載入更多實況 */
function checkMoreStream() {
  // offset = document.querySelector('.stream').childElementCount; // offset = 目前載入實況數量
  console.log(`offset：${offset}`);
  getStreams(function () {
    if (streamsData.length) {
      /* 若剩餘的實況資料筆數大於 0，顯示「載入更多」按鈕 */
      document.querySelector('.btn-more').classList.remove('hide');
      /* 顯示「goTOP」按鈕 */
      document.querySelector('.btn-goTop').classList.remove('hide');
    } else {
      /* 若之後沒有更多實況資料，隱藏「載入更多」按鈕 */
      document.querySelector('.btn-more').classList.add('hide');
    }
  });
}

/* createStreamElement 功能：把 stream 資料 render 出來 */
function createStreamElement() {
  document.querySelectorAll('.empty-stream').forEach(el => el.remove());
  for (let i = 0; i < streamsData.length; i += 1) {
    const element = document.createElement('div');
    element.classList.add('stream');
    element.innerHTML = STREAM_TEMPLATE
      .replace('$preview', streamsData[i].preview.large)
      .replace('$logo', streamsData[i].channel.logo)
      .replace('$status', streamsData[i].channel.status)
      .replace('$name', streamsData[i].channel.display_name);
    document.querySelector('.streams').appendChild(element);
    offset += 1;
  }
  console.log(`createStreamElement：offset：${offset}`);
  for (let i = 0; i < 3 - (offset % 3); i += 1) {
    const emptyItem = document.createElement('div');
    emptyItem.classList.add('empty-stream');
    document.querySelector('.streams').appendChild(emptyItem);
  }
  checkMoreStream();
}

/* changeGame 功能：切換不同遊戲，並渲染該遊戲前 20 筆實況 */
function changeGame() {
  document.querySelector('h1').innerText = gameName;
  document.querySelector('.streams').innerHTML = '';
  getStreams(function () {
    offset = 0;
    createStreamElement(streamsData);
  });
}

/* getMoreStream 功能：點擊「載入更多」按鈕後觸發 */
function getMoreStream() {
  console.log(`getMoreStream：offset：${offset}`);
  getStreams(function () {
    createStreamElement(streamsData);
  });
}

// 頁面初始化
function init() {
  /* 第一步驟：取得遊戲名稱，渲染 navbar 和第一個遊戲的前 20 筆實況資料 */
  getGames(function (games) {
    for (const game of games) {
      const item = document.createElement('li');
      item.innerText = game.game.name;
      document.querySelector('.nav__list').appendChild(item);
    }
    gameName = games[0].game.name;
    changeGame(gameName);
  });

  /* 第二步驟：若點選 navbar 切換遊戲時，實況資料同步變動 */
  document.querySelector('.nav__list').addEventListener('click', function (e) {
    gameName = e.target.innerText;
    changeGame(gameName);
  });

  /* 第三步驟：若點選「載入更多」按鈕，實況資料添加 20 筆 */
  document.querySelector('.btn-more').addEventListener('click', getMoreStream);
}

document.addEventListener('DOMContentLoaded', init);
