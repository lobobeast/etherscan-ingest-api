'use strict';

const apiKey = '<add api key here>';
const url = 'https://api.etherscan.io';
const urlPath = '/api';

//contracts specific
const contractMod = 'contract';
const contractGetAbi = 'getabi';
const contractGetSc = 'getsourcecode';

module.exports = Object.freeze({
    apiKey,
    url,
    urlPath,
    contractMod,
    contractGetAbi,
    contractGetSc
});