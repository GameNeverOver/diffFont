const path = require('path');
const minimist = require("minimist");

const argv = minimist(process.argv.slice(2));
const env = process.env.NODE_ENV || argv.env;
const type = argv.type
const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
    projectName: 'taro-design',
    date: '2019-7-31',
    designWidth: 750,
    deviceRatio: {
        '640': 2.34 / 2,
        '750': 1,
        '828': 1.81 / 2
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    babel: {
        sourceMap: true,
        presets: [
            ['env', { modules: false }]
        ],
        plugins: [
            'transform-decorators-legacy',
            'transform-class-properties',
            'transform-object-rest-spread', ['transform-runtime', {
                "helpers": false,
                "polyfill": false,
                "regenerator": true,
                "moduleName": 'babel-runtime'
            }]
        ]
    },
    defineConstants: {},
    copy: {
        patterns: [],
        options: {
            ignore: ['*.js', '*.html', '*.css']
        }
    },
    alias: {
        '~': path.join(__dirname, '../', 'src')
    },
    mini: {
        webpackChain(chain, webpack) {},
        cssLoaderOption: {},
        lessLoaderOption: {
            javascriptEnabled: true,
            paths: [
                path.join(__dirname, "../src/modules"),
                path.join(__dirname, "../node_modules")
            ],
            globalVars: { env, type }
        },
        imageUrlLoaderOption: {
            // limit: 100240
        },
        postcss: {
            autoprefixer: {
                enable: true,
                config: {
                    browsers: [
                        'last 3 versions',
                        'Android >= 4.1',
                        'ios >= 8'
                    ]
                }
            },
            pxtransform: {
                enable: false,
                config: {

                }
            },
            url: {
                enable: true,
                config: {
                    limit: 100240 // 设定转换尺寸上限
                }
            },
            cssModules: {
                enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]'
                }
            }
        }
    },
    h5: {
        publicPath: "/",
        staticDirectory: 'static',
        webpackChain(chain, webpack) {},
        output: {
            // oss 地址
            // publicPath: 'http://localhost:8080/dist/',
            filename: 'js/[name].[hash].js',
            chunkFilename: 'js/[name].[chunkhash].js'
        },
        fontUrlLoaderOption: {
            test: /static\/fonts\/\.(ttf|eot|svg|woff|woff2)(\?.*)?$/,
            name: 'static\/fonts\/[name].[hash].[ext]'
        },
        imageUrlLoaderOption: {
            test: /static\/images\/\.(png|jpe?g|gif|svg)(\?.*)?$/,
            name: 'static\/images\/[name].[hash].[ext]'
        },
        miniCssExtractPluginOption: {
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[name].[chunkhash].css',
        },
        lessLoaderOption: {
            javascriptEnabled: true,
            paths: [
                path.join(__dirname, "../src/modules"),
                path.join(__dirname, "../node_modules")
            ],
            globalVars: { env, type }
        },
        postcss: {
            autoprefixer: {
                enable: true,
                config: {
                    browsers: [
                        'last 3 versions',
                        'Android >= 4.1',
                        'ios >= 8'
                    ]
                }
            },
            pxtransform: {
                enable: false,
                config: {

                }
            },
            cssModules: {
                enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]'
                }
            }
        }
    },
    deviceRatio: {
        '750': 1 / 2,
        '375': 1
    }
}

module.exports = function(merge) {
    const mergeConfig = env === 'development' ? require('./dev') : require('./prod');
    // 小程序中会携带双引号。把它删掉
    if (argv.type === 'weapp') {
        mergeConfig.env.NODE_ENV = mergeConfig.env.NODE_ENV.replace(/"/g, '');
    }
    return merge({}, config, mergeConfig)
}
