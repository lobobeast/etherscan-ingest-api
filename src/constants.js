'use strict';

const url = 'https://api.etherscan.io';
const urlPath = '/api';
const uri = '?module={1}&action={2}&address={3}&apiKey={4}';

//contracts specific
const contractMod = 'contract';
const contractGetAbi = 'getabi';
const contractGetSc = 'getsourcecode';

module.exports = Object.freeze({
    url,
    urlPath,
    uri,
    contractMod,
    contractGetAbi,
    contractGetSc
});