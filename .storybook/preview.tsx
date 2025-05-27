import React from "react";
import type { Preview } from "@storybook/react";
import "../app/global.css";

export default {
  decorators: [
    (Story) => (
      <div className="bg-black text-orange-100  font-sans">
        <Story />
      </div>
    ),
  ],
  parameters: {},
} as Preview;

