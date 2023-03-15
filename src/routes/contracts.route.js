const express = require('express');
const router = express.Router();
const contractsController = require('../controllers/contracts.controller');

router.post('/get-abi', contractsController.getAbi);
router.post('/get-sc', contractsController.getSC);

module.exports = router;