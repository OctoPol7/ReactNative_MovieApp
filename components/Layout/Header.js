import { StatusBar, HStack, Box, Text } from "native-base";

const Header = () => {
  const bgColor = "#2c3e50";
  return (
    <>
      <StatusBar backgroundColor={bgColor} barStyle="light-content" />
      <Box safeAreaTop backgroundColor={bgColor}>
        <HStack
          bg={bgColor}
          px={1}
          py={3}
          alignItems="center"
          justifyContent="center"
        >
          <Text color="white" fontSize={20} fontWeight="bold">
            Movie App
          </Text>
        </HStack>
      </Box>
    </>
  );
};

export default Header;
