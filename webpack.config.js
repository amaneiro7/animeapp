const webpack = require('webpack')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const shouldAnalyze = process.argv.includes('--analyze')

const nodeEnv = process.env.NODE_ENV || 'development'

const plugins = []

if (shouldAnalyze) {
  plugins.push(new BundleAnalyzerPlugin())
}

const config = {
  mode: nodeEnv,
  entry: './frontend/index.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js',
  },
  devServer: {
    static: '.',
  },
  plugins,
}

module.exports = config
