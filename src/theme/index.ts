import { extendTheme } from "@chakra-ui/react";
import { colors } from "./base/colors";
import { semanticTokens } from "./base/semanticTokens";
import { textStyles } from "./base/textStyles";
import "@fontsource-variable/inter";
import { fontSizes, fontWeights, fonts } from "./base/fonts";
import { components } from "./components";

export const theme = extendTheme({
  colors,
  semanticTokens,
  fonts,
  fontSizes,
  lineHeights: fontSizes,
  fontWeights,
  textStyles,
  components,
  styles: {
    global: {
      body: {
        ...textStyles.p,
      },
    },
  },
});
