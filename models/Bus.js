const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Bus = sequelize.define('Bus', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  busNumber: { type: DataTypes.STRING, allowNull: false },
  totalSeats: { type: DataTypes.INTEGER, allowNull: false },
  availableSeats: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Bus;