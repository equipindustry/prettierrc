const defaults = require('./prettier.config');
module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      defaults,
      {
        usePrettierrc: true,
      },
    ],
  },
};
