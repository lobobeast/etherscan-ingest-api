const fetch = require("node-fetch");
const { apiKey, url, urlPath } = require('../../constants');

async function callGetApi(params) {
    // no api health check endpoint
    if (params === undefined) {
        console.log('Error: no parameters defined');
        throw new Error('Error: no parameters defined');
    }
    let fullUrl = '';
    fullUrl = fullUrl.concat(url);
    fullUrl = fullUrl.concat(urlPath);
    fullUrl = fullUrl.concat('?module=');
    fullUrl = fullUrl.concat(params[1]);
    fullUrl = fullUrl.concat('&action=');
    fullUrl = fullUrl.concat(params[2]);
    fullUrl = fullUrl.concat('&address=');
    fullUrl = fullUrl.concat(params[0]);
    fullUrl = fullUrl.concat('&apiKey=');
    fullUrl = fullUrl.concat(apiKey);
    try {
        let response = await fetch(fullUrl);
        return await response.json();
    } catch (err) {
        console.log('Error: ', err)
    }
};

module.exports = {
    callGetApi
};