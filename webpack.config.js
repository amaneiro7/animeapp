const webpack = require('webpack')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const shouldAnalyze = process.argv.includes('--analyze')

const nodeEnv = process.env.NODE_ENV || 'development'

const plugins = []
const optimization = {}
if (nodeEnv === 'production')
  return (this.optimization = {
    splitChunks: {
      chunks: 'all',
    },
  })

if (shouldAnalyze) {
  plugins.push(new BundleAnalyzerPlugin())
}

const config = {
  mode: nodeEnv,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: '.',
  },
  plugins,
  optimization,
}

module.exports = config
