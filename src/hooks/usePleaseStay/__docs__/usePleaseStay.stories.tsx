import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Example";
import { AnimationType } from "../../../enums/AnimationTypes";

const meta: Meta<typeof Button> = {
  title: "usePleaseStay",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Example_usePleasestay: Story = {
  name: "Example",
  args: {
    titles: ["React", "SLD", "Hooks"],
    animationType: AnimationType.LOOP,
    interval: 20,
  },
};
