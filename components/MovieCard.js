import { Box, AspectRatio, Image, HStack, Button, Text } from "native-base";

const moreDetail = () => {};

const MovieCard = props => {
  const {
    image,
    movieTitle,
    popularity,
    releaseDate,
    overview,
    navigation
  } = props;
  const image_path = `https://image.tmdb.org/t/p/original${image}`;

  return (
    <>
      <Box alignItems="center" py="3" my="1">
        <HStack space="2">
          <Box width="30%" maxWidth="120">
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
          <Box justifyContent="center">
            <Text bold fontSize="md" maxWidth="200" maxHeight="2.5rem">
              {movieTitle ? movieTitle : "Movie Title"}
            </Text>
            <Text>Popularity: {popularity ? popularity : "N/A"} </Text>
            <Text>Release Date: {releaseDate ? releaseDate : "N/A"} </Text>
            <Button
              width="100%"
              my="2"
              onPress={() => {
                navigation.navigate("Details", {
                  image,
                  movieTitle,
                  popularity,
                  releaseDate,
                  overview
                });
              }}
            >
              More Details
            </Button>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default MovieCard;
