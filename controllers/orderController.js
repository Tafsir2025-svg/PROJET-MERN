const Order = require('../models/order');

exports.placeOrder = async (req, res) => {
  const order = new Order({
    products: req.body.products,
  });
  await order.save();
  res.status(201).json({ message: 'Commande enregistrée avec succès !' });
};
