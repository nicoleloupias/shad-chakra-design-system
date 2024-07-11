import type { Preview } from "@storybook/react";
import { theme } from "../src/theme";
import { ThemeStoryWrapper } from "./story-config";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chakra: {
      theme,
    },
  },
};

export const decorators = [
  (Story, params) => {
    const mode = () => {
      if (!params.globals.backgrounds) return "light";
      return params.globals.backgrounds.value === "#F8F8F8" ? "light" : "dark";
    };

    return (
      <ThemeStoryWrapper mode={mode()}>
        <Story />
      </ThemeStoryWrapper>
    );
  },
];

export default preview;
