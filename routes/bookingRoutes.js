const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingControllers');

router.post('/', bookingController.createBooking);
router.get('/', bookingController.getBookings);

module.exports = router;
