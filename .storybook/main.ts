
import type { StorybookConfig } from "@storybook/nextjs";

export default {
  stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: "@storybook/nextjs"
} as StorybookConfig;
