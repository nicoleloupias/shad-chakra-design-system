import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const primary = defineStyle({
  bgColor: "primary",
  color: "primary-foreground",
  _hover: {
    bgColor: "hover:primary",
  },
});

const secondary = defineStyle({
  bgColor: "secondary",
  color: "secondary-foreground",
  _hover: {
    bgColor: "hover:secondary",
  },
});

const destructive = defineStyle({
  bgColor: "destructive",
  color: "destructive-foreground",
  _hover: {
    bgColor: "hover:destructive",
  },
});

const outline = defineStyle({
  bgColor: "background",
  color: "foreground",
  borderWidth: 1,
  borderColor: "border",
  _hover: {
    bgColor: "accent",
    color: "accent-foreground",
  },
});

const ghost = defineStyle({
  color: "foreground",
  _hover: {
    bgColor: "accent",
    color: "accent-foreground",
  },
});

const md = defineStyle({
  px: 4,
});

const sm = defineStyle({
  px: 3,
});

const lg = defineStyle({
  px: 8,
});

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 6,
    fontWeight: "medium",
    fontSize: "sm",
    lineHeight: "2xl",
    py: 2,
  },
  variants: { primary, secondary, ghost, destructive, outline },
  sizes: {
    md,
    sm,
    lg,
  },
  defaultProps: {
    variant: "primary",
  },
});
