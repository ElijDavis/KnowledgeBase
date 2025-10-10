// apps/mobile/babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel", // ✅ must be in presets, not plugins
    ],
    plugins: [
      // other plugins can go here if you add them later
      "react-native-reanimated/plugin", // ✅ must be last
    ],
  };
};
