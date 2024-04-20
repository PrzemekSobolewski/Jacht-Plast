const withFonts = require('next-fonts');
const withSass = require('@zeit/next-sass');
const optimizedImages = require('next-optimized-images');
const path = require('path');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
    enableSvg: true,
    poweredByHeader: false,
   
    webpack(config, {isServer}) {
        const prefix =  config.basePath || '';
        config.module.rules.push({
          test: /\.mp4$/,
          use: [{
            loader: 'file-loader',
            options: {
              publicPath: `${prefix}/_next/static/media/`,
              outputPath: `${isServer ? '../' : ''}static/media/`,
              name: '[name].[hash].[ext]',
            },
          }],
        });
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
            '/produkcja.html': {page: '/produkcja'},
            '/transport-jachtow.html': {page: '/transport-jachtow'},
            '/kontakt.html': {page: '/kontakt'},
        }
    },
    async redirects() {
        return [
           { source: '/transport', destination: '/transport-jachtow', permanent: true },
           { source: '/production', destination: '/produkcja', permanent: true },
           { source: '/contact', destination: '/kontakt', permanent: true },
        ]
      },
}

module.exports = withPlugins(
    [
        [optimizedImages, { handleImages: ['jpeg', 'png', 'webp']}],
        withFonts,
        withSass,
    ],
    nextConfig
);


 
