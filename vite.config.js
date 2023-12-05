import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

// icon相关
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "~/assets/css/element/index.scss" as *;',
      },
    },
  },
  plugins: [
    vue(),
    Pages({
      dirs: 'src/views',
      exclude: ['**/components/*.vue'],
      importMode: 'async',
    }),
    Layouts({
      layoutsDirs: 'src/layout', // 布局文件存放目录
      defaultLayout: 'default', // 默认布局，对应 src/layout/default.vue
    }),
    Icons({ compiler: 'vue3' }),
    AutoImport({
      dts: true,
      dirs: ['./src/utils', './src/api', './src/store/modules'],
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        {
          // axios: [
          //   ['default', 'axios'], // import { default as axios } from 'axios'
          // ],
          pinia: ['storeToRefs'],
        },
      ],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'icon',
        }),
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      directoryAsNamespace: true,
      // dirs: ['src/components', 'src/views/**/components'],
    }),
    Icons({
      autoInstall: true,
      customCollections: {
        my: FileSystemIconLoader('src/assets/icons'),
      },
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 7080,
  },
})
