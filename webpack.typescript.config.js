const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');


const config = ({ filename, input, library, output, production }) => {
    let optimization = {
            mangleWasmImports: false,
            usedExports: false
        };

    filename = filename || 'app';
    production = production ? false : true;

    if (production) {
        optimization.minimize = false;
    }

    return {
        entry: {
            [(filename || 'app') + (production ? '.min' : '')]: input
        },
        mode: (production ? 'development' : 'production'),
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
