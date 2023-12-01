const fs = require('fs').promises;
const path = require('path');

async function getData() {
  try {
    // Baca file JSON
    const dataPath = path.join(__dirname, 'public', 'db.json');
    const jsonData = await fs.readFile(dataPath, 'utf8');

    // Parse JSON dan kembalikan sebagai objek
    const data = JSON.parse(jsonData);

    // Tampilkan data dalam format HTML
    const htmlOutput = generateHTML(data);

    return htmlOutput;
  } catch (error) {
    console.error('Gagal membaca data JSON:', error);
    throw error;
  }
}

function generateHTML(data) {
  let htmlContent = '<html><head><title>Data Display</title></head><body>';

  // Debugging: Log data untuk memeriksa struktur
  console.log('Data:', data);

  for (const category in data.categories) {
    htmlContent += `<h2>${category} News</h2>`;
    const newsArray = data.categories[category];

    // Debugging: Log newsArray untuk memeriksa struktur
    console.log('News Array:', newsArray);

    newsArray.forEach(news => {
      htmlContent += `
        <div>
          <h3>${news.title}</h3>
          <p>${news.content}</p>
          <p>Published on ${news.publishedAt} by ${news.author}</p>
        </div>
      `;
    });
  }

  htmlContent += '</body></html>';
  return htmlContent;
}

module.exports = getData;
