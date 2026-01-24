import type { Preview } from "@storybook/react-vite";
import "../src/global.css";

export default {
  decorators: [
    (Story) => (
      <div className="bg-black text-orange-100  font-sans">
        <Story />
      </div>
    ),
  ],

  parameters: {
    a11y: {
      test: "error"
    }
  },
  tags: ["autodocs"]
} as Preview;

