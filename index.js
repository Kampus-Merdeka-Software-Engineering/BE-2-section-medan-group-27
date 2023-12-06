const express = require('express');
const db = require('./connection');
const CircularJSON = require('circular-json');
const cors = require('cors')
const mainRouter = require('./routes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())
app.use('/', mainRouter)


db.sync({ alter: true})
.then(()=> {
  console.log(`Database connected`)

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
})

.catch((error) => console.log(`unable to connect to database : ${error}`))

