const express = require('express');
const router = express.Router();
const appController = require('../controllers/app.controller');

router.post('/get-abi', appController.getAbi);
router.post('/get-sc', appController.getSC);

module.exports = router;