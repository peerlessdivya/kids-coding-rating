const { Mongoose, isValidObjectId } = require("mongoose");
const { default: user } = require("../../frontend/src/components/user");
const mongoose = require("../connection");
const schema = new mongoose.Schema({
  title : String,
  text : String,
  author : {type: Mongoose, type: isValidObjectId, refrence:"user"}
});

const model = mongoose.model("review", schema);

module.exports = model;