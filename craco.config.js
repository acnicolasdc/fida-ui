const CracoLessPlugin = require('craco-less')
const path = require('path')

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
        },
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#F4831B' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}
