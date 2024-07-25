import React from "react";
import { VStack } from "@chakra-ui/react";
import MainLayout from "../layout/MainLayout";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <VStack spacing={8} w="full" align="start">
        <div>
          {/* Tempatkan konten yang ingin Anda tampilkan di sini */}
          <h1>Welcome to Ard Majenang Tent Rental</h1>
          <p>Your one-stop solution for wedding tents.</p>
        </div>
      </VStack>
    </MainLayout>
  );
};

export default Home;

