var api         = require('./api'),
    publicApi   = require('./public-api'),
    admin       = require('./admin'),
    frontend    = require('./frontend');

module.exports = {
    apiBaseUri: '/ghost/api/v0.1/',
    api: api,
    publicApi: publicApi,
    admin: admin,
    frontend: frontend
};
