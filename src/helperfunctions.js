const { config } = require('../config');
const { url, urlPath, uri } = require('./constants');

// Setting up query parameters for use with REST API calls
function buildConditionsGet(body) {
    let paramName = [];
    let data = [];

    for (const [key, value] of Object.entries(body)) {
        paramName.push(key);
        data.push(value);
    }

    
    return {
        key: paramName,
        values: data
    };
};

function urlBuilder(params) {
    if (params === undefined) {
        console.log('Error: no parameters defined');
        throw new Error('Error: no parameters defined');
    }
    let fullUrl = '';
    fullUrl = fullUrl.concat(url);
    fullUrl = fullUrl.concat(urlPath);
    fullUrl = fullUrl.concat(uri)
    fullUrl = fullUrl.replace('{1}', params[1]);
    fullUrl = fullUrl.replace('{2}', params[2]);
    fullUrl = fullUrl.replace('{3}', params[0]);
    fullUrl = fullUrl.replace('{4}', config.apiKey);
    return fullUrl;
}

module.exports = {
    buildConditionsGet,
    urlBuilder
};