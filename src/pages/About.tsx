import React from "react";
import { VStack } from "@chakra-ui/react";
import MainLayout from "../layout/MainLayout";

const About: React.FC = () => {
  return (
    <MainLayout>
      <VStack spacing={8} w="full" align="start">
        <div>
          {/* Tempatkan konten yang ingin Anda tampilkan di sini */}
          <h> ini About</h>
          <ProductPage/>
        </div>
      </VStack>
    </MainLayout>
  );
};

export default About;

