const contracts = require('../data/eAPI/contracts/contracts.service');

async function getAbi(req, res, next) {
    try {
        res.json(await contracts.getAbi(req.body));
    } catch (err) {
        console.log(err.message);
        next(err);
    }
};

async function getSC(req, res, next) {
    try {
        res.json(await contracts.getSC(req.body));
    } catch (err) {
        console.log(err.message);
        next(err);
    }
};

module.exports = {
    getAbi,
    getSC
};