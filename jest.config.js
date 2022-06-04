const config = {
    verbose: true,
    "moduleNameMapper": {
        "@root(.*)$": "<rootDir>/src/$1"
    }
};

module.exports = config;