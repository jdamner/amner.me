import type { Meta, StoryObj } from "@storybook/react";
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';

import NavBar from "./NavBar";

type Story = StoryObj<typeof NavBar>;

export default {
  title: "Components/NavBar",
  component: NavBar,
  decorators: [withRouter],
} as Meta;

export const Default: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: {},
      routing: {
        path: '/',
        handle: 'Index',
      },
    }),
  },
  args: {
    children: "Children",
  },
};
