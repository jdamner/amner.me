import type { Meta, StoryObj } from "@storybook/nextjs";

import { faker } from "@faker-js/faker";
import Article from "./Article";
import { generatePlaceholderContent } from "../../utils/storybook";

type Story = StoryObj<typeof Article>;

export default {
  title: "Layout/Article",
  component: Article,
} as Meta;

faker.seed(123);

export const Default: Story = {
  args: {
    children: generatePlaceholderContent(),
  },
};
