import type { Meta, StoryObj } from "@storybook/nextjs";

import Header from "./Header";

type Story = StoryObj<typeof Header>;

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

export const Default: Story = {
  args: {
    title: "Hi, I'm a web developer.",
    children: "I build accessible, high performance web applications.",
  },
};
