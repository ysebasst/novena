module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: "Novena Aguinaldos",
    themeColor: "#333333",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",

    // // configure the workbox plugin
    // workboxPluginMode: "InjectManifest",
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: "dev/sw.js",
    //   // ...other Workbox options...
    // },
  },
};
