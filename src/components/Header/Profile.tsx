import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
        {showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Leonardo Cruz</Text>
            <Text color="gray.300" fontSize="small">
                leonardocm615@gmail.com
            </Text>
          </Box>
        )}

        <Avatar size="md" name="Leonardo Cruz" src="https://github.com/leonardocruzzz.png"/>
    </Flex>
  );
}
