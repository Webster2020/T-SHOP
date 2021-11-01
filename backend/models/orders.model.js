const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  products: { type: Array, required: true },
  cost: { type: Number, required: true },
});

module.exports = mongoose.model('Orders', ordersSchema);
