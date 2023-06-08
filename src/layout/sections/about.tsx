import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  HStack,
  Card,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import Bunny from "../Icons/bunny";
import { about } from "../id";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

export default function About() {
  const router = useRouter();
  return (
    <Container id={about} maxW={"2xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacingY={10}>
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
          <Text color={"gray.500"} fontSize={"lg"}>
            I&apos;m a CS student that loves gaming and my rabbits. <br />
            You can find me either working on my laptop or doing house chores
            for my family.
          </Text>
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
      <SimpleGrid
        paddingTop={10}
        columns={{ base: 1, md: 2 }}
        spacingX={10}
        spacingY={10}
      >
        <Card bgColor={"background"}>
          <CardBody>
            <Heading size={"md"}>Education:</Heading>
            <Text as="b">B.S</Text> and <Text as="b">M.S</Text> in{" "}
            <Text as="b">Computer Science</Text> at
            <Text as="b"> University of Southern California</Text>
          </CardBody>
        </Card>
        <Card bgColor={"background"}>
          <CardBody>
            <Heading size={"md"}>Education:</Heading>
            <Text as="b">B.S</Text> and <Text as="b">M.S</Text> in{" "}
            <Text as="b">Computer Science</Text> at
            <Text as="b"> University of Southern California</Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
