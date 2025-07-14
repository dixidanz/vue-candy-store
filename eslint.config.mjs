import dixidan from '@dixidan/eslint-config'

export default dixidan({
  unocss: true,
  typescript: {
    overrides: {
      'unused-imports/no-unused-vars': 'off'
    }
  },
  vue: {
    overrides: {
      'vue/html-self-closing': ['warn', {
        html: { normal: 'never', void: 'always' }
      }]
    }
  }
})
