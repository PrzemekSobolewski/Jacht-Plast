const withImages = require('next-images');
const withFonts = require('next-fonts');
const withSass = require('@zeit/next-sass');

module.exports = 
    withImages(withSass(withFonts({
            enableSvg: true,
            poweredByHeader: false,
            webpack(config, options) {
                return config;
            },
            exportPathMap: async function (
                defaultPathMap, {dev, dir, outDir, distDir, buildId}
            ) {
                return {
                    '/': {page: '/'},
                    '/production.html': {page: '/production'},
                    '/transport.html': {page: '/transport'},
                    '/contact.html': {page: '/contact'},
                }
            }
        },
    )));

/*module.exports = {
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
        ],
        rules: [
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },
        ],
    }
}*/
