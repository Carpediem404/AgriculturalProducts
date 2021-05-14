import vue from '@vitejs/plugin-vue';
// import alias from '@rollup/plugin-alias';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  // alias: {
  //   '@/': '/src/',
  // },

  alias: [
    { find: /@\/(.*)/, replacement: '/src/$1' },
    // { find: 'vue', replacement: 'vue/dist/vue.esm-bundler.js' },
  ],
  optimizeDeps: {
    exclude: ['vuedraggable', 'element-plus/lib/locale/lang/zh-cn'],
  },
  // build: {
  //   base: 'http://10.37.0.213:30118/',
  // },
  esbuild: {},
  server: {
    port: 7777,

    hmr: { overlay: false },

    proxy: {
      '/api': {
        // target: 'https://blog.csdn.net/weixin_45292658',
        // target: 'http://10.37.0.213:30118/',

        // target: 'http://10.37.0.213:30118/',
        target: 'http://124.16.138.126:20009/',
        // target: 'http://192.168.22.4:8901/',
        // target: 'http://10.37.0.213:30119/ ',
        changeOrigin: true,
        secure: false,
        ws: true,
        // rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
      '/media': {
        // target: 'https://blog.csdn.net/weixin_45292658',
        // target: 'http://10.37.0.213:30118/',
        // target: 'http://10.37.0.213:30119/',
        // target: 'http://192.168.11.111:8800/',
        target: 'http://124.16.138.126:20008/',
        changeOrigin: true,
        secure: false,
        // rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
});
