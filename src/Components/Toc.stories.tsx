import type { Meta, StoryObj } from "@storybook/react";

import TOCInline from "./Toc";
import { generateMdContent } from "../storybookUtils";

type Story = StoryObj<typeof TOCInline>;

export default {
    title: "Components/Table of Contents",
    component: TOCInline,
} as Meta;

export const Default: Story = {
    args: {
        content: generateMdContent(),
    },
};