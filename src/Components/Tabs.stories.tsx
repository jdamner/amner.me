import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";

import Tabs from "./Tabs";

type Story = StoryObj<typeof Tabs>;

export default {
    title: "Components/Tabs",
    component: Tabs,
} as Meta;

export const Default: Story = {
    args: {
        title: "",
        defaultContent: faker.lorem.paragraphs(2),
        tabs: Array.from({ length: 5 }, (_, i) => ({
            title: `Tab ${i + 1}`,
            content: faker.lorem.paragraphs(i + 1),
        })),
    },
};