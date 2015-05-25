var api         = require('./api'),
    admin       = require('./admin'),
    frontend    = require('./frontend'),
    publicApi    = require('./public-api');

module.exports = {
    apiBaseUri: '/ghost/api/v0.1/',
    api: api,
    publicApi: publicApi,
    admin: admin,
    frontend: frontend
};
