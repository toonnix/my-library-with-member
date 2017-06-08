const configFile = require('../config/config.json');
let config;

switch (process.env.NODE_ENV) {
    case 'development':
        config = configFile.development;

    case 'production':
        config = configFile.production;

    default:
        config = configFile.development;
}

export default config;
