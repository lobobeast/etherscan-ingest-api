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

module.exports = {buildConditionsGet};