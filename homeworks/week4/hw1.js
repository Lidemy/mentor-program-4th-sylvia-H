const request = require('request');

const url = 'https://lidemy-book-store.herokuapp.com';
const params = '/books?_limit=';
const limit = '10';

request(
  `${url}${params}${limit}`,
  (err, res, body) => {
    if (!err) {
      let data;
      try {
        data = JSON.parse(body);
      } catch (e) {
        return console.log('資料非 JSON 格式', e);
      }
      for (let i = 0; i < data.length; i += 1) {
        console.log(`${data[i].id} ${data[i].name}`);
      }
    } return console.log('抓取資料失敗', err);
  },
);
