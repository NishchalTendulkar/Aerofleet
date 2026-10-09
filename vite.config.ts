import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    assetsInlineLimit: 0, // keep images as real files (they were base64 strings in the original)
    cssMinify: false, // ship the original CSS untouched
  },
})
