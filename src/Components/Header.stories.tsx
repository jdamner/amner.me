import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";

type Story = StoryObj<typeof Header>;

export default {
    title: "Components/Header",
    component: Header,
} as Meta;

export const Default: Story = {
    args: {
        title: "Header",
        subtitle: "Subtitle",
        children: "Children",
    },
};