// # API routes
var express     = require('express'),
    api         = require('../api'),
    apiRoutes;

apiRoutes = function () {
    var router = express.Router();

    console.log(api.posts.browse());

    // ## Posts
    router.get('/public/posts', api.http(api.posts.browse));

    return router;
};

module.exports = apiRoutes;
