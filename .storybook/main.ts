
import type { StorybookConfig } from "@storybook/nextjs";

export default {
  stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [ "@storybook/addon-essentials" ],
  framework: "@storybook/nextjs",
  docs: { autodocs: true },
} as StorybookConfig;
