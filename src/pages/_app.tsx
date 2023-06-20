import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

// 1. Import the extendTheme function
import Navbar from "@/layout/navbar";
import Head from "next/head";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: "#90c6af",
  secondary: "#5691eb",
  highlight: "rgba(133, 74, 215)",
  background: "#bbb8b8",
  background_lighter: "rgba(184, 187, 186, 0.4)",
  hover: "teal.400",
};

export const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/portfolio/favicon.ico" />
      </Head>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </ChakraProvider>
  );
}
