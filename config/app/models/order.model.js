const { timeStamp } = require("console");
const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  deliveryAddress: String,
  cost: Number,
  createdAt: Date,
});

module.exports = mongoose.model("Order", OrderSchema);
