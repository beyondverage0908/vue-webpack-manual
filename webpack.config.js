const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

console.log(`current node running env: ${process.env.NODE_ENV}`);
console.log(`current node running env: ${process.env.ENV}`);

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  entry: {
    index: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].[contenthash].bundle.js', // default
    path: path.join(__dirname, 'dist/static/'),
    publicPath: '/static/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]-[contenthash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"',
        OPT: isDev ? '"MirLi"' : '"MirWang"'
      }
    }),
    new HTMLPlugin()
  ]
}


if (isDev) {
  config.devtool = '#cheap-module-eval-source-map',
  config.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    open: true,
    hot: true
  },
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ),
  config.mode = 'development',
  config.output.filename = '[name].[hash]].bundle.js'
} else {
  config.mode = 'production'
}

module.exports = config
