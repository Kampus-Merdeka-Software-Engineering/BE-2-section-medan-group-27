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
      let htmlResponse = '<div>'; // Pembuka tag div untuk struktur HTML

      newsData.forEach(news => {
        htmlResponse += `
          <div class="news-item">
            <h2>${news['tittle berita']}</h2>
            <p><strong>Author:</strong> ${news.author}</p>
            <p>${news.detail}</p>
          </div>
        `;
      });

      htmlResponse += '</div>'; // Penutup tag div untuk struktur HTML
      res.send(htmlResponse);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      res.status(500).send('Terjadi kesalahan dalam pemrosesan data');
    }
  });
}

module.exports = {
  getNewsData,
};
