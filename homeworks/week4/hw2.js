const request = require('request');
const process = require('process');

const url = 'https://lidemy-book-store.herokuapp.com/books';
const url2 = 'https://lidemy-book-store.herokuapp.com/books/';
const params = process.argv[3];
const action = process.argv[2];

// 列出所有書本清單
function all() {
  request(
    `${url}`,
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
        return console.log('....');
      } return console.log('回傳資料列表失敗', err);
    },
  );
}

// 列出前 20 本書本清單
function list() {
  request(
    `${url}`,
    (err, res, body) => {
      if (!err) {
        let data;
        try {
          data = JSON.parse(body);
        } catch (e) {
          return console.log('資料非 JSON 格式', e);
        }
        for (let i = 0; i < 20; i += 1) {
          console.log(`${data[i].id} ${data[i].name}`);
        }
        return console.log('....');
      } return console.log('回傳資料列表失敗', err);
    },
  );
}

// 讀取第 n 本書本資料
function readData() {
  request(
    `${url2}${params}`,
    (err, res, body) => {
      if (!err) {
        let data;
        try {
          data = JSON.parse(body);
        } catch (e) {
          return console.log('資料非 JSON 格式', e);
        }
        return console.log(`${data.id} ${data.name}`);
      } return console.log('抓取資料失敗', err);
    },
  );
}

// 刪除第 n 本書本資料
function delData() {
  request.del(
    `${url2}${params}`,
    (err) => {
      if (err) {
        return console.log('刪除資料失敗', err);
      }
      console.log(`id: ${process.argv[3]}，資料刪除成功！更新後資料列表如下：`);
      return all();
    },
  );
}

// 新增書本資料
function createData() {
  request.post(
    {
      url: `${url}`,
      form: {
        name: process.argv[3],
      },
    },
    (err) => {
      if (err) {
        return console.log('建置新資料失敗', err);
      }
      console.log('資料建置成功！更新後資料列表如下：');
      return all();
    },
  );
}

// 更新第 n 本書本資料
function updateData() {
  request.patch(
    {
      url: `${url2}${params}`,
      form: {
        name: process.argv[4],
      },
    },
    (err) => {
      if (err) {
        return console.log('更新資料失敗', err);
      }
      console.log(`id: ${process.argv[3]}，資料更新成功！更新後資料列表如下：`);
      return all();
    },
  );
}

// 條件判斷
switch (action) {
  case 'list':
    list();
    break;
  case 'read':
    readData();
    break;
  case 'delete':
    delData();
    break;
  case 'create':
    createData();
    break;
  case 'update':
    updateData();
    break;
  default:
}
