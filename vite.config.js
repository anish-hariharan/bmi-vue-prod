import {defineConfig}  from "vite"
// const defineConfig = require('vite');
import vue from "@vitejs/plugin-vue"
export default defineConfig({
 base: '/deploying-vite-project-example/',
 plugins: [vue()]
})
