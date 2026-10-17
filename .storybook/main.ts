// This file has been automatically migrated to valid ESM format by Storybook.

import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { blogFrontmatter } from '../vite-plugins/blog-frontmatter.mts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "storybook-addon-remix-react-router",
    '@storybook/addon-vitest'
  ],
  framework: "@storybook/react-vite",
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [blogFrontmatter(resolve(__dirname, '..'))],
      resolve: {
        alias: {
          '@/components': resolve(__dirname, '../components'),
          '@/content': resolve(__dirname, '../content'),
          '@/public': resolve(__dirname, '../public'),
          '@/utils': resolve(__dirname, '../utils'),
          '@/app': resolve(__dirname, '../app'),
        },
      },
    });
  },
} as StorybookConfig;
