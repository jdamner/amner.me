import type { Meta, StoryObj } from "@storybook/react";

import Signpost from "./Signpost";

type Story = StoryObj<typeof Signpost>;

export default {
  title: "Components/Signpost",
  component: Signpost,
  argTypes: {
    children: {
      control: {
        type: "none",
      },
    },
  },
} as Meta;

export const Default: Story = {
  args: {
    title: "Signpost",
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          minHeight: "200px",
        }}
      >
        Content
      </div>
    ),
  },
};
