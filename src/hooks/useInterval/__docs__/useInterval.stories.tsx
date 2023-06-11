import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "useInterval",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Example_useInterval: Story = {
  name: "Example",
  args: {
    // callback: () => {},
    interval: 1000,
    shouldRun: true,
  },
};
