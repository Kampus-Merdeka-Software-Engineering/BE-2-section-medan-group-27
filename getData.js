const fs = require('fs').promises;
const path = require('path');

async function getData() {
  try {
    // Baca file JSON
    const dataPath = path.join(__dirname, 'public', 'db.json');
    const jsonData = await fs.readFile(dataPath, 'utf8');

    // Parse JSON dan kembalikan sebagai objek
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('Gagal membaca data JSON:', error);
    throw error;
  }
}

module.exports = getData;
