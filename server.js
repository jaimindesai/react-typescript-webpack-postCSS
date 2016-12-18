const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const DashboardPlugin = require('webpack-dashboard/plugin');
const host = 'localhost';
const port = 3000;
const opener = require('opener');

let compiler = webpack(config);
compiler.apply(new DashboardPlugin());

new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    assets: true,
    modules: false,
    cached: false,
    chunk: false,
  },
}).listen(port, host, (err) => {
        if (err) {
            console.log(err);
        }
        console.log(`Listening at ${host}:${port}`);
        opener(`http://${host}:${port}`);
    });
