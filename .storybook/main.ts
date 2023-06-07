import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: [
    "../src/hooks/**/__docs__/*.stories.tsx",
    "../src/hooks/**/__docs__/*.mdx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
