module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-scss',
  ],
  ignoreFiles: [
    '**/node_modules/**/*',
    '**/*.tsx',
    '**/*.ts',
  ],
  rules: {
    'function-name-case': null,
    'at-rule-empty-line-before': null,
    'color-hex-case': 'upper',
    'font-family-no-missing-generic-family-keyword': null,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: [
          'if',
          'else',
        ],
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: [
          'page',
        ],
      },
    ],
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'scss/at-mixin-parentheses-space-before': 'never',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-empty-line-before': [
      'always',
      {
        except: [
          'first-nested',
          'after-comment',
          'after-dollar-variable',
        ],
      },
    ],
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/double-slash-comment-empty-line-before': 'always',
  },
}
