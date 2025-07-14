import { defineConfig, transformerDirectives, transformerVariantGroup, presetWebFonts, presetIcons } from 'unocss'
import presetWind4 from '@unocss/preset-wind4'

export default defineConfig({
  theme: {
    colors: {
      'primary': 'var(--c-primary)',
      'secondary': 'var(--c-secondary)',
      'secondary-dark': 'var(--c-secondary-dark)',
      'tertiary': 'var(--c-tertiary)'
    }
  },
  shortcuts: [
    {
      'min-h-content': 'min-h-[calc(100dvh-168px-100px)]',
      'flex-center': 'items-center justify-center'
    }
  ],
  presets: [
    presetWind4(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Roboto', 'Noto Sans TC'],
        dosis: 'Dosis:400,700,800'
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})
