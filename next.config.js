const withFonts = require('next-fonts');
const withSass = require('@zeit/next-sass');
const optimizedImages = require('next-optimized-images');
const path = require('path');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
    enableSvg: true,
    poweredByHeader: false,
    webpack(config, options) {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['static'] = path.join(__dirname, 'static')
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
}

module.exports = withPlugins(
    [
        [optimizedImages, { handleImages: ['jpeg', 'png']}],
        withFonts,
        withSass
    ],
    nextConfig
);


 
