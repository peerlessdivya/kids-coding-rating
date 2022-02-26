const mongoose = require("../connection");
const schema = new mongoose.Schema({
  name: String,
  description: String,
  reviews: Array,
  averageRating: Number,
  icon: String,
});

const model = mongoose.model("platform", schema);

module.exports = model;