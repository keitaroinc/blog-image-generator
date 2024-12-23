const ReactCompilerConfig = {
  optimize: true,
  sourceMap: process.env.NODE_ENV !== "production",
};

module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
    plugins: [
      ["babel-plugin-react-compiler", ReactCompilerConfig], // Must run first
      // Add other plugins here as needed
    ],
  };
};
