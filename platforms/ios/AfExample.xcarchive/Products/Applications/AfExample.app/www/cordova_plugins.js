cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-appsflyer-sdk.appsflyer",
      "file": "plugins/cordova-plugin-appsflyer-sdk/www/appsflyer.js",
      "pluginId": "cordova-plugin-appsflyer-sdk",
      "clobbers": [
        "window.plugins.appsFlyer"
      ]
    },
    {
      "id": "cordova-plugin-appsflyer-sdk.AppsFlyerError",
      "file": "plugins/cordova-plugin-appsflyer-sdk/www/AppsFlyerError.js",
      "pluginId": "cordova-plugin-appsflyer-sdk",
      "clobbers": [
        "AppsFlyerError"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-appsflyer-sdk": "6.0.30",
    "cordova-plugin-whitelist": "1.3.4"
  };
});