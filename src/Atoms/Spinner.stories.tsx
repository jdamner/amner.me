import type { Meta, StoryObj } from "@storybook/react";

import Spinner from "./Spinner";

type Story = StoryObj<typeof Spinner>;

export default {
    title: "Atoms/Spinner",
    component: Spinner,
} as Meta;

export const Default: Story = {};