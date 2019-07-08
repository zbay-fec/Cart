const express = require('express')
const bodyParser = require('body-parser')
const db = require('../database/db');
const path = require('path')
const port = process.env.PORT || 3099;
const host = process.env.HOST || '0.0.0.0'

// need for mongo to find env
// require('dotenv').config()

//comment for new push


const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use( bodyParser.json() )

// app.get('/', (req, res) => {
//   res.send('HEY!')
// })

app.use(express.static(path.join(__dirname, '/../dist')));




app.listen(port, function() {
  console.log(`Running on https://${host}:${port}!`);
})