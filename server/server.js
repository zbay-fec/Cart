const express = require('express')
const bodyParser = require('body-parser')
const {Item} = require('../database/db');
const path = require('path')
const mongoose = require('mongoose')
const port = process.env.PORT || 3099;
const host = process.env.HOST || '0.0.0.0'

// need for mongo to find env
require('dotenv').config()

// console.log('env.pw is '. process.env.MONGO_PW)

// mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@feccarousel-satgh.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true });
mongoose.connect(`mongodb+srv://Gary:ZbayCart@zbaycart-tvfyb.mongodb.net/ZbayCart?retryWrites=true&w=majority`, { useNewUrlParser: true });


const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use( bodyParser.json() )

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/items', (req, res) => {
  Item.find()
    .exec()
    .then(results => {
      console.log('get request results are: ', results)
      console.log('pw is', process.env.MONGO_PW)
      res.status(200).send(results)
    })
    .catch(err => res.status(500).json({message: 'There was an error with your request', error: err}));
});

//format for request must be like http://127.0.0.1:3099/item:?id=RAI357e
app.get('/item:', (req, res) => {
  console.log('req.query is: ', req.query)
  Item.findById(req.query.id)
    .exec()
    .then(results => {
      console.log('results are ', results)
      res.status(200).send(results)
    })
    .catch(err => {
      res.status(500).json({message: 'Invalid ID', error: err});
      console.log(err);
    });
});

app.listen(port, function() {
  console.log(`Running on https://${host}:${port}!`);
})