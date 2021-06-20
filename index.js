module.exports = {
    plugins: ['prettier', 'import', 'unicorn'],
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        'prettier/prettier': 'error',
        'no-console': 'error',
        'no-shadow': 'error',
        'prefer-const': 'error',
        'unicorn/filename-case': [
            'error',
            {
                case: 'kebabCase',
            },
        ],
        'unicorn/no-abusive-eslint-disable': 'error',
        'unicorn/explicit-length-check': 'error',
        'no-useless-rename': 'error',
        'import/no-cycle': 'error',
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
            },
        ],
        'import/newline-after-import': 'error',
        'import/group-exports': 'error',
    },
    overrides: [
        {
            // unit test overrides
            files: ['jest-config/*', '*.spec.js'],
            plugins: ['jest'],
            extends: ['plugin:jest/recommended'],
            env: {
                jest: true,
            },
        },
    ],
};
