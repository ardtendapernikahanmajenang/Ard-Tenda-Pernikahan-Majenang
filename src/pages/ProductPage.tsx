// src/pages/Paket.tsx
import React, { useState, useEffect } from "react";
import { useColorModeValue, Flex, Heading, VStack, Box, Skeleton } from "@chakra-ui/react";
import Card from "../components/ProductCard";

const ProductPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const color = useColorModeValue("black", "white");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <VStack
      spacing={8}
      p={[2, 4, 6]}
      backgroundImage="url('https://images.unsplash.com/photo-1569437067053-162c0b4e5d3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fHdZWRkaW5nJTIwdGVudHxlbnwwfHx8fDE2ODMwMzUyNjM&ixlib=rb-1.2.1&q=80&w=1080')"
      backgroundSize="cover"
      backgroundPosition="center"
      w="full"
    >
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        backdropFilter="blur(10px)"
        p={4}
        w="full"
        maxW="1000px"
      >
        <Heading pt="5" as="h1" size="xl" textAlign="center" color={color}>
          Paket VIP
        </Heading>
        {loading ? (
          <Flex direction="row" justifyContent="center" alignItems="center" wrap="wrap" gap={4}>
            <Skeleton width={['100%', '400px']} height={['200px', '400px']} />
            <Skeleton width={['100%', '400px']} height={['200px', '400px']} />
            <Skeleton width={['100%', '400px']} height={['200px', '400px']} />
          </Flex>
        ) : (
          <Flex direction="row" justifyContent="center" alignItems="center" wrap="wrap" gap={4}>
            <Card type="VIP" />
            <Card type="VIP" />
            <Card type="VIP" />
          </Flex>
        )}
      </Box>

      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        backdropFilter="blur(10px)"
        p={4}
        w="full"
        maxW="1000px"
      >
        <Heading pt="5" as="h1" size="xl" textAlign="center" color={color}>
          Paket Standard
        </Heading>
        {loading ? (
          <Flex direction="row" justifyContent="center" alignItems="center" wrap="wrap" gap={4}>
            <Skeleton width={['100%', '300px']} height={['200px', '300px']} />
            <Skeleton width={['100%', '300px']} height={['200px', '300px']} />
            <Skeleton width={['100%', '300px']} height={['200px', '300px']} />
          </Flex>
        ) : (
          <Flex direction="row" justifyContent="center" alignItems="center" wrap="wrap" gap={4}>
            <Card type="Standard" />
            <Card type="Standard" />
            <Card type="Standard" />
          </Flex>
        )}
      </Box>

      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        backdropFilter="blur(10px)"
        p={4}
        w="full"
        maxW="1000px"
      >
        <Heading pt="5" as="h1" size="xl" textAlign="center" color={color}>
          Paket Hemat
        </Heading>
        {loading ? (
          <Flex direction="row" justifyContent="center" alignItems="center" wrap="wrap" gap={4}>
            <Skeleton width={['100%', '300px']} height={['200px', '300px']} />
            <Skeleton width={['100%', '300px']} height={['200px', '300px']} />
            <Skeleton width={['100%', '300px']} height={['200px', '300px']} />
          </Flex>
        ) : (
          <Flex direction="row" justifyContent="center" alignItems="center" wrap="wrap" gap={4}>
            <Card type="Hemat" />
            <Card type="Hemat" />
            <Card type="Hemat" />
          </Flex>
        )}
      </Box>
    </VStack>
  );
};

export default ProductPage;
