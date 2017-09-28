const packageJSON = require("../../package.json");
module.exports = {
  API_ROOT: "http://crmapi.dev.nongfenqi.com",
  FILE_API: "http://file.dev.nongfenqi.com",
  VERSION_API: "http://appversion.nongfenqi.net",
  GALEN_API: "http://galen.dev.nongfenqi.com",
  VERSION: packageJSON.version,
  STATIC_ROOT: "http://static.nongfenqi.net"
};
