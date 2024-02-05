import { Box, Skeleton, SkeletonText, VStack } from '@chakra-ui/react'
import React from 'react'

export default function UserProfileFormSkeleton() {
  const arr = Array(5).fill(0, 0, 5)

  return (
    <VStack h="675px" w="100%" spacing={6} bg="white" p="5" rounded="md" boxShadow='lg'>
      {arr.map((_, index) =>
        <Box w="100%" opacity={0.8 - index/8}>
          <SkeletonText noOfLines={1} skeletonHeight='5' />
          <Skeleton h="40px" mt="2" />
        </Box>
      )
      }
    </VStack>
  )
}
