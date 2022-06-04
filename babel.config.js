"use strict";

const presets = [
  [
    "@babel/preset-env",
    {
      modules: false
    }
  ]
  // {
  //
  // }
];
// Add this to working tests
// const env = {
//   test: {
//     presets: [['@babel/preset-env']]
//   }
// }

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
  ["@babel/plugin-syntax-dynamic-import"]
  // ["@babel/proposal-object-rest-spread"]
];

const env = {
  "test": {
    "plugins": ["@babel/plugin-transform-modules-commonjs"]
  }
}
// env": {
  
// }

// module.exports = () => ({
//   presets: [require("@babel/preset-env")],
//   plugins: [
//     [require("@babel/plugin-proposal-class-properties"), { loose: true }],
//     require("@babel/plugin-proposal-object-rest-spread"),
//   ],
      env: env
// });

module.exports = { presets, plugins };


