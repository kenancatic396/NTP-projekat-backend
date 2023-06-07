const mongoose = require("mongoose");
const { url } = require("../../database.config");

const ProductSchema = mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  img_url: String,
  vendor: String,
});

module.exports = mongoose.model("Product", ProductSchema);
