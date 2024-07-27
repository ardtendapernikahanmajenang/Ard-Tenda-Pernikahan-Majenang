import React from "react";
import { VStack } from "@chakra-ui/react";
import MainLayout from "../layout/MainLayout";
import ProductPage from "../pages/ProductPage";
const Home: React.FC = () => {
  return (
    <MainLayout>
      <VStack spacing={8} w="full" align="start">
        <div>
          {/* Tempatkan konten yang ingin Anda tampilkan di sini */}
          <p> ini home </p>
          <ProductPage/>
        </div>
      </VStack>
    </MainLayout>
  );
};

export default Home;

