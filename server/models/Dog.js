const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Dog', DogSchema);
