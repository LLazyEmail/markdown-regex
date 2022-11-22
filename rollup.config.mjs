import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import builtins from "rollup-plugin-node-builtins";
import babel from "@rollup/plugin-babel";
//-----
import pkg from "./package.json";
import globals from "rollup-plugin-node-globals";
import includePaths from "rollup-plugin-includepaths";

import nodePolyfills from 'rollup-plugin-polyfill-node';

// import json from "rollup-plugin-json";
// import notify from "rollup-plugin-notify";
// import eslint from "rollup-plugin-eslint";

// not all files you want to resolve are .js files
// Default: [ '.mjs', '.js', '.json', '.node' ]
const extensions = [
  ".js",
  //".json"
];

const name = "newsletterConst";

// packages that should be treated as external dependencies, not bundled
// e.g. ['axios']
const external = [
  //"os" -- because it seems that it was imported by polyfills
];

const includePathOptions = {
  include: {},
  paths: ["src"],
  external: [],
  extensions
};

// list of plugins used during building process
const plugins = () => [


  // Allows node_modules resolution
  nodeResolve({
    extensions,

    // the fields to scan in a package.json to determine the entry point
    // if this list contains "browser", overrides specified in "pkg.browser"
    // will be used
    mainFields: ["module", "main", "browser"] // Default: ['module', 'main']
  }),

  // Allows verification of entry point and all imported files with ESLint.
  // @TODO fix and enable eslint for rollup
  // eslint({
  //   /* your options */
  //   fix:true,
  //   throwOnWarning:true,
  //   throwOnError:true

  // }),

  // Allow bundling cjs modules. Rollup doesn't understand cjs
  commonjs({
    ignore: ["conditional-runtime-dependency"]
  }),

  // use Babel to compile TypeScript/JavaScript files to ES5
  babel({
    extensions,
    include: ["src/*"],
    // ignore node_modules/ in transpilation process
    exclude: [
      "node_modules/**",
       // "/src/data/__tests__"
     ],
    // ignore .babelrc (if defined) and use options defined here
    // babelrc: false,
    // use recommended babel-preset-env without es modules enabled
    // and with possibility to set custom targets e.g. { node: '8' }
    // presets: [['env', { modules: false, targets }]],
    // solve a problem with spread operator transpilation https://github.com/rollup/rollup/issues/281
    // plugins: ['babel-plugin-transform-object-rest-spread'],
    // removes comments from output
    comments: false,
    // babelHelpers: 'runtime'
  }),

  // Allow Rollup to import data from JSON file
  // json()
  // json({
  //   include: "src/data/**",
  //
  //   // for tree-shaking, properties will be declared as
  //   // variables, using either `var` or `const`
  //   preferConst: true,
  //
  //   // generate a named export for every property of the JSON object
  //   namedExports: true // Default: true
  // }),
  // Displays rollup errors as system notifications
  includePaths(includePathOptions),
  // notify(),
  globals(),
  builtins(),

  // remove flow annotations from output
  // flow(),

  // copy Flow definitions from source to destination directory
  // copy({
  //   files: ['src/*.flow'],
  //   dest: 'dist',
  // }),

  nodePolyfills()
];

// example for adding plugin for env only
// if(process.env.NODE_ENV == "production") {
//   console.log("[config] In production environment - minifying JS");
//   plugins.push(terser({
//     numWorkers: os.cpus().length,
//     compress: {
//       ecma: 6
//     }
//   }));
// }

export default {
  // source file / entrypoint
  input: "src/index.js",
  external,
  plugins: plugins(),
  // output configuration
  output: [
    {
      // output file location
      file: pkg.main,
      // format of generated JS file, also: esm, and others are available
      format: "cjs"
    },
    {
      // output file location
      file: pkg.module,
      // format of generated JS file, also: esm, and others are available
      format: "es",
      // format: 'esm',
      // add sourcemaps
      sourcemap: true
    },
    {
      // output file location
      file: pkg.browser,
      // format of generated JS file, also: esm, and others are available
      format: "iife",
      // name visible for other scripts
      name,

      // https://rollupjs.org/guide/en#output-globals-g-globals
      globals: {
        // path: "path"
        os: "os"
      }
    }
  ]

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external

  // build es modules or commonjs
};
