import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { generateMdFile } from "@/utils/storybook";

import Tabs from "./Tabs";

type Story = StoryObj<typeof Tabs>;

export default {
  title: "Components/Tabs",
  component: Tabs,
} as Meta;

faker.seed(123);

export const Default: Story = {
  args: {
    title: "",
    defaultContent: faker.lorem.paragraphs(2),
    tabs: Array.from({ length: 5 }, (_, i) =>
      generateMdFile({ title: `Tab ${i + 1}` }),
    ),
  },
};
