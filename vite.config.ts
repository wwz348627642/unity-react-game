import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import reactCssModule from "vite-plugin-react-css-modules";
import vitePluginImp from 'vite-plugin-imp';
const generateScopedName = "[name]__[local]___[hash:base64:5]";

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    react(),
    reactCssModule({
      generateScopedName,
      attributeNames: {
        styleName: 'className',
      },
      filetypes: {
        ".less": {
          syntax: "postcss-less",
        },
      },
    }),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          '@primary-color': '#1677fe',
          '@link-color': '#1677fe',
          '@border-radius-base': '4px',
          '@padding-lg': '16px',
          '@form-item-margin-bottom': '16px',
          '@card-padding-base': '16px',
          '@margin-lg': '16px',
        },
        javascriptEnabled: true,
      }
    },
    modules: {
      generateScopedName,
    },
  },
  server: {
    host: '0.0.0.0'
  }
})
