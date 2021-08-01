module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
          // Compile Post CSS loader
          "postcss-loader"
        ],
      }
    ],
  },
  devServer: {
    historyApiFallback: true
  }
};
