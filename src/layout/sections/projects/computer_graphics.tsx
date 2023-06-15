import ProjectItem, {
  ProjectItemProps,
} from "@/layout/components/project_item";
import { itemStyle } from "@/layout/id";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

const projects: ProjectItemProps[] = [
  {
    name: "bunny_engine",
    shortDescription:
      "Native Windows Game Engine Written in C++, built with DirectX11",
    thumbnail: `/portfolio/images/me.png`,
    description: "/portfolio/project_descriptions/bunny_engine.md",
    video: "https://www.youtube.com/embed/bQ4dePQef2M",
  },
  {
    name: "bunny_engine",
    shortDescription:
      "Native Windows Game Engine Written in C++, built with DirectX11",
    thumbnail: `/portfolio/images/me.png`,
    description: "/portfolio/project_descriptions/bunny_engine.md",
    video: "https://www.youtube.com/embed/bQ4dePQef2M",
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
          return <ProjectItem key={index} {...project}></ProjectItem>;
        })}
      </SimpleGrid>
    </Box>
  );
}
