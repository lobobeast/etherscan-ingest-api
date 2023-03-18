require('dotenv').config();
const env = process.env.NODE_ENV;


const local = {
    apiKey: process.env.API_KEY,
    port: parseInt(process.env.LOCAL_PORT) || 3000
};

const test = {
        apiKey: process.env.API_KEY,
        url: process.env.TEST_URL || 'http://localhost',
        port: parseInt(process.env.TEST_PORT) || 3001
};

const config = {
    local,
    test
};

module.exports = config[env];