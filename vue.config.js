const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/bumblebee-apis/*": {
      target: "http://localhost:8081",
      changeOrigin: true,
      pathRewrite: {'^/bumblebee-apis' : ''},
      logLevel: 'debug'
      }
    }
  },
})
