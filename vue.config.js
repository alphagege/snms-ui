const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '.', dir);
}

module.exports = {
    productionSourceMap: false,
    lintOnSave: false,
    devServer: {
        host: '9.5.6.132',
        port: 9527,
        proxy: {
            '^/auditing': {
                target: 'http://9.1.9.189:8088', // 测试
                changeOrigin: true,
                xfwd: true,
                logLevel: 'debug'
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@lib', resolve('/src/libs'))
            .set('@util', resolve('/src/utils'))
            .set('@actions', resolve('/src/actions'))
            .set('@static', resolve('/src/static'))
            .set('@controller', resolve('/src/actions/controller.js'));
        config.resolve.extensions
            .add('.vue')
            .add('.js')
            .add('.json');
        // 一个规则里的 基础Loader
        // svg是个基础loader
        const svgRule = config.module.rule('svg');
        // 清除已有的所有 loader。
        // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        svgRule.uses.clear();
        // 添加要替换的 loader
        svgRule
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            });

        // 修改images loader 添加svg处理
        // https://juejin.im/post/5c3c544c6fb9a049d37f5903
        const imagesRule = config.module.rule('images');
        imagesRule.exclude.add(resolve('src/icons'));
        config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);
    },
    css: {
        loaderOptions: {
            sass: {
                data: `
                @import "@/styles/public.scss";
                @import "@/styles/public-class.scss";
                @import '@/styles/index.scss';
                @import '@/styles/variables.scss';
                @import '@/styles/mixin.scss';
                @import '@/styles/transition.scss';
                @import '@/styles/element-ui.scss';
                @import '@/styles/sidebar.scss';
                @import '@/styles/btn.scss';
                @import '@/styles/position.scss';
                @import '@/styles/font.scss';
            `
            }
        }
    }
};