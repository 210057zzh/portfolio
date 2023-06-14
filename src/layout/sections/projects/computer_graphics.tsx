import ProjectItem, {
  ProjectItemProps,
} from "@/layout/components/project_item";
import { itemStyle } from "@/layout/id";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

const projects: ProjectItemProps[] = [
  {
    name: "bunny_engine",
    shortDescription: "An apple pie, very good",
    thumbnail: `/portfolio/images/me.png`,
    description: "a very gppd apple",
  },
  {
    name: "Apple",
    shortDescription: "An apple pie, very good",
    thumbnail: `/portfolio/images/me.png`,
    description: "a very gppd apple",
  },
];

export default function ComputerGraphics() {
  return (
    <Box sx={itemStyle}>
      <Heading paddingTop={6} textAlign={"center"} size={"lg"}>
        Computer Graphics
      </Heading>
      <SimpleGrid px={10} columns={{ base: 1, md: 3 }} spacingX={5}>
        {projects.map((project, index) => {
          return <ProjectItem id={index} {...project}></ProjectItem>;
        })}
      </SimpleGrid>
    </Box>
  );
}
