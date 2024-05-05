import type { Meta, StoryObj } from "@storybook/react";

import TableOfContents from "./TableOfContents";
import { generateMdContent } from "../utils/storybook";

type Story = StoryObj<typeof TableOfContents>;

export default {
  title: "Components/Table of Contents",
  component: TableOfContents,
} as Meta;

export const Default: Story = {
  args: {
    children: generateMdContent(),
  },
};
