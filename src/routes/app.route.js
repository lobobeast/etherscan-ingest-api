const express = require('express');
const router = express.Router();
const appController = require('../controllers/app.controller');

router.post('/contracts/get-abi', appController.getAbi);
router.post('/contracts/get-sc', appController.getSC);

module.exports = router;