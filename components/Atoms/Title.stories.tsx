import type { Meta, StoryObj } from "@storybook/nextjs";
import { faker } from "@faker-js/faker";

import Title from "./Title";

type Story = StoryObj<typeof Title>;

export default {
  title: "Atoms/Title",
  component: Title,
} as Meta;

faker.seed(123);

export const Default: Story = {
  args: {
    children: faker.animal.dog(),
  },
};
