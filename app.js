const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');


const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const paymentRoutes = require('./routes/paymentRoutes');


const User = require('./models/User');
const Bus = require('./models/Bus');
const Booking = require('./models/Booking');
const Payment = require('./models/Payment');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


app.use('/users', userRoutes);
app.use('/buses', busRoutes);
app.use('/bookings', bookingRoutes);
app.use('/payments', paymentRoutes);


User.hasMany(Booking, {foreignKey: 'userId'});
Booking.belongsTo(User, {foreignkey: 'userId'});

Bus.hasMany(Booking, {foreignkey: 'busId'});
Booking.belongsTo(Bus, {foreignkey: 'busId'});



sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
