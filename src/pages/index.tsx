import About from "@/layout/sections/about";
import Experience from "@/layout/sections/experience";
import { VStack } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <VStack>
      <About></About>
      <Experience></Experience>
    </VStack>
  );
}
