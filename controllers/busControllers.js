const Bus = require('../models/Bus');

exports.createBus = async (req, res) => {
  try {
    const bus = await Bus.create(req.body);
    res.json(bus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAvailableBuses = async (req, res) => {
  const seats = parseInt(req.params.seats);
  const buses = await Bus.findAll({ where: { availableSeats: { [require('sequelize').Op.gt]: seats } } });
  res.json(buses);
};
