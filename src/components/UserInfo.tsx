import { StackProps, VStack, HStack, Text } from "@chakra-ui/react"

interface UserInfoProps extends StackProps {
    name: string
    bio: string
  }
  
  export const UserInfo = (props: UserInfoProps) => {
    const { name, bio, ...stackProps } = props
    return (
      <VStack spacing="1" flex="1" {...stackProps}>
        <HStack>
          <Text fontWeight="bold">{name}</Text>
        </HStack>
        <Text
          fontSize="sm"
          textAlign="center"
          noOfLines={2}
        >
          {bio}
        </Text>
      </VStack>
    )
  }
