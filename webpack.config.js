const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  name: "React18-webpack-babel-setting", // 설정 이름
  mode: "development", // production, development // 설정 모드
  devtool: "eval",
  entry: {
    app: "./src/index.js",
  },
  module: {
    rules: [
      {
        // 리액트 바벨 설정
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 템플릿 설정
      minify: true, // 압축 설정
    }),
    new webpack.ProvidePlugin({
      // 리액트 자동 로드
      React: "react",
    }),

    new Dotenv(),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
    sourceMapFilename: "[name].js.map",
  },
  devServer: {
    // 개발 서버 설정
    historyApiFallback: true,
    static: "./dist",
    port: 3000,
    hot: true, // 핫 모듈 교체(HMR) 활성화
    compress: true,
    open: true,
  },
};
