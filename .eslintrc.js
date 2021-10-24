module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        parser: '@typescript-eslint/parser',
        sourceType: 'module', // allow the use of imports statements
        ecmaVersion: 2020, // allow the parsing of modern ecmascript
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'standard',
        'prettier',
    ],
    rules: {
        //   "prettier/prettier": "error",
        'comma-dangle': ['error', 'only-multiline'],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'space-before-function-paren': ['error', 'always'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        indent: ['error', 4],
    },
}
