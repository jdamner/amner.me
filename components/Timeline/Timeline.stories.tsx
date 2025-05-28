import type { Meta, StoryObj } from "@storybook/nextjs";

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
        subtitle: faker.company.buzzPhrase(),
        website: faker.internet.url(),
        date: "March 2020 - Present", // faker dates aren't consistent even with a seed
      }),
    ),
  },
};
