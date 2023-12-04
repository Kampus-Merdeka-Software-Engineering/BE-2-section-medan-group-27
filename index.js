const express = require('express');
const getData = require('./getData');

const app = express();
const port = 3000;

app.get('/user', (req, res) => {
  let user = {
    name : 'ubai',
    age : 21
  }

  res.send(JSON.stringify(user))
})

// Menggunakan controller dari newsController.js untuk endpoint /news
app.get('/news', getData.getNewsData);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
