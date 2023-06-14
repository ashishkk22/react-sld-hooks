import { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "useCopy",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Example_useCopy: Story = {
  name: "Example",
  args: {
    value: "react-sld-hooks",
  },
};
