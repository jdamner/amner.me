
import type { StorybookConfig } from "@storybook/nextjs";
import type { AddonOptionsWebpack } from '@storybook/addon-coverage';

const coverageConfig: AddonOptionsWebpack = {
  istanbul: {
    include: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    exclude: [],
  }
};


export default {
  stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [ 
    "@storybook/addon-essentials",
    // { name: "@storybook/addon-coverage", options: coverageConfig },
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/nextjs",
  docs: { autodocs: true },
} as StorybookConfig;
