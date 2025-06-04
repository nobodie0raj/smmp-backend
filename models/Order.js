const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  service: String,
  link: String,
  quantity: Number,
  status: {
    type: String,
    default: "Pending"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);