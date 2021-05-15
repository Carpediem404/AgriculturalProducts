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
      
      '/webdapeng_war': {
        target: 'http://1.15.42.14:8188/',
        changeOrigin: true,
        secure: false,
        ws: true,
        // rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
     
    },
  },
});
