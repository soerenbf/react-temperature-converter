var path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/index.jsx')
    },
    output: {
        filename: '[name].js',
        path:  path.resolve(__dirname, 'dist')
    },
    devtool: 'sourcemap',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: ['node_modules']
            }
        ]
    }
};