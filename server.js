const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())
// routes / url utama method get

app.get('/', (req, res) => {
    res.send('main')
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
}) 

app.post('/login', (req, res) => {
    console.log({ requestFromOutside : req.body })
    res.send('login success')
})

app.put('/username', (req, res) => {
    console.log({ updateData : req.body })
    res.send('update success')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})