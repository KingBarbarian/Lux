var path = require("path");

module.exports = {
  build: {
    env: require("./prod.env"),
    index: path.resolve(__dirname, "../dist/index.html"),
    assetsRoot: path.resolve(__dirname, "../dist"),
    //资源文件夹
    assetsSubDirectory: "static",
    //产出的公共道路
    assetsPublicPath: "/",
    productionSourceMap: true,
    //是否开启gzip
    productionGzip: true,
    productionGzipExtensions: ["js", "css"],
    // 是否开启 css Module
    cssModules: false,
    bundleAnalyzerReport: true
  },
  dev: {
    env: require("./dev.env"),
    port: 8090,
    autoOpenBrowser: true,
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {},
    // 是否开启 css Module
    cssModules: false,
    cssSourceMap: false
  }
};
