'use strict';

const apiKey = '<add api key here>';
const url = 'https://api.etherscan.io';
const urlPath = '/api';
const uri = '?module={1}&action={2}&address={3}&apiKey={4}';

//contracts specific
const contractMod = 'contract';
const contractGetAbi = 'getabi';
const contractGetSc = 'getsourcecode';

module.exports = Object.freeze({
    apiKey,
    url,
    urlPath,
    uri,
    contractMod,
    contractGetAbi,
    contractGetSc
});