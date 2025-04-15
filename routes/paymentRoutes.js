const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentControllers');

router.post('/', paymentController.createPayment);
router.get('/', paymentController.getPayments);

module.exports = router;
