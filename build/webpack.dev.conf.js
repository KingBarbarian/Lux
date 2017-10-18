"use strict";

let path = require("path");
var utils = require("./utils");
var webpack = require("webpack");
var config = require("../config");
var merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");
let isProd = process.env.NODE_ENV === "production";
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

const baseWebpackConfig = {
  entry: ["react-hot-loader/patch", "./src/main.js"],
  devServer: {
    port: config.dev.port,
    contentBase: "./dist",
    hot: true
  },
  devtool: "inline-source-map",
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

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${config.dev.port}`
    })
  ]
});
