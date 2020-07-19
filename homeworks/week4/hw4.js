const request = require('request');

const clientID = 'ovhkxvwlkldq4ihxon1yc97gr6ywm9';

const option = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    'Client-ID': clientID,
    Accept: 'application/vnd.twitchtv.v5+json',
  },
};

const callBack = (err, res, body) => {
  let data;
  try {
    data = JSON.parse(body);
  } catch (e) {
    return console.log('資料非 JSON 格式', e);
  }
  if (!err && res.statusCode < 400) {
    for (let i = 0; i < data.top.length; i += 1) {
      console.log(`${data.top[i].viewers} ${data.top[i].game.name}`);
    }
    return console.log('....');
  }
  return console.log('抓取資料失敗');
};

request(option, callBack);
