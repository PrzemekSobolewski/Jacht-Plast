const withFonts = require('next-fonts');
const withSass = require('@zeit/next-sass');
const optimizedImages = require('next-optimized-images');
const path = require('path');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
    enableSvg: true,
    poweredByHeader: false,
    webpack(config, {isServer}) {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['static'] = path.join(__dirname, 'static')
        if (isServer) {
            require("./scripts/sitemap-generator");
        }
        return config;
    },
    exportPathMap: async function (
        defaultPathMap, {dev, dir, outDir, distDir, buildId}
    ) {
        return {
            '/': {page: '/'},
            '/production.html': {page: '/produkcja'},
            '/transport.html': {page: '/transport-jachtow'},
            '/contact.html': {page: '/kontakt'},
        }
    }
}

module.exports = withPlugins(
    [
        [optimizedImages, { handleImages: ['jpeg', 'png', 'webp']}],
        withFonts,
        withSass,
    ],
    nextConfig
);


 
