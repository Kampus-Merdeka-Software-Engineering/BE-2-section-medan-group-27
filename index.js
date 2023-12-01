const express = require('express');
const getData = require('./getData');
const app = express();
const port = 3000;

app.get('/data', async (req, res) => {
  try {
    // Panggil fungsi getData
    const data = await getData();

    // Kirim data sebagai respons HTML
    res.send(data);
    // res.json(data)
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
