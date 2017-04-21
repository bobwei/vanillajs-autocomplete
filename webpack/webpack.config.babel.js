/* eslint-disable import/no-extraneous-dependencies, global-require */
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const SRC_PATH = path.resolve(__dirname, '../example');
const BUILD_PATH = path.resolve(__dirname, '../dist/assets');
const PUBLIC_PATH = 'assets/';
const BUNDLE_NAME = 'bundle.js';

const config = {
  context: SRC_PATH,
  entry: './index.js',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: [
          'babel-loader',
          'eslint-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(scss)$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!postcss-loader!sass-loader?outputStyle=expanded',
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [
          require('autoprefixer'),
        ],
      },
    }),
  ],
  output: {
    filename: BUNDLE_NAME,
    path: BUILD_PATH,
    publicPath: PUBLIC_PATH,
  },
  devServer: {
    contentBase: SRC_PATH,
  },
};

export default config;
