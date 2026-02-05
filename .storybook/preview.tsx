import type { Preview } from "@storybook/react-vite";
import "../src/global.css";
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';


export default {
  decorators: [
    withRouter,
    (Story) => (
      <div className="bg-black text-orange-100  font-sans">
        <Story />
      </div>
    ),
  ],

  parameters: {
    a11y: {
      test: "error"
    },
    reactRouter: reactRouterParameters({
      location: {},
      routing: {
        path: '/',
        handle: 'Index',
      },
    }),
  },
  tags: ["autodocs"]
} as Preview;

