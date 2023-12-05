const fs = require('fs');

function getNewsData(req, res) {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Terjadi kesalahan saat membaca data');
      return;
    }

    try {
      const newsData = JSON.parse(data);
      res.send(newsData);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      res.status(500).send('Terjadi kesalahan dalam pemrosesan data');
    }
  });
}

module.exports = {
  getNewsData,
};
