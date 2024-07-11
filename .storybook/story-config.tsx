import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { theme } from "../src/theme";

const useTheme = (mode = "light") => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode(mode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);
};

export const ThemeStoryWrapper = ({
  children,
  mode = "light",
}: {
  children: React.ReactElement | React.ReactElement[];
  mode?: "light" | "dark";
}) => {
  useTheme(mode);
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
