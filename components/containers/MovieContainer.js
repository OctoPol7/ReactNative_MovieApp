import { NativeBaseProvider, VStack } from "native-base";

import DetailsHeader from "../MovieDetails/DetailsHeader";
import MovieDetails from "../MovieDetails/MovieDetails";

const MovieContainer = ({ navigation, route }) => {
  const { image, movieTitle, popularity, releaseDate, overview } = route.params;
  return (
    <>
      <NativeBaseProvider>
        <VStack>
          <MovieDetails
            image={image}
            movieTitle={movieTitle}
            popularity={popularity}
            releaseDate={releaseDate}
            overview={overview}
          />
        </VStack>
      </NativeBaseProvider>
    </>
  );
};

export default MovieContainer;
