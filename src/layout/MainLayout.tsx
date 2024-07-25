import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/Header";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      minH="100vh"
    >
      <Flex direction="column" minH="100vh">
        <Header /> {/* Gunakan Header jika diperlukan */}
        <Flex flex="1" direction="column">
          {children}
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainLayout;

