import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import packageJson from './package.json';

const { publicVars } = loadEnv({ prefixes: [process.env.ENV_PREFIX ?? 'FRONT_'] });

const publicUrl = process.env.PUBLIC_URL ?? packageJson.homepage ?? '/';
const publicPath = new URL(publicUrl.endsWith('/') ? publicUrl : `${publicUrl}/`, 'http://localhost').pathname;

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  source: {
    entry: {
      index: 'src/main.ts',
    },
    define: publicVars,
  },
  output: {
    assetPrefix: publicPath,
    distPath: {
      root: 'build',
    },
  },
  server: {
    port: parseInt(process.env.PORT ?? '3000', 10),
    open: (process.env.BROWSER ?? 'false') === 'true',
  },
  html: {
    template: './public/index.html',
    favicon: './public/playwright-logo.svg',
  },
});
