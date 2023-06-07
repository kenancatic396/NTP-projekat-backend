const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
});

module.exports = mongoose.model("Customer", CustomerSchema);
