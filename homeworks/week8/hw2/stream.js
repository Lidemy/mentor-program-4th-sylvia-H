/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names */
/* eslint-disable prefer-template */
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.twitch.tv/kraken/games/top?limit=5', true);
xhr.setRequestHeader('Client-ID', 'ovhkxvwlkldq4ihxon1yc97gr6ywm9');
xhr.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
xhr.onload = function () {
  if (this.status >= 200 && this.status < 400) {
    let data;
    try {
      data = JSON.parse(this.response).top;
      console.log(data);
    } catch (error) {
      console.log(error);
      return;
    }
    for (const game of data) {
      const item = document.createElement('li');
      item.innerText = game.game.name;
      document.querySelector('.nav__list').appendChild(item);
    }
    document.querySelector('h1').innerText = data[0].game.name;

    const xhr2 = new XMLHttpRequest();
    xhr2.open('GET', 'https://api.twitch.tv/kraken/streams?game=' + data[0].game.name, true);
    xhr2.setRequestHeader('Client-ID', 'ovhkxvwlkldq4ihxon1yc97gr6ywm9');
    xhr2.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
    xhr2.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        let data2;
        try {
          data2 = JSON.parse(this.response).streams;
          console.log(data2);
        } catch (error) {
          console.log(error);
          return;
        }
        for (const stream of data2) {
          const element = document.createElement('div');
          element.classList.add('stream');
          element.innerHTML = `
          <img src="${stream.preview.large}" />
          <div class="stream__data">
            <div class="stream__avatar">
              <img src="${stream.channel.logo}">
            </div>
            <div class="stream__info">
              <div class="stream__discrip">${stream.channel.status}</div>
               <div class="stream__name">${stream.channel.display_name}</div>
            </div>
          </div>`;
          document.querySelector('.streams').appendChild(element);
        }
      }
    };
    xhr2.send();
  }
};
xhr.send();

document.querySelector('.nav__list').addEventListener('click', (e) => {
  document.querySelector('h1').innerText = e.target.innerText;
  document.querySelector('.streams').innerHTML = '';
  const xhr2 = new XMLHttpRequest();
  xhr2.open('GET', 'https://api.twitch.tv/kraken/streams?game=' + encodeURIComponent(e.target.innerText), true);
  xhr2.setRequestHeader('Client-ID', 'ovhkxvwlkldq4ihxon1yc97gr6ywm9');
  xhr2.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  xhr2.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      let data2;
      try {
        data2 = JSON.parse(this.response).streams;
        console.log(data2);
      } catch (error) {
        console.log(error);
        return;
      }
      for (const stream of data2) {
        const element = document.createElement('div');
        element.classList.add('stream');
        element.innerHTML = `
              <img src="${stream.preview.large}" />
              <div class="stream__data">
                  <div class="stream__avatar">
                      <img src="${stream.channel.logo}">
                  </div>
                  <div class="stream__info">
                      <div class="stream__discrip">${stream.channel.status}</div>
                      <div class="stream__name">${stream.channel.display_name}</div>
                  </div>
              </div>`;
        document.querySelector('.streams').appendChild(element);
      }
    }
  };
  xhr2.send();
});
