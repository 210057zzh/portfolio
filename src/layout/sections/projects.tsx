import {
  TabList,
  TabPanels,
  Tabs,
  Tab,
  TabPanel,
  Card,
  CardHeader,
  SimpleGrid,
  chakra,
  Box,
} from "@chakra-ui/react";
import { itemStyle } from "../id";
import ComputerGraphics from "./projects/computer_graphics";

export default function Projects() {
  return (
    <Box width={{ base: "87%", md: "88%" }} bg="transparent" border="none">
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
        Projects
      </chakra.h3>
      <SimpleGrid columns={1}>
        <ComputerGraphics></ComputerGraphics>
      </SimpleGrid>
    </Box>
  );
}
