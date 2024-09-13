import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import jsconfigPaths from 'vite-jsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), jsconfigPaths()],
})
