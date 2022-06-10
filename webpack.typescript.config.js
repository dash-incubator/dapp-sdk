const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');


const config = ({ filename, input, library, output, production }) => {
    let optimization = {
            mangleWasmImports: false
        };

    filename = filename || 'app';
    production = production == 'true';

    if (!production) {
        optimization.minimize = false;
    }

    return {
        entry: {
            [(filename || 'app') + (production ? '.min' : '')]: input
        },
        mode: (production ? 'production' : 'development'),
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
            // fixes ReferenceError: window is not defined
            globalObject: "(typeof self !== 'undefined' ? self : this)",
            library: library || filename,
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
