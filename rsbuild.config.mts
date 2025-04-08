import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';

const { publicVars } = loadEnv({ prefixes: [process.env.ENV_PREFIX ?? 'FRONT_'] });

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  source: {
    entry: {
      index: 'src/main.ts',
    },
    define: publicVars,
  },
  output: {
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
    favicon: './public/favicon.ico',
  },
});
