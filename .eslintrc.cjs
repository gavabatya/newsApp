module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors','plugin:import/warnings',
    'plugin:import/typescript'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react-hooks', 'prettier', 'import'],
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        ecmaFeatures: {
          jsx: false,
        },
        ecmaVersion: 'es6',
        sourceType: 'module',
      },
      files: ['*.ts', '*.tsx'],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        'prettier',
      ],
      plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import'],
      rules: {
        quotes: ['error', 'single', { avoidEscape: true }],
        'no-empty-function': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'prettier/prettier': 'error',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'no-inner-declarations': 'off',
        'import/no-unresolved': 'error',
        'import/order':['error',{
          'groups':
            [
              ['builtin', 'external'],
              ['internal', 'index', 'sibling'],
              ['parent'],
              'object',
              'unknown'
            ],
          // 'pathGroups': [
          //   {
          //     pattern: '/**',
          //     group: 'external',
          //     position: 'before'
          //   },
          //   {
          //     pattern: '@/**',
          //     group: 'internal',
          //     position: 'before'
          //   },
          //   {
          //     pattern: '*.scss',
          //     group: 'index',
          //     position: 'after'
          //   },
          // ],
          'newlines-between': 'always'
        }],
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
  ],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-empty-function': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'no-inner-declarations': 'off',
  }
};
