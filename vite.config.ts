import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS()
  ],
  resolve:{
    alias:[
      {find: "@", replacement: path.resolve(__dirname, 'src')}
    ]
  },
  base: '/Question-Template/',
  build:{
    outDir: 'docs'
  }
})
