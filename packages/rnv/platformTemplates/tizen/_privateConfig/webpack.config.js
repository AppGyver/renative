const Configs = require('../_shared/configs.js');
const Extend = require('./webpack.extend.js');

const config = {
    currentDir: __dirname,
    metaTags: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
    environment: 'production',
    extensions: ['tizen', 'smarttv', 'web'],
    ...Extend
};

const C = Configs.generateConfig(config);
const plugins = [C.Plugins.webpack, C.Plugins.html, C.Plugins.harddisk];
if (config.analyzer) plugins.push(C.Plugins.analyzer);

module.exports = {
    entry: C.entry,
    output: C.output,
    module: {
        rules: [C.Rules.babel, C.Rules.css, C.Rules.image, C.Rules.fonts, C.Rules.sourcemap],
    },
    plugins,
    resolve: {
        symlinks: false,
        extensions: C.extensions,
        alias: C.aliases,
    },
};
