const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  colors: {
    main: { type: String, required: true },
    mainStripe: { type: String, required: true }, 
    logo: { type: String, required: true },
    sleeveL: { type: String, required: true },
    sleeveR: { type: String, required: true },
    stripeL: { type: String, required: true },
    stripeR: { type: String, required: true },
    collarStripe: { type: String, required: true },
  },
  amount: { type: Number, required: true }, 
  decription: { type: String },
  like: { type: Boolean, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
});

module.exports = mongoose.model('Products', productsSchema);
