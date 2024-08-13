const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[chunkhash].js",
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    preferRelative: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
};
