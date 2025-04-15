const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Payment = sequelize.define('Payment', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  amountPaid: { type: DataTypes.FLOAT, allowNull: false },
  paymentStatus: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Payment;