module.exports = {
  extends: [
    'airbnb-typescript/base',
    '@react-native',
    'plugin:import/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended'
  ],
  plugins: ['jest', '@typescript-eslint'],
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
  settings: {
    'import/ignore': ['react-native'],
  }
}