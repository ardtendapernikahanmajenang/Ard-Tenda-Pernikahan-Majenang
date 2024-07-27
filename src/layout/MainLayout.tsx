import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      minH="100vh"
    >
      <Flex direction="column" minH="100vh">
        <Header />
        <Flex flex="1" direction="column" justifyContent="center" alignItems="center" p={[2, 4]}>
          {children}
        </Flex>
        <Footer />
      </Flex>
    </Box>
  );
};

export default MainLayout;

