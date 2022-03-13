module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        quoteProps: 'consistent',
        bracketSpacing: true,
        arrowParens: 'always',
        endOfLine: 'auto',
        printWidth: 120,
      },
    ],
    'no-console': 'off',
    'no-plusplus': 'off',
    'max-depth': ['error', 2],
    'max-lines-per-function': 'off', // ['error', 15],
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'no-alert': 'off',
    'max-len': 'off',
    'import/extensions': 'off',
    'no-return-assign': 'off',
    'linebreak-style': 0,
    'import/no-unresolved': 'off', // ['error', { caseSensitive: false }],
    'no-param-reassign': 'off',
    'no-undef': 'off',
  },
};
