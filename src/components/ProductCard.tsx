// src/components/ProductCard.tsx
import React from 'react';
import {
  Box,
  Image,
  Badge,
  Button,
  Flex,
} from "@chakra-ui/react";
import { StarIcon, InfoIcon, CheckIcon } from "@chakra-ui/icons";

interface CardProps {
  type: 'VIP' | 'Standard' | 'Hemat';
}

const Card: React.FC<CardProps> = ({ type }) => {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    panjang: "4.5m",
    lebar: "4.5m",
    title: type === 'VIP' ? 'TENDA GOLD LAYER' : type === 'Standard' ? 'TENDA GOLD GELEMBUNG' : 'Tenda Gelembung',
    formattedPrice: type === 'VIP' ? 'Rp. 6.000.000' : type === 'Standard' ? 'Rp. 5.000.000' : '$3.000.000',
    reviewCount: 34,
    rating: type === 'VIP' ? 5 : type === 'Standard' ? 4 : 3,
  };

  const typeBadgeColor = type === 'VIP' ? 'teal' : type === 'Standard' ? 'blue' : 'yellow';

  return (
    <Box
      maxW={['100%', 'sm']}
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      boxShadow='lg'
      backdropFilter='blur(20px)'
      m={[2, 4]}
      w="full"
    >
      <Image src={property.imageUrl} alt={property.imageAlt} height={['200px', '300px']} objectFit="cover" />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme={typeBadgeColor}>
            {type}
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.panjang} &bull; {property.lebar}
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / paket
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
      <Flex ml="2" p="4" justifyContent="space-between">
        <Button colorScheme="blue" size="md" variant="outline" leftIcon={<InfoIcon />}>
          Info
        </Button>
        <Button colorScheme="teal" size="md" variant="solid" leftIcon={<CheckIcon />}>
          Pesan
        </Button>
      </Flex>
    </Box>
  );
};

export default Card;
