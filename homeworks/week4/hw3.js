const request = require('request');
const process = require('process');

const url = 'https://restcountries.eu/rest/v2/name/';
const params = process.argv[2];

request(
  `${url}${params}`,
  (err, res, body) => {
    let data;
    try {
      data = JSON.parse(body);
    } catch (e) {
      return console.log('資料非 JSON 格式', e);
    }
    if (!err && res.statusCode < 400) {
      for (let i = 0; i < data.length; i += 1) {
        console.log(`國家： ${data[i].name}`);
        console.log(`首都： ${data[i].capital}`);
        console.log(`貨幣： ${data[i].currencies[0].code}`);
        console.log(`國碼： ${data[i].callingCodes}`);
        console.log('============');
      }
      return true;
    }
    return console.log('找不到國家資訊');
  },
);
