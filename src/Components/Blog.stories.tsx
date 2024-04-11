import type { Meta, StoryObj } from '@storybook/react';

import Blog from './Blog';
import { generatePostLinks } from '../storybookUtils';

type Story = StoryObj<typeof Blog>;

export default {
  title: 'Components/Blog',
  component: Blog,
} as Meta;

export const Default: Story = {
    args: {
        posts: generatePostLinks(10),
    }
};


