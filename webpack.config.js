const webpack = require('webpack');

const env = process.env.NODE_ENV ;  // development or production

const config = {
    mode : env,
    module: {

        rules: [
            {
                test: /\.m?js/,
                exclude: /(node_modules | bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']  //use latest version of javascript
                    }
                }
            }
        ]
    },
    output: {
        globalObject: 'typeof self !== \'undefined\' ? self : this',  // fix for not having window object if used in node .  Ternary operator that ensures global object is binded to this
            //and not window object
        library: 'NodeCommonUtil',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        })
    ]
}


module.exports = config;