module.exports = {
    extends: ['./index', 'plugin:node/recommended'],
    env: {
        commonjs: true,
        node: true,
    },
    rules: {
        'node/prefer-promises/fs': 'error',
        'node/exports-style': ['error', 'module.exports'],
    },
};
