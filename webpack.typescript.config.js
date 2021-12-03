const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const glob = require('glob');
const webpack = require('webpack');


const config = ({ filename, input, output, production }) => {
    let optimization = {
        usedExports: false
    };

    if (production === 'false') {
        optimization = {
            mangleWasmImports: false,
            minimize: false,
            usedExports: false
        };
    }

    return {
        entry: {
            [filename || 'app']: glob.sync(`${input}/{,!(node_modules)/**/}!(webpack)*!(.d).ts`)
        },
        mode: (production === 'false' ? 'development' : 'production'),
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        optimization,
        output: {
            path: output,
        },
        plugins: [
            new NodePolyfillPlugin(),
            new webpack.ProvidePlugin({
                Buffer: ['buffer', 'Buffer'],
                process: 'process/browser'
            })
        ],
        resolve: {
            extensions: ['.js', '.ts', '.tsx'],
            fallback: {
                fs: false
            },
            plugins: [
                new TsconfigPathsPlugin()
            ]
        }
    };
};


module.exports = config;
