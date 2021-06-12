/* eslint-disable no-alert */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* 程式碼優化重點：資料與 UI 分離、未來可能變動的資料設成變數。 */

/* 變數區 */
let STREAMS;
let STREAMS_AMOUNT = 0;
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
function getStreams(gameName, cb) {
  const xhr2 = new XMLHttpRequest();
  xhr2.open('GET', `${STREAM_URL}${encodeURIComponent(gameName)}&limit=100`, true);
  xhr2.setRequestHeader('Client-ID', CLIENT_ID);
  xhr2.setRequestHeader('Accept', ACCEPT_HEADER);
  xhr2.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      try {
        STREAMS = JSON.parse(this.response).streams;
      } catch (error) {
        console.log(error);
        return;
      }
      cb(STREAMS);
    }
  };
  xhr2.onerror = function () {
    alert(errMSG);
  };
  xhr2.send();
}

/* changeGame 功能：切換不同遊戲，並渲染該遊戲前 20 筆實況 */
function changeGame(gameName) {
  document.querySelector('h1').innerText = gameName;
  document.querySelector('.streams').innerHTML = '';
  getStreams(gameName, function (streams) {
    STREAMS_AMOUNT = 0;
    for (let i = 0; i < 20; i += 1) {
      const element = document.createElement('div');
      element.classList.add('stream');
      element.innerHTML = STREAM_TEMPLATE
        .replace('$preview', streams[i].preview.large)
        .replace('$logo', streams[i].channel.logo)
        .replace('$status', streams[i].channel.status)
        .replace('$name', streams[i].channel.display_name);
      document.querySelector('.streams').appendChild(element);
      STREAMS_AMOUNT += 1;
    }
    for (let i = 0; i < 3 - (STREAMS.length % 3); i += 1) {
      const emptyItem = document.createElement('div');
      emptyItem.classList.add('empty-stream');
      document.querySelector('.streams').appendChild(emptyItem);
    }
    /* 若回傳的實況資料筆數大於 20 筆，顯示「載入更多」按鈕 */
    if (STREAMS.length > STREAMS_AMOUNT) {
      document.querySelector('.btn-more').classList.remove('hide');
    }
    /* 顯示「goTOP」按鈕 */
    document.querySelector('.btn-goTop').classList.remove('hide');
  });
}

/* getMoreStream 功能：載入更多實況，每次添加 20 筆 */
function getMoreStream() {
  if (STREAMS.length > 20 && STREAMS.length > STREAMS_AMOUNT) {
    document.querySelectorAll('.empty-stream').forEach(el => el.remove());
    let STREAM_MORE = 0;
    for (let i = STREAMS_AMOUNT; i < STREAMS_AMOUNT + 20; i += 1) {
      const element = document.createElement('div');
      element.classList.add('stream');
      element.innerHTML = STREAM_TEMPLATE
        .replace('$preview', STREAMS[i].preview.large)
        .replace('$logo', STREAMS[i].channel.logo)
        .replace('$status', STREAMS[i].channel.status)
        .replace('$name', STREAMS[i].channel.display_name);
      document.querySelector('.streams').appendChild(element);
      STREAM_MORE += 1;
    }
    STREAMS_AMOUNT += STREAM_MORE;
    console.log(`STREAMS_AMOUNT： ${STREAMS_AMOUNT}`, `STREAM_MORE： ${STREAM_MORE}`);
    /* 若之後沒有更多實況資料，隱藏「載入更多」按鈕 */
    if (STREAMS.length === STREAMS_AMOUNT) {
      document.querySelector('.btn-more').classList.add('hide');
    }
  } else {
    return;
  }
  /* 添加空白的 empty-stream 實況方框在最後一列 */
  if (STREAMS_AMOUNT % 3 !== 0) {
    for (let i = 0; i < 3 - (STREAMS_AMOUNT % 3); i += 1) {
      const emptyItem = document.createElement('div');
      emptyItem.classList.add('empty-stream');
      document.querySelector('.streams').appendChild(emptyItem);
    }
  }
}

/* 第一步驟：取得遊戲名稱，渲染 navbar 和第一個遊戲的前 20 筆實況資料 */
getGames(function (games) {
  for (const game of games) {
    const item = document.createElement('li');
    item.innerText = game.game.name;
    document.querySelector('.nav__list').appendChild(item);
  }
  changeGame(games[0].game.name);
});

/* 第二步驟：若點選 navbar 切換遊戲時，實況資料同步變動 */
document.querySelector('.nav__list').addEventListener('click', function (e) {
  const gameName = e.target.innerText;
  changeGame(gameName);
});

/* 第三步驟：若點選「載入更多」按鈕，實況資料添加 20 筆 */
document.querySelector('.btn-more').addEventListener('click', getMoreStream);
