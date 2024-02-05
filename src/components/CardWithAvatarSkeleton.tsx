import { Box, Center, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export function CardWithAvatarSkeleton() {
    return (
    <Box padding='6' boxShadow='lg' bg='white' h="273px" w="224px">
        <Center mt="26px">
            <SkeletonCircle size='128px' />
        </Center>
        <SkeletonText mt='2' noOfLines={2} spacing='4' skeletonHeight='2' />
    </Box>)
}