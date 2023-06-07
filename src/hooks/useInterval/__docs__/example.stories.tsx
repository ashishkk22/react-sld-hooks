import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { Canvas, Story, Meta as MetaFn } from "@storybook/addon-docs";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  parameters: {
    docs: {
      page: () => (
        <>
          <MetaFn />
          <Canvas>
            <Story storyName="ashish" />
          </Canvas>
        </>
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: "ashish",
    children: "Button",
  },
};

export const Example = () => {
  return <div>Example</div>;
};
