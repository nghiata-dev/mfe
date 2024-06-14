const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require("webpack");

const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8081/",
  },
  entry: [
    "webpack-dev-server/client?http://localhost:8081", // WebpackDevServer host and port
    "webpack/hot/only-dev-server", // "only" prevents reload on syntax errors
    "./src/index.js", // Your entry point
  ],
  devServer: {
    port: 8081,
    historyApiFallback: {
      historyApiFallback: true,
    },
    hot: true,
    // contentBase: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: {
        // ...packageJson.dependencies,
        // "nghiata-mfe-base-components": {
        //   singleton: true,
        //   eager: false,
        //   requiredVersion:
        //     packageJson.dependencies["nghiata-mfe-base-components"],
        // },
        react: {
          singleton: true,
          requiredVersion: "^18.2.0",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.2.0",
        },
      },
    }),
    // new HtmlWebpackPlugin({
    //   template: "./public/index.html",
    // }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(commonConfig, devConfig);
