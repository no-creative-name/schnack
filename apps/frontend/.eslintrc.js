module.exports = {
  extends: [
    'airbnb-typescript/base',
    '@react-native',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'printWidth': 120,
      }
    ],
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './test/tsconfig.json'],
  },
  
}