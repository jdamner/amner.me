import type { Preview } from "@storybook/react";
import "../src/global.css";

export default {
  decorators: [
    (Story) => (
      <div className="bg-black text-orange-100  font-sans">
        <Story />
      </div>
    ),
  ],

  parameters: {},
  tags: ["autodocs"]
} as Preview;

