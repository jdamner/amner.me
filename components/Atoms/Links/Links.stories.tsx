import type { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";

import ButtonComponent from "./Button";
import ButtonLink from "./ButtonLink";
import MotionButton from "./MotionButton";
import InlineLink from "./Inline";
import PostLink from "./PostLink";
import ProtectedLink from "./ProtectedLink";
import TabButton from "./TabButton";
import { generatePostLink } from "../../../utils/storybook";

export default {
  title: "Atoms/Links & Buttons",
  component: ButtonComponent,
} as Meta;

faker.seed(123);

export const Button: StoryObj<typeof ButtonComponent> = {
  args: {
    children: faker.lorem.words(2),
  },
};

export const LinkButton: StoryObj<typeof ButtonLink> = {
  render: ButtonLink,
  args: {
    children: faker.lorem.words(2),
    href: faker.internet.url(),
  },
};

export const Motion: StoryObj<typeof MotionButton> = {
  render: MotionButton,
  args: {
    children: faker.lorem.words(2),
    delay: faker.number.float(),
  },
};

export const Inline: StoryObj<typeof InlineLink> = {
  render: InlineLink,
  args: {
    children: faker.lorem.words(2),
    href: faker.internet.url(),
  },
};

export const Post: StoryObj<typeof PostLink> = {
  render: (args) => (
    <div style={{ maxWidth: "300px" }}>
      <PostLink {...args} />
    </div>
  ),
  args: generatePostLink(),
};

export const Protected: StoryObj<typeof ProtectedLink> = {
  render: ProtectedLink,
  args: {
    children: faker.lorem.words(2),
    href: faker.internet.url(),
  },
};

export const Tab: StoryObj<typeof TabButton> = {
  render: TabButton,
  args: {
    children: faker.lorem.words(2),
    active: false,
    delay: faker.number.float(),
  },
};

export const ActiveTab: StoryObj<typeof TabButton> = {
  render: TabButton,
  args: {
    children: faker.lorem.words(2),
    active: true,
    delay: faker.number.float(),
  },
};
