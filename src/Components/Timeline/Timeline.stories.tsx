import type { Meta, StoryObj } from "@storybook/react";

import Timeline from "./Timeline";
import { generateMdFile } from "../../storybookUtils";
import { faker } from "@faker-js/faker";

type Story = StoryObj<typeof Timeline>;

export default {
    title: "Components/Timeline",
    component: Timeline,
} as Meta;

export const Default: Story = {
    args: {
        events: Array.from({ length: 10 }, () => generateMdFile({
            role: faker.person.jobTitle(),
            from: faker.date.past().toDateString(),
            to: faker.date.recent().toDateString(),
        })),
    },
};