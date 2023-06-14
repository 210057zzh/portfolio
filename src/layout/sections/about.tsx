import {
  Box,
  Card,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { aboutSectionId } from "../id";

const itemStyle = {
  background: "rgba(67, 185, 204, 0.4)",
  boxShadow: "xl",
  backdropFilter: "blur(1px)",
  border: "2px solid rgba(67, 185, 204, 0.3)",
};

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
  link: string;
}

const Feature = ({ text, icon, iconBg, link }: FeatureProps) => {
  return (
    <Link
      href={link}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      isExternal
    >
      <Stack
        direction={"row"}
        align={"center"}
        //sx={itemStyle}
        bg="rgba(133, 74, 215, 0.4)"
        boxShadow="xl"
        backdropFilter="blur(1px)"
        border="2px solid rgba(133, 74, 215, 0.1)"
        rounded={"lg"}
        marginLeft={{ base: 4, md: 1 }}
        marginRight={{ base: 4, md: 1 }}
        _hover={{ bg: "hover", border: "2px solid hover" }}
      >
        <Flex
          w={8}
          h={8}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          bg={iconBg}
        >
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    </Link>
  );
};

export default function About() {
  const router = useRouter();
  return (
    <Container id={aboutSectionId} maxW={"100%"} py={12}>
      <SimpleGrid
        as={Card}
        paddingTop={10}
        paddingBottom={10}
        paddingLeft={10}
        paddingRight={10}
        columns={{ base: 1, md: 2 }}
        spacingY={10}
        spacingX={10}
        sx={itemStyle}
      >
        <Flex flexDirection={"row"} alignItems={"center"}>
          <Box
            marginLeft={"auto"}
            marginRight={"auto"}
            marginTop={-3}
            marginBottom={10}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `${router.basePath}/images/me.png`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              marginLeft={"auto"}
              marginRight={"auto"}
              rounded={"md"}
              alt={"feature image"}
              src={`${router.basePath}/images/me.png`}
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
            />
          </Box>
        </Flex>
        <Stack spacing={4}>
          <Heading textAlign={{ base: "center", md: "left" }}>
            ZHIHENG ZHANG
          </Heading>
          <Text color={"gray.800"} fontSize={"lg"}>
            I&apos;m a CS student that loves gaming and my rabbits. <br />
            You can find me either working on my laptop or doing house chores
            for my family.
          </Text>
          <div>
            <Heading size={"md"}>Education:</Heading>
            <Text as="b">B.S</Text> and <Text as="b">M.S</Text> in{" "}
            <Text as="b">Computer Science</Text> at
            <Text as="b"> University of Southern California</Text>
          </div>
          <Feature
            link={"https://github.com/210057zzh"}
            icon={<Icon as={IoLogoGithub} w={5} h={5} />}
            iconBg={""}
            text={"See Me on Github"}
          ></Feature>
          <Feature
            link={"https://www.linkedin.com/in/zhiheng-david-zhang-02ba52151"}
            icon={<Icon as={IoLogoLinkedin} w={5} h={5} />}
            iconBg={""}
            text={"See Me on LinkedIn"}
          ></Feature>
          <Stack
            spacing={4}
            divider={<StackDivider borderColor={"gray.100"} />}
          ></Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
