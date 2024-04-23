import React, {ReactNode} from "react";
import {Meta} from "@storybook/react";

import {Sidebar} from "../src";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  argTypes: {
    isCollapse: {
      control: {
        type: "boolean",
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Sidebar>;

const defaultProps = {};

const App = React.forwardRef(({children}: {children: ReactNode}) => {
  return <div>{children}</div>;
});

App.displayName = "App";

const Template = () => {
  return (
    <App>
      <Sidebar />
    </App>
  );
};

export const Default = {
  render: Template,

  args: {
    ...defaultProps,
  },
};
