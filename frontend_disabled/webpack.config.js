// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  mode: 'development',

  entry: {
    app: './src/App.tsx',
  },

  output: {
    path: path.join(__dirname, './dist/js'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    contentBase: path.join(__dirname, './dist/'),
    publicPath: '/js/',
  },
}
