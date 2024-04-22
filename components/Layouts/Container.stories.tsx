import type { Meta, StoryObj } from "@storybook/react";

import Container from "./Container";
import { generatePlaceholderContent } from "../../utils/storybook";

type Story = StoryObj<typeof Container>;

export default {
  title: "Layout/Container",
  component: Container,
} as Meta;

export const Default: Story = {
  args: {
    children: generatePlaceholderContent(),
  },
};

export const Alt: Story = {
  args: {
    children: generatePlaceholderContent(),
    alt: true,
  },
};
