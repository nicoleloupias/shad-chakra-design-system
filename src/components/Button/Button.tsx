import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

export interface ButtonProps extends ChakraButtonProps {}
export const Button = ({ ...props }: ButtonProps) => {
  return <ChakraButton {...props} />;
};
