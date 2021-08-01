var env = process.env.NODE_ENV ;
var config = {};

if (env === 'production') {
    config = require('./config.production.js');
} else if(env === 'staging'){
    config = require('./config.staging.js');
} else {
	config = require('./config.development.js');
}

module.exports = config;
