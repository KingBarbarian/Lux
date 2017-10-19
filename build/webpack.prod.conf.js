"use strict";

var path = require("path");
var utils = require("./utils");
var webpack = require("webpack");
var config = require("../config");
var merge = require("webpack-merge");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
var NyanProgressPlugin = require("nyan-progress-webpack-plugin");
let isProd = process.env.NODE_ENV === "production";
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

var env =
  process.env.NODE_ENV === "testing"
    ? require("../config/test.env")
    : config.build.env;

var baseWebpackConfig = {
  entry: {
    app: "./src/main.js"
  },
  devServer: {
    compress: true,
    disableHostCheck: true
  },
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
        loader: (function() {
          let _loader = ["babel-loader"];
          if (!isProd && config.dev.cssModules) {
            _loader.push("webpack-module-hot-accept");
          }
          return _loader;
        })(),
        include: [resolve("src"), resolve("test")]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("img/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
        }
      }
    ]
  }
};

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? "#source-map" : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath("js/[name].[chunkhash:8].js"),
    chunkFilename: utils.assetsPath("js/[id].[chunkhash:8].js")
  },
  plugins: [
    new NyanProgressPlugin(),
    new webpack.DefinePlugin({
      "process.env": env
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false, //去掉注释
      compress: {
        warnings: false
      },
      sourceMap: false //打包是否需要带上source文件
    }),
    new ExtractTextPlugin({
      filename: utils.assetsPath("css/[name].[contenthash:8].css"),
      allChunks: true
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new HtmlWebpackPlugin({
      filename:
        process.env.NODE_ENV === "testing" ? "index.html" : config.build.index,
      template: "index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: "dependency"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function(module, count) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, "../node_modules")) === 0
        );
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      chunks: ["vendor"]
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../static"),
        to: config.build.assetsSubDirectory,
        ignore: [".*"]
      }
    ]),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
});

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require("compression-webpack-plugin");
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: new RegExp(
        "\\.(" + config.build.productionGzipExtensions.join("|") + ")$"
      ),
      threshold: 10240,
      minRatio: 0
    })
  );
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
