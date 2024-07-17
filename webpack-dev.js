// const path = require("path");
// module.exports = {
//   entry: {
//     main: "./server.js",
//   },
//   output: {
//     // eslint-disable-next-line no-undef
//     path: path.join(__dirname, "dist"),
//     publisthPath: "/",
//     filename: "[name].js",
//     clean: true,
//   },
//   mode: "development",
//   target: "node",
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: "bable-loader",
//       },
//     ],
//   },
// };

const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: {
    main: "./server.js",
  },
  mode: "development",
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  output: {
    filename: "server.js",
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
};
