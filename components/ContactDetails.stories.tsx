import type { Meta, StoryObj } from "@storybook/nextjs";

import ContactDetails from "./ContactDetails";

type Story = StoryObj<typeof ContactDetails>;

export default {
  title: "Components/ContactDetails",
  component: ContactDetails,
} as Meta;

export const Default: Story = {};
