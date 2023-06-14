import { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "usePreviousValue",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Example_usePreviousValue: Story = {
  name: "Example",
  args: {
    initialCounter: 0,
  },
};
