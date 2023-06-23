import {
  Box,
  Button,
  Card,
  Center,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
  ImageProps,
} from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ColorThief, { RGBColor } from "colorthief";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { itemStyle } from "../id";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { TinyColor } from "@ctrl/tinycolor";

const descriptionTheme = {
  img: (props: any) => {
    let alt: string = props.alt;
    if (alt.toLowerCase().startsWith("covider")) {
      return <Image {...props} maxHeight={600} rounded={"3xl"}></Image>;
    }
    return <Image {...props}></Image>;
  },
};

export interface ProjectItemProps {
  name: string;
  shortDescription: string;
  thumbnail: string;
  description: string;
  images?: string[];
  video?: string;
  id?: number;
}

export default function ProjectItem({
  name,
  shortDescription,
  thumbnail,
  description,
  images,
  video,
}: ProjectItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [descriptionText, SetDescriptionText] = useState("");
  const [bgText, SetBgText] = useState("");

  useEffect(() => {
    fetch(description)
      .then((r) => r.text())
      .then((text) => {
        SetDescriptionText(text);
      })
      .catch((err) => {
        console.error(err);
      });
    const colorThief = new ColorThief();
    const img = document.getElementById(
      `${name}-thumbnail`
    ) as HTMLImageElement;

    const darken = (c: RGBColor) => {
      return new TinyColor({ r: c[0], g: c[1], b: c[2] })
        .darken(10)
        .saturate(30)
        .toRgbString();
    };

    if (img?.complete) {
      const c = colorThief.getColor(img);
      SetBgText(darken(c));
    } else if (img) {
      img.addEventListener("load", function () {
        const c = colorThief.getColor(img);
        SetBgText(darken(c));
      });
    }
  }, []);

  return (
    <Center py={12} onClick={onOpen}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={"gray.200"}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        color={"highlight"}
        _hover={{ color: "teal.400", cursor: "pointer" }}
      >
        <Box
          rounded={"lg"}
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
            bg: bgText,
            // backgroundImage: `url(${thumbnail})`,
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
            id={`${name}-thumbnail`}
            rounded={"md"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={thumbnail}
            alt={name}
          />
        </Box>
        <Stack mt={5} align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {name}
          </Heading>
          <Text textDecoration={"underline"} fontSize={"md"}>
            {shortDescription}
          </Text>
        </Stack>
      </Box>
      <Modal
        size={{ base: "2xl", md: "3xl", lg: "5xl" }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <Card sx={itemStyle}>
            <ModalHeader>
              <Heading textAlign={"center"} marginX={"auto"}>
                {name}
              </Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <SimpleGrid column={1} spacing={5}>
                {video && <LiteYouTubeEmbed id={video} title={name} />}
                {images?.map((img, key) => {
                  return <Image src={img} alt={img} key={key}></Image>;
                })}
                <Box marginX="10">
                  <ReactMarkdown
                    components={ChakraUIRenderer(descriptionTheme)}
                    skipHtml
                  >
                    {descriptionText}
                  </ReactMarkdown>
                </Box>
              </SimpleGrid>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </Card>
        </ModalContent>
      </Modal>
    </Center>
  );
}
