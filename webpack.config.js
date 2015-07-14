module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './src/js/app.js']
    },

    output: {
        path: './build',
        filename: 'app.js'
    },

    module: {
        loaders: [
            {
               test: /\.jsx?$/,
               exclude: /node_modules/,
               loader: 'babel'
            },
            {
                test: /\.s?css$/,
                loader: "style!css!sass"
            },
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    }
};
