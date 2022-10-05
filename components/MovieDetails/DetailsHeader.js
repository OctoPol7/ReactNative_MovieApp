import { Button, StatusBar, Box, HStack, Text } from "native-base";

const DetailsHeader = props => {
  const { movieTitle } = props;
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
          <Button variant="ghost">Button</Button>
          <Text color="white" fontSize={20} fontWeight="bold">
            {movieTitle}
          </Text>
        </HStack>
      </Box>
    </>
  );
};

export default DetailsHeader;
