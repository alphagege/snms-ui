module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    host: 'localhost',
    port: 8888
    // proxy: {
    //     '^/auditing': {
    //         target: 'http://9.1.9.189:8088', // 测试
    //         changeOrigin: true,
    //         xfwd: true,
    //         logLevel: 'debug'
    //     }
    // }
  }
};
