const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3002; // Ganti dengan port yang sesuai

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const data = [
    { id: 1, name: 'Product 1', category: 'Electronics' },
    { id: 2, name: 'Product 2', category: 'Clothing' }
  ];

  // Endpoint untuk mendapatkan semua data
app.get('/products', (req, res) => {
    res.json(data);
  });
  
  // Endpoint untuk pencarian berdasarkan nama produk
  app.get('/products/search', (req, res) => {
    const query = req.query.q.toLowerCase();
    const filteredData = data.filter(product => product.name.toLowerCase().includes(query));
    res.json(filteredData);
  });
  
  // Endpoint untuk penyaringan berdasarkan kategori
  app.get('/products/filter', (req, res) => {
    const category = req.query.category;
    const filteredData = data.filter(product => product.category === category);
    res.json(filteredData);
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
  