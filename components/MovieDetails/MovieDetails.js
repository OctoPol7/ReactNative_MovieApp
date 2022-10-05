import {
  ScrollView,
  VStack,
  AspectRatio,
  Image,
  Text,
  Heading,
  Center,
  Box
} from "native-base";

const MovieDetails = props => {
  const { image, movieTitle, popularity, releaseDate, overview } = props;
  const image_path = `https://image.tmdb.org/t/p/original${image}`;

  return (
    <>
      <ScrollView>
        <VStack px="10">
          <Center>
            <Heading py="10">{movieTitle}</Heading>
            <Box px="10">
              <AspectRatio w="100%" ratio={1 / 1}>
                <Image
                  source={{
                    uri: image
                      ? image_path
                      : "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                  }}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <Text py="8">{overview}</Text>
            <Text fontSize="xs">
              Popularity: {popularity} | Release Date: {releaseDate}
            </Text>
          </Center>
        </VStack>
      </ScrollView>
    </>
  );
};

export default MovieDetails;
