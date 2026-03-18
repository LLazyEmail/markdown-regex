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
    collectCoverageFrom: [
        'src/**/*.js',
        '!src/**/*.d.ts',
    ],
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70,
        },
    },
};

module.exports = config;