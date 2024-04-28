import type { Meta, StoryObj } from "@storybook/react";

import Expandingline from "./ExpandingLine";

type Story = StoryObj<typeof Expandingline>;

export default {
  title: "Atoms/Expandingline",
  component: Expandingline,
} as Meta;

export const Default: Story = { args: { reverse: false } };
export const Reverse: Story = { args: { reverse: true } };
