import About from "@/layout/sections/about";
import Experience from "@/layout/sections/experiences";
import Projects from "@/layout/sections/projects";
import { VStack } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <VStack>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
    </VStack>
  );
}
