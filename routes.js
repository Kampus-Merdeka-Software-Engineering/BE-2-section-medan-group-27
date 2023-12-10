const express = require('express')
const contactsController = require('./controllerContacts')
const beritaController = require('./controlBerita')
const router = express.Router();
const berita = require('./modelberita')


router.get('/',(req, res) => {
    res.send('Hello World!')
})

router.post('/contact', contactsController.addContact);

router.post('/test', (req, res) => {
    let user = {
        nama : 'ubai'
    }
})

router.get('/news',beritaController.getBerita)
router.get('/news/:id', beritaController.getBeritaById)
router.get('/news?keyword', beritaController.getBerita)

module.exports = router;