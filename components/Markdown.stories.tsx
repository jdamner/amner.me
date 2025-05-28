import type { Meta, StoryObj } from "@storybook/nextjs";

import { generateMdContent } from "@/utils/storybook";
import { Markdown } from "./Markdown";

type Story = StoryObj<typeof Markdown>;

export default {
  title: "Components/Markdown",
  component: Markdown,
} as Meta;

export const Default: Story = {
  args: {
    children: generateMdContent(),
  },
};
