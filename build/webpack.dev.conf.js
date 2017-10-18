"use strict";

let path = require("path");
var utils = require("./utils");
var webpack = require("webpack");
var config = require("../config");
var merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
let isProd = process.env.NODE_ENV === "production";
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

const baseWebpackConfig = {
  entry: {
    app: "./src/main.js"
  },
  devServer: {
    port: config.dev.port,
    contentBase: "./dist",
    hot: true
  },
  devtool: "cheap-source-map",
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js",
    publicPath: isProd
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [resolve("src"), resolve("node_modules")],
    alias: {
      "@": resolve("src")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        include: [resolve("src")],
        exclude: /node_modules/
      }
    ]
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
};

Object.keys(baseWebpackConfig.entry).forEach(function(name) {
  baseWebpackConfig.entry[name] = [
    "react-hot-loader/patch",
    "./build/dev-client"
  ].concat(baseWebpackConfig.entry[name]);
  console.log(baseWebpackConfig.entry);
});

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
});
