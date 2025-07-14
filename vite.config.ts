import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/vue-candy-store/',
  plugins: [
    vue(),
    vueDevTools(),
    UnoCSS(),
    Components({
      dts: 'src/components.d.ts'
    }),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia'
      ],
      dirs: [
        'src/api',
        'src/composables',
        'src/stores'
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
