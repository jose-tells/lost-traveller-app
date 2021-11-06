const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|styl)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.(png|svg|jpg|mp4)$/,
        use: ['file-loader'], // The file-loader resolves import/require() on a file into a url and emits the file into the output directory.
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true, // If it's a 404 response the index.html will be the fallback
    liveReload: true, // Hot Module Replacement (HMR) for live reloads
    open: true, // When server has started open the default-browser
    port: 8000,
  },
  plugins: [
    // HtmlWebpackPlugin generate an HTML5 file that includes the webpack configuration in a script at the top of the HTML file.
    new HtmlWebpackPlugin({
      // Webpack relative or absolute path to the template.
      template: './public/index.html',
      // The file to write the HTML to. Defaults to index.html.
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css', // This will save the file into the assets folder with the previous name that we set.
    }),
  ],
};
