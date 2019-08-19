module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'airbnb'
  ],
  'env': {
    'browser': true,
    'es6': true
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'globals': {
    'wx': false,
    'windows': false,
    'location': false,
    'gio': false,
    'OpenInstall': false,
    'WeixinJSBridge': false,
    'android': false,
    'WebPerFormAppAction': false
  },
  'plugins': [
    'react'
  ],
  'settings': {
    'react': {
      'version': '16.5'
    }
  },
  'rules': {
    'indent': ['error', 2, {'SwitchCase': 1}],
    'linebreak-style': [0, 'error', 'windows'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'dot-notation': 'off',
    'spaced-comment': 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': ['error', 'never'],
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'object-curly-spacing': ['warn', 'never', {'objectsInObjects': true, 'arraysInObjects': true}],
    'no-use-before-define': 'off',
    'no-restricted-globals': ['warn', 'windows', 'location'],
    'class-methods-use-this': 'off',
    'radix': 'off',
    'global-require': 'off',
    'default-case': 'off',
    'no-param-reassign': 'warn',
    'consistent-return': 'warn',
    'no-else-return': 'warn',
    'no-restricted-syntax': 'warn',
    'no-extend-native': 'warn',
    'no-return-assign': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': ['error', {'allowShortCircuit': true, 'allowTernary': true, 'allowTaggedTemplates': true}],
    'max-len': ['error', {code: 200, ignoreComments: true, ignoreUrls: true, ignoreTemplateLiterals: true}],
    'arrow-parens': ['warn', 'as-needed'],
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'warn',
    'prefer-destructuring': 'off',
    'prefer-template': 'off',
    'no-plusplus': 'off',
    'no-trailing-spaces': 'off',
    'react/prop-types': 'off',
    'react/jsx-tag-spacing': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-duplicates': 'off',
    'import/order': 'off',
    'import/no-dynamic-require': 'off',
    'react/no-did-update-set-state': 'warn',
    'react/no-unused-state': 'warn',
    'react/no-find-dom-node': 'warn',
    'react/forbid-prop-types': 'off',
    'react/jsx-indent-props': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/no-multi-comp': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-indent': [2, 2],
    'react/no-unescaped-entities': 'off',
    'no-prototype-builtins': 'warn',
    'no-nested-ternary': 'warn',
    'no-console': 'off',
  }
};

