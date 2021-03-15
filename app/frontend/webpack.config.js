const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {index: './src/index.js',}, // entry point to the application
  // development mode
  mode: 'development',
  module: {
    rules:[
      {
        // process .js or .jsx with babel loader
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {presets:["@babel/env"]}
      },
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
      }
    ]
  },
  resolve: {extensions: ['*','.js','.jsx'] }, // file types in app
  // output bundle code
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  // development server 
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port:3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
    watchOptions: {
      ignored: '/node_modules/', // ignore node_modules, no need to watch them
      aggregateTimeout: 500, // delay before reloading
      poll: 1000 // enable polling since fsevents are not supported in docker
  }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};