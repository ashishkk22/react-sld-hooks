import { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "useRenderCount",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Example_useRenderCount: Story = {
  name: "Example",
  args: {
    initialCounter: 22,
  },
};
