import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

export const theme = extendTheme({
  colors,
  semanticTokens: {
    background: {
      default: "white",
      _dark: "black",
    },
    foreground: {
      default: "black",
      _dark: "white",
    },
    muted: {
      default: "slate.100",
      _dark: "slate.800",
    },
    ["muted-foreground"]: {
      default: "slate.500",
      _dark: "slate.400",
    },
    card: {
      default: "white",
      _dark: "black",
    },
    ["card-foreground"]: {
      default: "black",
      _dark: "white",
    },
    popover: {
      default: "white",
      _dark: "black",
    },
  },
  styles: {
    global: {},
  },
});
