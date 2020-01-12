const path = require('path');

function resolve (dir) {
    return path.join(__dirname, '.', dir);
}

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
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@lib', resolve('/src/libs'))
            .set('@util', resolve('/src/utils'))
            .set('@actions', resolve('/src/actions'))
            .set('@static', resolve('/src/static'))
            .set('@controller', resolve('/src/actions/controller.js'));
    }
};
