// try es6 version later
// export default {
//     testEnvironment: 'jest-environment-node',
//     transform: {}
//     ...
// };

const config = {
    verbose: true,
    "moduleNameMapper": {
        "@root(.*)$": "<rootDir>/src/$1"
    },
    testEnvironment: 'jest-environment-node',
    transform: {}
};

module.exports = config;