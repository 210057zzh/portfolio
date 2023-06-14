import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

const IMAGE = "/portfolio/images/me.png";

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
  id,
}: ProjectItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center py={12} id={`${id}`} onClick={onOpen}>
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
            backgroundImage: `url(${thumbnail})`,
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
            rounded={"md"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={thumbnail}
          />
        </Box>
        <Stack pt={5} align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {name}
          </Heading>
          <Text fontSize={"md"}>{shortDescription}</Text>
        </Stack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}
