const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'eval',
  context: path.resolve('src'),
  entry: {
    web: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './index',
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'bootstrap/dist/css/bootstrap.css'

    ],
  },
 output: {
    devtoolLineToLine: true,
    path: path.resolve('build'),
    publicPath: '/',
    filename: 'js/[name].js',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  exclude: /node_modules/,
  resolve: {
    root: [path.resolve(__dirname, 'node_modules')],
    extensions: ['', '.ts', '.js', '.tsx'],
  },
  resolveLoader: {
    root: [path.resolve(__dirname, 'node_modules')],
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['react-hot-loader/webpack', 'ts-loader'],
      include: path.resolve(__dirname, 'src')
    }, {
      test: /\.p?css$/,
      loader: ExtractTextPlugin.extract(['css', 'postcss?sourceMap=inline']),
    }, {
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.html$/,
      loader: 'raw',
    }, {
      test: /\.(woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?|otf)$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=public/fonts/[name].[ext]',
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&name=public/fonts/[name].[ext]',
    }, {
      test: /\.(gif|jpe?g|png)$/,
      loader: 'url-loader?limit=10000&name=public/images/[name].[ext]',
    }, {
      test: /isotope/,
      loader: 'imports?define=>false&this=>window'
    }],
  },
  tslint: {
    configuration: require('./tslint.json')
  },
  postcss: (webpack) => {
    return [
      require('stylelint'),
      require('postcss-import')({addDependencyTo: webpack}),
      require('precss'),
      require('postcss-nested'),
      require('postcss-cssnext')
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'js/vendor.bundle.js',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html'),
      inject: true,
    }),
   
    new ExtractTextPlugin('public/[name].css'),
  ],


}