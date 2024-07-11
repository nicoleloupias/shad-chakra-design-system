import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const defaultVariant = definePartsStyle({
  container: {
    bg: "primary",
    color: "primary-foreground",
    _hover: {
      bg: "hover:primary",
    },
  },
});

const secondary = definePartsStyle({
  container: {
    bg: "secondary",
    color: "secondary-foreground",
    _hover: {
      bg: "hover:secondary",
    },
  },
});

const destructive = definePartsStyle({
  container: {
    bg: "destructive",
    color: "destructive-foreground",
    _hover: {
      bg: "hover:destructive",
    },
  },
});

const outline = definePartsStyle({
  container: {
    bg: "background",
    color: "foreground",
    borderWidth: 1,
    borderColor: "border",
    _hover: {
      bg: "accent",
      color: "accent-foreground",
    },
  },
});

export const Badge = defineMultiStyleConfig({
  baseStyle: {
    container: {
      borderRadius: "full",
      fontWeight: "semibold",
      fontSize: "xs",
      lineHeight: "md",
      py: 1,
      px: "10px",
    },
  },
  variants: { default: defaultVariant, secondary, destructive, outline },
  defaultProps: {
    variant: "default",
  },
});
