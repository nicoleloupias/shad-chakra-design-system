import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { semanticTokens } from "./semanticTokens";
import { textStyles } from "./textStyles";
import "@fontsource-variable/inter";
import { fontWeights, fonts } from "./fonts";

export const theme = extendTheme({
  colors,
  semanticTokens,
  fonts,
  fontWeights,
  textStyles,
  styles: {
    global: {
      body: {
        ...textStyles.p,
      },
    },
  },
});
