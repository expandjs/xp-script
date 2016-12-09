// Const
const webpack = require('webpack');

// Exporting
module.exports = {
    entry: './index.js',
    externals: {
        'expandjs': 'XP',
        'xp-emitter': 'XPEmitter'
    },
    output: {
        filename: 'xp-script.js',
        path: './dist'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}, output: {comments: false}})
    ]
};
