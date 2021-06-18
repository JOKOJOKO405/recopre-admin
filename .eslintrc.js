module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue-max-attributes-per-line': 'off',
    'dot-notation': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html:{
          void: 'always'
        }
      }
    ],
    'vue/singleline-html-element-content-newline': [
      'error', {
        ignores: ['div', 'pre', 'textarea', ...INLINE_ELEMENTS]
      }
    ]
  },
}
