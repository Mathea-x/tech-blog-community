import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置自动导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'vue-router'],
      // 生成自动导入的声明文件
      dts: 'src/auto-imports.d.ts',
    }),
    // 配置组件按需导入
    Components({
      resolvers: [ElementPlusResolver()],
      // 组件名称转换方式：保持原样
      directoryAsNamespace: false,
      // 生成组件类型声明文件
      dts: 'src/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
