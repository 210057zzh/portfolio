import ProjectItem, {
  ProjectItemProps,
} from "@/layout/components/project_item";
import { itemStyle } from "@/layout/id";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

const projects: ProjectItemProps[] = [
  {
    name: "Covider",
    shortDescription: "University wide COVID tracking!",
    thumbnail: `/portfolio/thumbnails/covider.png`,
    description: "/portfolio/project_descriptions/covider.md",
    video: "ynCIILtGV08",
  },
  {
    name: "Sprout",
    shortDescription: "Business Promotion for LA Locals!",
    thumbnail: `/portfolio/thumbnails/sprout.png`,
    description: "/portfolio/project_descriptions/sprout.md",
    video: "Jypp8e10xx8",
  },
];

export default function FullStack() {
  return (
    <Box sx={itemStyle}>
      <Heading paddingTop={6} textAlign={"center"} size={"lg"}>
        Full Stack Apps
      </Heading>
      <SimpleGrid px={10} columns={{ base: 1, md: 3 }} spacingX={5}>
        {projects.map((project, index) => {
          return <ProjectItem key={index} {...project}></ProjectItem>;
        })}
      </SimpleGrid>
    </Box>
  );
}
