import { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "useEventListener",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Example_useEventListener: Story = {
  name: "Example",
};
