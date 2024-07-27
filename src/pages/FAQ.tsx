import React from "react";
import { VStack } from "@chakra-ui/react";
import MainLayout from "../layout/MainLayout";

const Faq: React.FC = () => {
  return (
    <MainLayout>
      <VStack spacing={8} w="full" align="start">
        <div>
          {/* Tempatkan konten yang ingin Anda tampilkan di sini */}
          <p> ini FAQ</p>
        </div>
      </VStack>
    </MainLayout>
  );
};

export default Faq;

