import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  FlexProps,
  HStack,
  Heading,
  Image,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
  chakra
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { experienceSectionId, itemStyle } from "../id";

const milestones = [
  {
    id: 1,
    date: "May 21, 2023 - Present",
    title: "Software Engineer Intern",
    company: "Amazon Luna",
    companyLogoSrc: "amazon.svg",
    descriptions: [
      "Create index service on game logs to replace previously manual process",
      "Create game log download service to replace previously manual process",
      "Saves hours of customer and developer time",
    ],
  },
  {
    id: 2,
    date: "August 10, 2021 - May 12, 2023",
    title: "Teaching Assistant - CSCI 356 (Introduction to Computer Systems)",
    company: "University of Southern California",
    companyLogoSrc: "usc.png",
    descriptions: [
      "Teaching low-level topics such as binary representation, assembly language, dynamic memory allocation.",
      "Scanning and grading exams",
    ],
  },
  {
    id: 3,
    date: "May 10, 2021 - July 10, 2021",
    title:
      "Teaching Assistant - CSCI 104 (Data Structures and Object-Oriented Design)",
    company: "University of Southern California",
    companyLogoSrc: "usc.png",
    descriptions: [
      "Teaching common data structures (AVL trees, stack, queue, and hash maps), object-oriented programming, back-tracking, common graph algorithms (BFS, DFS), and more",
      "Holding office hours to help students",
    ],
  },
  {
    id: 4,
    date: "Jan 10, 2021 - May 10, 2021",
    title: "Teaching Assistant - CSCI 103 (Introduction to Programming)",
    company: "University of Southern California",
    companyLogoSrc: "usc.png",
    descriptions: [
      "Teaching memory management, object-oriented programming, recursion, and more",
      "Holding office hours to reinforce course content and assist students with programming assignments",
    ],
  },
];

const Experience = () => {
  const isMobile = true;
  const isDesktop = false;
  const router = useRouter();

  return (
    <Container id={experienceSectionId} maxWidth="7xl" p={{ base: 2, sm: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
        Experiences
      </chakra.h3>
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <ExpereinceItem {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <ExpereinceItem {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <ExpereinceItem {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}{" "}
      <Card
        marginTop={10}
        sx={{ ...itemStyle, background: "background_lighter" }}
        boxShadow={"xl"}
      >
        <CardBody>
          <Heading size={"md"}>Skills:</Heading>
          <br></br>
          <SimpleGrid columns={{ base: 2, md: 4 }}>
            <SkillItem
              imageSrc={`${router.basePath}/icons/easter-bunny.png`}
              text={"bunny skill"}
            ></SkillItem>
            <SkillItem
              imageSrc={`${router.basePath}/icons/easter-bunny.png`}
              text={"bunny skill"}
            ></SkillItem>
            <SkillItem
              imageSrc={`${router.basePath}/icons/easter-bunny.png`}
              text={"bunny skill"}
            ></SkillItem>
          </SimpleGrid>
        </CardBody>
      </Card>
    </Container>
  );
};

interface ExperienceItemProps {
  id: number;
  title: string;
  company: string;
  companyLogoSrc: string;
  descriptions: string[];
  date: string;
}

const ExpereinceItem = ({
  id,
  title,
  company,
  companyLogoSrc,
  descriptions,
  date,
}: ExperienceItemProps) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue;
  let leftValue;
  let rightValue;
  const router = useRouter();

  const isMobile = true;
  leftValue = "-15px";
  rightValue = "unset";
  borderWidthValue = "15px 15px 15px 0";

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      sx={itemStyle}
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${itemStyle.background} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box>
        <Text fontSize="xl" color={isEvenId ? "teal.400" : "blue.400"}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Flex direction={"row"} align={"flex-start"} w="100%">
            <Image
              alt={company}
              height={"7"}
              marginTop={2}
              paddingLeft={5}
              paddingRight={2}
              src={`${router.basePath}/images/${companyLogoSrc}`}
            ></Image>
          </Flex>
          <UnorderedList>
            {descriptions.map((description, index) => {
              return (
                <ListItem fontSize={"md"} key={index}>
                  {description}
                </ListItem>
              );
            })}
          </UnorderedList>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={"gray.200"}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={"gray.600"}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};

interface SkillItemProps extends FlexProps {
  imageSrc: string;
  text: string;
}

function SkillItem({ imageSrc, text, ...rest }: SkillItemProps) {
  return (
    <Flex
      sx={itemStyle}
      marginBottom={5}
      bg="secondary"
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="cursor"
      _hover={{
        bg: "secondary",
        color: "white",
      }}
      {...rest}
    >
      <Image
        src={imageSrc}
        alt={text}
        width={10}
        height={10}
        marginRight={4}
      ></Image>
      <Text>{text}</Text>
    </Flex>
  );
}

export default Experience;
