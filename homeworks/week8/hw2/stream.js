/* eslint-disable no-alert */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* 程式碼優化重點：資料與 UI 分離、未來可能變動的資料設成變數。 */
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

function getStreams(gameName, cb) {
  const xhr2 = new XMLHttpRequest();
  xhr2.open('GET', STREAM_URL + encodeURIComponent(gameName), true);
  xhr2.setRequestHeader('Client-ID', CLIENT_ID);
  xhr2.setRequestHeader('Accept', ACCEPT_HEADER);
  xhr2.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      let streams;
      try {
        streams = JSON.parse(this.response).streams;
      } catch (error) {
        console.log(error);
        return;
      }
      cb(streams);
    }
  };
  xhr2.onerror = function () {
    alert(errMSG);
  };
  xhr2.send();
}

function changeGame(gameName) {
  document.querySelector('h1').innerText = gameName;
  document.querySelector('.streams').innerHTML = '';
  getStreams(gameName, function (streams) {
    for (const stream of streams) {
      const element = document.createElement('div');
      element.classList.add('stream');
      element.innerHTML = STREAM_TEMPLATE
        .replace('$preview', stream.preview.large)
        .replace('$logo', stream.channel.logo)
        .replace('$status', stream.channel.status)
        .replace('$name', stream.channel.display_name);
      document.querySelector('.streams').appendChild(element);
    }
    for (let i = 0; i < 3 - (streams.length % 3); i += 1) {
      const emptyItem = document.createElement('div');
      emptyItem.classList.add('empty-stream');
      document.querySelector('.streams').appendChild(emptyItem);
    }
  });
}

getGames(function (games) {
  for (const game of games) {
    const item = document.createElement('li');
    item.innerText = game.game.name;
    document.querySelector('.nav__list').appendChild(item);
  }
  changeGame(games[0].game.name);
});

document.querySelector('.nav__list').addEventListener('click', function (e) {
  const gameName = e.target.innerText;
  changeGame(gameName);
});
