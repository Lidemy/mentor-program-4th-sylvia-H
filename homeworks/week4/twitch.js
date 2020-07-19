const request = require('request');
const process = require('process');

const clientID = 'ovhkxvwlkldq4ihxon1yc97gr6ywm9';

const option2 = {
  url: `https://api.twitch.tv/kraken/streams/?game=${process.argv[2]}&limit=100&offset=101`,
  headers: {
    'Client-ID': clientID,
    Accept: 'application/vnd.twitchtv.v5+json',
  },
};

const callBack2 = (err, res, body) => {
  if (!err && res.statusCode < 400) {
    let data;
    try {
      data = JSON.parse(body);
    } catch (e) {
      return console.log('資料非 JSON 格式', e);
    }
    if (data.streams.length === 0) {
      return console.log('該遊戲目前無實況頻道');
    }
    for (let i = 0; i < data.streams.length; i += 1) {
      /* eslint-disable no-underscore-dangle */
      console.log(`${data.streams[i].channel._id} : ${data.streams[i].channel.display_name}`);
    }
    return console.log(`=====以上共${100 + data.streams.length}個實況頻道在線=====`);
  }
  return console.log('抓取資料失敗');
};

function req2() {
  request(option2, callBack2);
}

const option = {
  url: `https://api.twitch.tv/kraken/streams/?game=${process.argv[2]}&limit=100`,
  headers: {
    'Client-ID': clientID,
    Accept: 'application/vnd.twitchtv.v5+json',
  },
};

const callBack = (err, res, body) => {
  if (!err && res.statusCode < 400) {
    let data;
    try {
      data = JSON.parse(body);
    } catch (e) {
      return console.log('資料非 JSON 格式', e);
    }
    if (data.streams.length === 0) {
      console.log('該遊戲目前無實況頻道');
    } else if (data.streams.length > 0 && data.streams.length < 100) {
      for (let i = 0; i < data.streams.length; i += 1) {
        /* eslint-disable no-underscore-dangle */
        console.log(`${data.streams[i].channel._id} : ${data.streams[i].channel.display_name}`);
      }
      return console.log(`=====以上共${data.streams.length}個實況頻道在線=====`);
    }
    for (let i = 0; i < data.streams.length; i += 1) {
      /* eslint-disable no-underscore-dangle */
      console.log(`${data.streams[i].channel._id} : ${data.streams[i].channel.display_name}`);
    }
    return req2();
  }
  return console.log('抓取資料失敗');
};

request(option, callBack);
