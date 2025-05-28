import type { Meta, StoryObj } from "@storybook/nextjs";

import TwoThirds from "./TwoThirds";
import { generatePlaceholderContent } from "../../utils/storybook";

type Story = StoryObj<typeof TwoThirds>;

export default {
  title: "Layout/TwoThirds",
  component: TwoThirds,
} as Meta;

export const Default: Story = {
  args: {
    first: <h1>Title</h1>,
    children: generatePlaceholderContent(),
  },
};
