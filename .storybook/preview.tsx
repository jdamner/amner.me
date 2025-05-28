import React from "react";
import type { Preview } from "@storybook/nextjs";
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
  tags: ["autodocs"]
} as Preview;

