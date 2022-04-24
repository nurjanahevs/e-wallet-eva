const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customers.controller');

router.post('/register', customerController.register);
router.post('/login', customerController.login);
router.get('/customers', customerController.findCustomers);
router.get('/customers/:id', customerController.findSpecCus);
router.put('/topup/:id', customerController.addTopUp)


module.exports = router