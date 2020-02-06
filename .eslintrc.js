module.exports = {
  'env': {
    'es6': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'prettier',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'plugins': [
    '@typescript-eslint',
    'prettier'
  ],
  "ignorePatterns": ["**/*.js", "node_modules/"],
  'rules': {
    // 'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'quotes': [1, 'single'],
    'no-multiple-empty-lines': 'warn',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    "indent": ["error", 4]
  },
  'excludes': [
    ''
  ]
};