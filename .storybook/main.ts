
import type { StorybookConfig } from "@storybook/nextjs";

export default {
  stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [ 
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/nextjs",
  docs: { autodocs: true },
} as StorybookConfig;
