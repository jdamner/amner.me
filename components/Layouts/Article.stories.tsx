import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";
import Article from "./Article";
import { generatePlaceholderContent } from "../../utils/storybook";

type Story = StoryObj<typeof Article>;

export default {
  title: "Layout/Article",
  component: Article,
} as Meta;

export const Default: Story = {
  args: {
    first: <h1>Title</h1>,
    image: faker.image.url(),
    children: generatePlaceholderContent(),
    offset: false,
  },
};

export const Offset: Story = {
  args: {
    first: <h1>Title</h1>,
    image: faker.image.url(),
    children: generatePlaceholderContent(),
    offset: true,
  },
};

export const NoImage: Story = {
  args: {
    first: <h1>Title</h1>,
    children: generatePlaceholderContent(),
    offset: false,
  },
};

export const NoChildren: Story = {
  args: {
    first: <h1>Title</h1>,
    image: faker.image.url(),
    offset: false,
  },
};

export const NoImageNoTitle: Story = {
  args: {
    offset: false,
    children: generatePlaceholderContent(),
  },
};
