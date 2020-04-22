module.exports = function (api) {
  const presets = [
    'babel-preset-expo',
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ];

  const envDevelopment = {
    presets,
    plugins: ['@babel/transform-react-jsx-source'],
  };

  if (api.env(['development', 'test'])) {
    return envDevelopment;
  }

  return {
    presets,
  };
};
