const Payment = require('../models/Payment');

exports.createPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    res.json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPayments = async (req, res) => {
  const payments = await Payment.findAll();
  res.json(payments);
};
