const express = require('express');
const getData = require('./getData');
const db = require('./connection');
const response = require('./response');
const CircularJSON = require('circular-json');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())

app.get('/berita', (req, res) => {
  const sql = `SELECT * FROM berita`
  db.query(sql, (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Internal Server Error');
    }
    // Send the result as JSON response
    response(200, result, "semua berita", res);
  });
});

app.get('/find', (req, res) => {
  const sql = `SELECT * FROM berita WHERE kategori = ${req.query.kategori}`
  db.query(sql, (error, result) => {
    response(200, result, "berita dari tiap kategori", res)

  })
})

app.get('/app', (req, res) => {
  const sql = `SELECT * FROM berita WHERE kategori = 'App&Os'`
  db.query(sql, (error, result) => {
    response(200, result, "berita dari tiap kategori", res)

  })
})

app.get('/user', (req, res) => {
  let user = {
    name: 'ubai',
    age: 21,
  };

  res.send(user);
});

app.get('/news', getData.getNewsData);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
