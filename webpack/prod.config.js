/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

    mode: 'production',

    entry: {
        'clock': './src/index.js',
    },

    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].js',
        library: 'Clock',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.tsx', '.ts', '.jsx', '.js', 'scss', 'css']
    },

    module: {
        strictExportPresence: true,
        rules: [{
                test: /\.jsx?$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                include: path.resolve(__dirname, '../src/js'),
            }, {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['env'],
                }
            }, {
                test: /\.scss$/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: {
                                discardComments: {
                                    removeAll: true
                                },
                            },
                            importLoaders: 2,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [autoprefixer],
                        }
                    },
                    {
                        loader: 'sass-loader',
                    },
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                options: {
                    'limit': 40000,
                }
            },
        ]
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../types/index.d.ts'),
            to: path.resolve(__dirname, '../dist/index.d.ts'),
        }]),
    ],

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: false,
                extractComments: false,
                uglifyOptions: {
                    compress: {
                        drop_console: true,
                        drop_debugger: true
                    },
                }
            })
        ]
    },
    
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },

    performance: {
        hints: false
    }

};
