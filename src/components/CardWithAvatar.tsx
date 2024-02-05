import { FlexProps, AvatarProps, Flex, Avatar, Box } from "@chakra-ui/react"


interface CardWithAvatarProps extends FlexProps {
    avatarProps: AvatarProps
  }
  
  export const CardWithAvatar = (props: CardWithAvatarProps) => {
    const { children, avatarProps, ...rest } = props
    return (
      <Flex
        direction="column"
        alignItems="center"
        rounded="md"
        padding="12"
        position="relative"
        shadow={{ md: 'base' }}
        {...rest}
      >
        <Box position="absolute" inset="0" height="120" bg="blue.200" roundedTop="inherit" />
        <Avatar size="2xl" {...avatarProps} />
        {children}
      </Flex>
    )
  }
  