// list of required environment variables
const environmentVariables = ['NODE_ENV', 'PORT'];

// check that all environment variables are specified
environmentVariables.forEach((environmentVariable) => {
    if (!process.env[environmentVariable]) {
        console.log('App Settings Errors');
        throw new Error(`Required environment variable ${environmentVariable} is missing.`);
    }
});

// set the config values based on environment variables
const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT
};

module.exports = config;
