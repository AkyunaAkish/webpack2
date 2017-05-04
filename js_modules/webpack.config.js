const path = require('path');

const config = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js/,
            exclude: /(node_modules | bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-1']
            }
        }]
    },
    resolve: {
        extensions: ['.js']
    }
};

module.exports = config;