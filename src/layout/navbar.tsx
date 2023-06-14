import {
  Box,
  BoxProps,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  Icon,
  IconButton,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";
import { IconType } from "react-icons";
import { FiCalendar, FiMenu } from "react-icons/fi";
import { MdWork } from "react-icons/md";

import Bunny from "./Icons/bunny";
import { projectsSectionId } from "./id";

interface LinkItemProps {
  name: string;
  icon: any;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "About", icon: Bunny },
  { name: "Experiences", icon: FiCalendar },
  { name: projectsSectionId, icon: MdWork },
];

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        onClose();
      },
      false
    );
  }, []);
  return (
    <Box minH="100vh" bg={"gray.100"}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={"primary"}
      borderRight="1px"
      borderRightColor={"gray.200"}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Hello!
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          name={link.name}
          key={link.name}
          icon={link.icon}
          onClose={onClose}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
  name: string;
  onClose: () => void;
}

const itemStyle = {
  background: "rgba(67, 185, 204, 0.32)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(67, 185, 204, 0.3)",
};

const NavItem = ({ icon, children, name, onClose, ...rest }: NavItemProps) => {
  return (
    <Link
      onClick={() => {
        onClose();
      }}
      href={`#${name}`}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        sx={itemStyle}
        marginBottom={5}
        bg="secondary"
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "secondary",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      zIndex={100}
      position={"fixed"}
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      width={"100%"}
      height={"49"}
      alignItems="center"
      bg={"primary"}
      borderBottomWidth="1px"
      borderBottomColor={"teal.400"}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
        border={""}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Hello!
      </Text>
    </Flex>
  );
};
