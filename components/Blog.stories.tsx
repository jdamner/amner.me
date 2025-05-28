import type { Meta, StoryObj } from "@storybook/nextjs";

import Blog from "./Blog";
import { generatePostLinks } from "../utils/storybook";

type Story = StoryObj<typeof Blog>;

export default {
  title: "Components/Blog",
  component: Blog,
} as Meta;

export const Default: Story = {
  args: {
    posts: generatePostLinks(10),
  },
};
