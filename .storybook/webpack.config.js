const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [
      path.join(__dirname, "../src"),
      path.join(__dirname, "../stories")
    ],
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: {
          configFileName: "./.storybookTsConfigJson"
        }
      },
      { loader: require.resolve("react-docgen-typescript-loader") },
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
