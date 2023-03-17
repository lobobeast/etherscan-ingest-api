const api = require('../api.service');
const helper = require('../../../helperfunctions');

const { contractMod, contractGetAbi, contractGetSc } = require('../../../constants');

let result;

async function getAbi(body) {
    const queryParams = helper.buildConditionsGet(body);
    const keys = queryParams.key;
    let values = queryParams.values;
    // probably move out the concat actions to a helper function so its just a func call to add these params
    values = values.concat(contractMod);
    values = values.concat(contractGetAbi);

    await api.callGetApi(values).then( (output) => result = output);
    return {data: result};
};

async function getSC(body) {
    const queryParams = helper.buildConditionsGet(body);
    const keys = queryParams.key;
    let values = queryParams.values;
    values = values.concat(contractMod);
    values = values.concat(contractGetSc);

    await api.callGetApi(values).then( (output) => result = output);
    return {data: result};
};

module.exports = {
    getAbi,
    getSC
};