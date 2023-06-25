// eslint-disable-next-line no-undef
module.exports = {
    plugins: [
        '@typescript-eslint',
        // 'eslint-plugin-tsdoc',
        'jest',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:jest/style',
    ],
    parser: '@typescript-eslint/parser',
    env: {
    // Your environments (which contains several predefined global variables)
        'jest': true
    },
    globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
    },
    rules: {
    // Customize your rules
        'quotes': ['error', 'single', { 'avoidEscape': true }],
        'semi': ['error', 'always'],
        'no-console': ['error'],
        'indent': ['error', 4],
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }],
    }
};