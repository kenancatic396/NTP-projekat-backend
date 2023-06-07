const { timeStamp } = require("console");
const mongoose = require("mongoose");

const ShipmentSchema = mongoose.Schema({
  deliveryAddress: String,
  senderAddress: String,
  createdAt: Date,
  deliveredAt: Date,
});

module.exports = mongoose.model("Shipment", ShipmentSchema);
