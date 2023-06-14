import { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "useRerender",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Example_useRerender: Story = {
  name: "Example",
  args: {
    initialCounter: 0,
  },
};
