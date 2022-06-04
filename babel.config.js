"use strict";

// https://stackoverflow.com/questions/57060316/environment-variables-in-babel-config-js
// https://stackoverflow.com/questions/34924581/how-do-you-configure-babel-to-run-with-different-configurations-in-different-env

const presets = [
  [
    "@babel/preset-env",
    {
      modules: false,

      targets: { node: 'current' }
    }
  ]
];



// Add this to working tests
const env = {
  test: {
    presets: [['@babel/preset-env']],
    plugins: ["@babel/plugin-transform-modules-commonjs"]
  }
}

const plugins = [
  // [
  //   require.resolve("babel-plugin-module-resolver"),
  //   {
  //     root: ["./src/"],
  //     alias: {
  //     //   "~": "./src/data",
  //     //   "@files": "./src/files.js",
  //     //   "@utils": "./src/utils.js",
  //     //   "@generator": "./generator"
  //     // }
  //   }
  // ],
  ["@babel/plugin-syntax-dynamic-import"],
  // ["@babel/proposal-object-rest-spread"]
];

module.exports = function(api) {
  api.cache(true);
  return {
    presets: presets,
    plugins: plugins,
    env: env
  };
};

