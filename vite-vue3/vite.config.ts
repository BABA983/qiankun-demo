/*
 * @Author: raoqidi
 * @Date: 2021-08-30 11:04:09
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-08-30 18:22:50
 * @Description: please add a description to the file
 * @FilePath: /qiankun-demo/vite-vue3/vite.config.ts
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import html from '@rollup/plugin-html';
const { name } = require('./package.json');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    html({
      title: name,
      // https://github.com/rollup/plugins/blob/master/packages/html/src/index.ts
      template: ({ attributes, files, meta, publicPath, title }) => {
        const makeHtmlAttributes = (
          attributes: Record<string, any>
        ): string => {
          if (!attributes) {
            return '';
          }

          const keys = Object.keys(attributes);
          // eslint-disable-next-line no-param-reassign
          return keys.reduce(
            (result, key) => (result += ` ${key}="${attributes[key]}"`),
            ''
          );
        };
        const scripts = (files.js || [])
          .map(({ fileName }) => {
            const attrs = makeHtmlAttributes(attributes.script);
            return `<script src="${publicPath}${fileName}"${attrs}></script>`;
          })
          .join('\n');

        const links = (files.css || [])
          .map(({ fileName }) => {
            const attrs = makeHtmlAttributes(attributes.link);
            return `<link href="${publicPath}${fileName}" rel="stylesheet"${attrs}>`;
          })
          .join('\n');

        const metas = meta
          .map((input) => {
            const attrs = makeHtmlAttributes(input);
            return `<meta${attrs}>`;
          })
          .join('\n');

        return `
<!doctype html>
<html${makeHtmlAttributes(attributes.html)}>
  <head>
    ${metas}
    <title>${title}</title>
    ${links}
  </head>
  <body>
    <div id="app"></div>
    ${scripts}
  </body>
</html>`;
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 7003,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    lib: {
      name,
      entry: path.resolve(__dirname, 'src/main.ts'),
      formats: ['umd'],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
