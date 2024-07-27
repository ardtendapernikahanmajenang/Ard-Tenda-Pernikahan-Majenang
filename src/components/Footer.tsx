// src/components/Footer.tsx
import {
  Box,
  Flex,
  Link,
  Text,
  IconButton,
  Stack,
  VStack,
  HStack,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const bg = useColorModeValue("gray.800", "gray.900");
  const color = useColorModeValue("white", "gray.200");

  return (
    <Box bg={bg} color={color} py={10}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="6xl"
        mx="auto"
        px={4}
      >
        <VStack align="start" spacing={4} w={{ base: "full", md: "auto" }}>
          <Text fontSize="lg" fontWeight="bold">
            Nama Perusahaan Anda
          </Text>
          <Text>Jl. Contoh Alamat No. 123, Kota ABC</Text>
          <Text>Email: info@nama-perusahaan.com</Text>
          <Text>Telepon: (021) 12345678</Text>
        </VStack>
        <VStack align="start" spacing={4} w={{ base: "full", md: "auto" }} mt={{ base: 8, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">
            Tautan Cepat
          </Text>
          <Link href="/" _hover={{ textDecoration: "underline" }}>
            Home
          </Link>
          <Link href="/about" _hover={{ textDecoration: "underline" }}>
            About
          </Link>
          <Link href="/contact" _hover={{ textDecoration: "underline" }}>
            Contact
          </Link>
        </VStack>
        <Stack direction="row" spacing={6} mt={{ base: 8, md: 0 }}>
          <Link href="https://www.facebook.com" isExternal>
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              colorScheme="facebook"
              variant="ghost"
              _hover={{ bg: "whiteAlpha.200" }}
            />
          </Link>
          <Link href="https://www.twitter.com" isExternal>
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              colorScheme="twitter"
              variant="ghost"
              _hover={{ bg: "whiteAlpha.200" }}
            />
          </Link>
          <Link href="https://www.instagram.com" isExternal>
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              colorScheme="pink"
              variant="ghost"
              _hover={{ bg: "whiteAlpha.200" }}
            />
          </Link>
          <Link href="https://www.linkedin.com" isExternal>
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              colorScheme="linkedin"
              variant="ghost"
              _hover={{ bg: "whiteAlpha.200" }}
            />
          </Link>
        </Stack>
      </Flex>
      <Divider my={6} />
      <Text textAlign="center" fontSize="sm">
        © 2024 Ard Tenda Majenang. Semua Hak Dilindungi.
      </Text>
    </Box>
  );
};

export default Footer;
