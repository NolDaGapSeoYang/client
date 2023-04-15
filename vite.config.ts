import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
      host: true,
    },
    resolve: {
      alias: [
        {
          find: 'screen',
          replacement: path.resolve(process.cwd(), 'src/screen'),
        },
        {
          find: 'layout',
          replacement: path.resolve(process.cwd(), 'src/layout'),
        },
        {
          find: 'components',
          replacement: path.resolve(process.cwd(), 'src/components'),
        },
        {
          find: 'store',
          replacement: path.resolve(process.cwd(), 'src/store'),
        },
        {
          find: 'constants',
          replacement: path.resolve(process.cwd(), 'src/constants'),
        },
        {
          find: 'apollo',
          replacement: path.resolve(process.cwd(), 'apollo'),
        },
        {
          find: 'utils',
          replacement: path.resolve(process.cwd(), 'src/utils'),
        },
        {
          find: 'api',
          replacement: path.resolve(process.cwd(), 'src/api'),
        },
        {
          find: 'hooks',
          replacement: path.resolve(process.cwd(), 'src/hooks'),
        },
        {
          find: 'routes',
          replacement: path.resolve(process.cwd(), 'src/routes'),
        },
        {
          find: 'types',
          replacement: path.resolve(process.cwd(), 'types'),
        },
        {
          find: 'store',
          replacement: path.resolve(process.cwd(), 'store'),
        },
      ],
    },
  })
}
