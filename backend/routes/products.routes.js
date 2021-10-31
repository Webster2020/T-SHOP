const express = require('express');
const router = express.Router();

const Products = require('../models/products.model');

router.get('/all', async (req, res) => {
  try {
    const result = await Products
      .find()
      .select('colors description amount like price currency')
      .sort({_id: -1});
    if(!result) res.status(404).json({ products: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await Products
      .findById(req.params.id);
    if(!result) res.status(404).json({ products: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
