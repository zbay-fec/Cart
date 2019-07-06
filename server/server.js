const express = require('express')
const bodyParser = require('body-parser')
const db = require('../database/db');
const port = process.env.PORT || 3099;

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use( bodyParser.json() )

app.use(express.static(__dirname + '/../dist'));





app.listen(port, function() {
  console.log(`listening on port ${port}!`);
}) 