import { Box, SimpleGrid, chakra } from "@chakra-ui/react";
import { projectsSectionId } from "../id";
import ComputerGraphics from "./projects/computer_graphics";
import FullStack from "./projects/full_stack";

export default function Projects() {
  return (
    <Box
      id={projectsSectionId}
      width={{ base: "87%", md: "88%" }}
      bg="transparent"
      border="none"
    >
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
        Projects
      </chakra.h3>
      <SimpleGrid columns={1} spacing={10}>
        <ComputerGraphics></ComputerGraphics>
        <FullStack></FullStack>
      </SimpleGrid>
    </Box>
  );
}
