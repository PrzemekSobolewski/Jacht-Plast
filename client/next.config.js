const withImages = require('next-images');
const withFonts = require('next-fonts');
const withSass = require('@zeit/next-sass');
module.exports = withImages(withSass(withFonts({
    enableSvg: true,
    webpack(config, options) {
        return config;
    }
})));