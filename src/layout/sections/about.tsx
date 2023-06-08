import {
  Card,
  CardBody,
  Container,
  Flex,
  FlexProps,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { about } from "../id";
import { ReactElement } from "react";
import { IoLogoGithub, IoLogoBitcoin, IoSearchSharp } from "react-icons/io5";

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
    <Container id={about} maxW={"100%"} py={12}>
      <SimpleGrid
        paddingTop={10}
        paddingBottom={10}
        paddingRight={{ base: 1, md: 10 }}
        columns={{ base: 1, md: 2 }}
        spacingY={10}
        sx={itemStyle}
      >
        <Flex flexDirection={"row"} alignItems={"center"}>
          <Image
            marginLeft={"auto"}
            marginRight={"auto"}
            rounded={"md"}
            alt={"feature image"}
            src={`${router.basePath}/images/me.png`}
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
          />
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
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          ></Stack>
        </Stack>
      </SimpleGrid>
      <SimpleGrid paddingTop={10} columns={1} spacingX={10} spacingY={10}>
        <Card bgColor={"background"} boxShadow={"xl"}>
          <CardBody>
            <Heading size={"md"}>Skills:</Heading>
            <br></br>
            <SimpleGrid columns={{ base: 1, md: 2 }}>
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
      </SimpleGrid>
    </Container>
  );
}

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
      <Image src={imageSrc} alt={text} width={10} height={10}></Image>
      <Text>{text}</Text>
    </Flex>
  );
}
