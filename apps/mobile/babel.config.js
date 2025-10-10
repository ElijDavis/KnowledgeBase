// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      require("nativewind/babel"), // ✅ correct way
    ],
  };
};
