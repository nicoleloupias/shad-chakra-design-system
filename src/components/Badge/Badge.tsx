import { Tag as ChakraTag, TagProps as ChakraTagProps } from "@chakra-ui/react";

export interface BadgeProps extends ChakraTagProps {}
export const Badge = ({ ...props }: BadgeProps) => {
  return <ChakraTag {...props} />;
};
