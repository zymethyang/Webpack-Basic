const path = require('path');

const config = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module:{
        rules:[
            {
                use:'babel-loader',
                test:/\.js$/,
            }
        ]
    }
}

module.exports = config;