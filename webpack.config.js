"use strict";

const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
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
        test: /\.tsx?$/,
        loader: "babel-loader?presets[]=es2016!ts-loader",
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
    ],
  },
};
