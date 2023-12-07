const express = require('express')
const contactsController = require('./controllerContacts')
const beritaController = require('./controlBerita')
const router = express.Router();

router.get('/',(req, res) => {
    res.send('Hello World!')
})

router.post('/contact', contactsController.addContact);

router.post('test', (req, res) => {
    let user = {
        nama : 'ubai'
    }
})

router.get('/news',beritaController.getBerita)
router.get('/news/:id', beritaController.getBeritaById);


module.exports = router;