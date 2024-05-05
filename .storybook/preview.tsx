import React from "react";
import type { Preview } from "@storybook/react";
import "../app/global.css";

export default {
  decorators: [
    (Story) => (
      <div className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-300">
        <Story />
      </div>
    ),
  ],
  parameters: {},
} as Preview;

