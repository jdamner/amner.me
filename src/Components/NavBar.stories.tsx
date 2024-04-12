import type { Meta, StoryObj } from "@storybook/react";

import NavBar from "./NavBar";

type Story = StoryObj<typeof NavBar>;

export default {
    title: "Components/NavBar",
    component: NavBar,
} as Meta;

export const Default: Story = {
    args: {
        children: "Children"
    },
};