/// <reference types="vitest/config" />
import { defineConfig, type Plugin } from 'vite';
import csp from 'vite-plugin-csp-guard';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import { resolve } from 'path';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { blogFrontmatter } from './vite-plugins/blog-frontmatter.mts';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import php from 'highlight.js/lib/languages/php';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import yaml from 'highlight.js/lib/languages/yaml';

// Register only the languages we use
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('php', php);
hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);
hljs.registerLanguage('json', json);
hljs.registerLanguage('yaml', yaml);

// Inlines built CSS into index.html (no request chain, no JS injection) and
// adds its hash to the CSP, since vite-plugin-csp-guard doesn't hash inline styles.
const inlineCss = (): Plugin => {
  let hash = '';
  return {
  name: 'inline-css',
  apply: 'build',
  enforce: 'post',
  generateBundle: {
    order: 'post',
    handler(_, bundle) {
      const html = bundle['index.html'];
      if (hash && html?.type === 'asset') {
        // The charset must be within the first 1024 bytes, but the CSP meta is prepended and long
        const charset = '<meta charset="UTF-8">';
        html.source = String(html.source)
          .replace("style-src-elem 'self'", `style-src-elem 'self' ${hash}`)
          .replace(charset, '')
          .replace('<head>', `<head>${charset}`);
      }
    },
  },
  transformIndexHtml: {
    order: 'post',
    handler(html, ctx) {
      const bundle = ctx.bundle ?? {};
      const cssFiles = Object.values(bundle).filter((f) => f.type === 'asset' && f.fileName.endsWith('.css'));
      const css = cssFiles.map((f) => String((f as { source: string | Uint8Array }).source)).join('');
      cssFiles.forEach((f) => delete bundle[f.fileName]);
      hash = `'sha256-${createHash('sha256').update(css).digest('base64')}'`;
      return html
        .replace(/<link rel="stylesheet"[^>]*>/g, '')
        .replace('</head>', `<style>${css}</style></head>`);
    },
  },
  };
};

// https://vitejs.dev/config/
import path from 'node:path';
import { createHash } from 'node:crypto';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = import.meta.dirname;

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  base: '/',
  plugins: [inlineCss(), csp({
    dev: { run: false },
    policy: {
      'default-src': ["'self'"],
      'script-src': ["'self'"],
      'style-src-attr': ["'unsafe-inline'"],
      'img-src': ["'self'", 'data:'],
      'font-src': ["'self'", 'data:'],
      'connect-src': ["'self'"],
      'manifest-src': ["'self'"],
      'base-uri': ["'self'"],
      'form-action': ["'none'"],
    },
    build: { sri: true },
  }), blogFrontmatter(dirname), mdx({
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
    rehypePlugins: [[rehypeHighlight, { highlighter: hljs }]]
  }), react({
    include: /\.(jsx|js|tsx|ts)$/
  })],
  resolve: {
    alias: {
      '@/components': resolve(dirname, './components'),
      '@/content': resolve(dirname, './content'),
      '@/public': resolve(dirname, './public'),
      '@/utils': resolve(dirname, './utils'),
      '@/app': resolve(dirname, './app')
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'vendor-react', test: /node_modules[\\/](react|react-dom|react-router)[\\/]/ },
            { name: 'vendor-mdx', test: /node_modules[\\/]@mdx-js[\\/]react[\\/]/ },
          ],
        },
      },
    },
  },
  assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.otf'],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router']
  },
  test: {
    reporters: process.env.GITHUB_ACTIONS ? ['default', 'github-actions'] : ['default'],
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});