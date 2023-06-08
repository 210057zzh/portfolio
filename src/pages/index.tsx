import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Text, VStack } from "@chakra-ui/react";
import About from "@/layout/sections/about";
import Experience from "@/layout/sections/experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <VStack>
      <About></About>
      <Experience></Experience>
    </VStack>
  );
}
