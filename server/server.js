const express = require('express')
const bodyParser = require('body-parser')
const db = require('../database/db');

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use( bodyParser.json() )

app.use(express.static(__dirname + '/../dist'));





app.listen(3099, function() {
  console.log('listening on port 3099!');
})