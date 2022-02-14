const CracoLessPlugin = require('craco-less')
const path = require('path')

module.exports = {
    webpack: {
        alias: {
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@routes': path.resolve(__dirname, 'src/routes'),
            '@providers': path.resolve(__dirname, 'src/providers'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
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
