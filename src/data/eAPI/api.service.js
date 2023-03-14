const fetch = require("node-fetch");
const { urlBuilder } = require('../../helperfunctions');

async function callGetApi(params) {
    let endpoint = '';
    // no api health check endpoint
    if (params === undefined) {
        console.log('Error: no parameters defined');
        throw new Error('Error: no parameters defined');
    }
    try {
        endpoint = urlBuilder(params);
    } catch (err) {
        console.log(err);
    }
    if (endpoint === '') {
        console.log('Error: no url endpoint defined');
        throw new Error('Error: no url endpoint defined');
    }
    
    try {
        let response = await fetch(endpoint);
        return await response.json();
    } catch (err) {
        console.log(err)
    }
};

module.exports = {
    callGetApi
};