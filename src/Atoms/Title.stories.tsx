import type { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";

import Title from "./Title";

type Story = StoryObj<typeof Title>;

export default {
    title: "Atoms/Title",
    component: Title,
} as Meta;

export const Default: Story = {
    args: {
        title: faker.person.firstName(),
        children: faker.animal.dog()
    },
};

export const TitleOnly: Story = {
    args: {
        title:  faker.person.firstName(),
    },
};

export const WithSubtitle: Story = {
    args: {
        children:  faker.animal.dog(),
    },
};
