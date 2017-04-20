/* eslint-disable import/no-extraneous-dependencies, global-require */
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const SRC_PATH = 'src';
const BUILD_PATH = 'dist';
const PUBLIC_PATH = 'assets/';
const BUNDLE_NAME = 'bundle.js';

const config = {
  context: path.join(__dirname, SRC_PATH),
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
    path: path.join(__dirname, BUILD_PATH),
    publicPath: PUBLIC_PATH,
  },
  devServer: {
    contentBase: path.join(__dirname, SRC_PATH),
  },
};

export default config;
