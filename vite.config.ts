import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'
// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    plugins: [react(), svgr()],
    server: {
      port: 3000,
    },

    resolve: {
      alias: [
        {
          find: 'screen',
          replacement: path.resolve(__dirname, 'src/screen'),
        },
        {
          find: 'layout',
          replacement: path.resolve(__dirname, 'src/layout'),
        },
        {
          find: 'components',
          replacement: path.resolve(__dirname, 'src/components'),
        },
        {
          find: 'store',
          replacement: path.resolve(__dirname, 'src/store'),
        },
        {
          find: 'apollo',
          replacement: path.resolve(__dirname, 'apollo'),
        },
        {
          find: 'utils',
          replacement: path.resolve(__dirname, 'src/utils'),
        },
        {
          find: 'assets',
          replacement: path.resolve(__dirname, 'src/assets'),
        },
        {
          find: 'api',
          replacement: path.resolve(__dirname, 'src/api'),
        },
        {
          find: 'types',
          replacement: path.resolve(__dirname, 'types'),
        },
        {
          find: 'store',
          replacement: path.resolve(__dirname, 'store'),
        },
      ],
    },
  })
}
