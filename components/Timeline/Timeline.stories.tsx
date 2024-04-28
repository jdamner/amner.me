import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";
import Timeline from "./Timeline";
import { generateMdFile } from "../../utils/storybook";

type Story = StoryObj<typeof Timeline>;

export default {
  title: "Components/Timeline",
  component: Timeline,
} as Meta;

faker.seed(123);

export const Default: Story = {
  args: {
    events: Array.from({ length: 10 }, () =>
      generateMdFile({
        role: faker.person.jobTitle(),
        title: faker.company.name(),
        url: faker.internet.url(),
        from: "March 2020", // faker dates aren't consistent even with a seed
        to: "Present",
      }),
    ),
  },
};
