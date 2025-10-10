// apps/mobile/babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel", // ✅ must be in presets, not plugins
    ],
    plugins: [
      // If you use Reanimated, keep this last:
      // "react-native-reanimated/plugin",
    ],
  };
};
