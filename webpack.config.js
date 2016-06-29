"use strict";

const webpack = require("webpack");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: "babel-loader?presets[]=es2016!ts-loader",
      },
    ],
  },
};
