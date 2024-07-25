import { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = useState<"top" | "right" | "bottom" | "left">("right");

  return (
    <Box bg={bg} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box fontWeight="bold" fontSize="xl">
          Logo
        </Box>
        <Flex alignItems={"center"} display={{ base: "none", md: "flex" }}>
          <Link href="/" px={2} color={color}>
            Home
          </Link>
          <Link href="/about" px={2} color={color}>
            About
          </Link>
          <Link href="/contact" px={2} color={color}>
            Contact
          </Link>
          <Button onClick={toggleColorMode} ml={4}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
        />
      </Flex>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
            <DrawerBody>
              <VStack align="start">
                <Link href="/" onClick={onClose}>
                  Home
                </Link>
                <Link href="/about" onClick={onClose}>
                  About
                </Link>
                <Link href="/contact" onClick={onClose}>
                  Contact
                </Link>
                <Button onClick={toggleColorMode} mt={4} w="full">
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />} Toggle Mode
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Header;
