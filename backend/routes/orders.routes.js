const express = require('express');
const router = express.Router();

const Orders = require('../models/orders.model');

router.get('/all', async (req, res) => {
  try {
    const result = await Orders
      .find()
      .select('name email products cost')
      .sort({_id: -1});
    if(!result) res.status(404).json({ orders: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await Orders
      .findById(req.params.id);
    if(!result) res.status(404).json({ orders: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/add', async (req, res) => {
  try {
    const { 
      name,
      email,
      products,
      cost,
    } = req.body;
    const newOrder = new Orders({ 
      name: name,
      email: email,
      products: products,
      cost: cost,
    });
    await newOrder.save();
    res.json({ message: 'OK' });
  } 
  catch(err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
