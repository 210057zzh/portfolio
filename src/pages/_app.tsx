import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import Navbar from "@/layout/navbar";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: "#90c6af",
  secondary: "#5691eb",
  highlight: "#cf81ee",
  background: "#bbb8b8",
  background_lighter: "rgba(184, 187, 186, 0.4)",
};

export const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </ChakraProvider>
  );
}
