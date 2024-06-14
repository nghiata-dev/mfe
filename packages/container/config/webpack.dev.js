const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const webpack = require("webpack");
const path = require("path");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/",
  },
  entry: [
    "webpack-dev-server/client?http://localhost:8080", // WebpackDevServer host and port
    "webpack/hot/only-dev-server", // "only" prevents reload on syntax errors
    "./src/index.js", // Your entry point
  ],
  devServer: {
    port: 8080,
    historyApiFallback: {
      historyApiFallback: true,
    },
    hot: true,
    open: true, // Automatically open the browser
    // contentBase: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      shared: {
        ...packageJson.dependencies,
        "nghiata-mfe-base-components": {
          // singleton: true,
          // eager: false,
          requiredVersion:
            packageJson.dependencies["nghiata-mfe-base-components"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(commonConfig, devConfig);
