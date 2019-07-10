const mongoose = require('mongoose');

const itemsSchema = mongoose.Schema({
  _id: String,
  name: String,
  price: Number,
  image1: String,
  image2: String,
  image3: String,
  image4: String,
  condition: String,
  category: String
});

const Item = mongoose.model('Item', itemsSchema);

module.exports = { Item };