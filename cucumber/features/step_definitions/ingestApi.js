const { Given, When, Then } =require('cucumber');
const got = require('got');
const assert = require('assert').strict;
const contractsController = require('../../../src/controllers/contracts.controller');

let requestBody;
let apiResponse;

Given('A request with contractAddress {}', function(request) {
    requestBody = JSON.parse(request);
});

When('POST API call is made to {}', async function(path) {
    apiResponse = await got.post(`${process.env.TEST_URL}:${process.env.TEST_PORT}${path}`, {json: requestBody});
});

Then('I get response code {int}', function(status) {
    assert.equal(apiResponse.statusCode, status);
})