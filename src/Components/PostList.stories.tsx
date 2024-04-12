import type { Meta, StoryObj } from "@storybook/react";

import PostList from "./PostList";
import { generatePostLinks } from "../storybookUtils";

type Story = StoryObj<typeof PostList>;

export default {
    title: "Components/PostList",
    component: PostList,
} as Meta;

export const Default: Story = {
    args: {
        posts: generatePostLinks(10),
    },
};
