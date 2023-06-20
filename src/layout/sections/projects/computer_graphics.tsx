import ProjectItem, {
  ProjectItemProps,
} from "@/layout/components/project_item";
import { itemStyle } from "@/layout/id";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

const projects: ProjectItemProps[] = [
  {
    name: "bunny_engine",
    shortDescription: "Native C++ Game Engine running DirectX 11",
    thumbnail: `/portfolio/thumbnails/bunny_engine.gif`,
    description: "/portfolio/project_descriptions/bunny_engine.md",
    video: "bQ4dePQef2M",
  },
  {
    name: "Roller Coaster",
    shortDescription: "Fun ride built on Splines!",
    thumbnail: `/portfolio/thumbnails/roller_coaster.gif`,
    description: "/portfolio/project_descriptions/roller_coaster.md",
    video: "ZuboeBl-Kc8",
  },
  {
    name: "Ray Tracer",
    shortDescription: "Good old ray tracing!",
    thumbnail: `/portfolio/thumbnails/mirror.jpg`,
    description: "/portfolio/project_descriptions/roller_coaster.md",
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
