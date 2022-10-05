import { VStack, Center, Box, Select, Text, ScrollView } from "native-base";
import { useState, useEffect } from "react";
import MovieCard from "../MovieCard";
import { BASE_URL, API_KEY } from "../../services/api_config";

const Movies = ({ navigation }) => {
  const [service, setService] = useState("popular");
  const [fetchMovies, setFetchMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/movie/${service}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(json => setFetchMovies(json.results))
      .then(() => console.log(fetchMovies))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [service]);

  return (
    <>
      <VStack pt={5}>
        <Center>
          <Box mb={3}>
            <Select
              placeholder="Choose one"
              selectedValue={service}
              minWidth={200}
              onValueChange={itemValue => setService(itemValue)}
            >
              <Select.Item label="Now Playing" value="now_playing" />
              <Select.Item label="Popular" value="popular" />
              <Select.Item label="Top Rated" value="top_rated" />
              <Select.Item label="Upcoming" value="upcoming" />
            </Select>
          </Box>
        </Center>
        <ScrollView>
          {isLoading ? (
            <Center>
              <Text>Loading...</Text>
            </Center>
          ) : fetchMovies != null ? (
            fetchMovies.map(movie => {
              return (
                <MovieCard
                  image={movie.poster_path}
                  movieTitle={movie.title}
                  popularity={movie.popularity}
                  releaseDate={movie.release_date}
                  overview={movie.overview}
                  navigation={navigation}
                />
              );
            })
          ) : (
            <MovieCard />
          )}
        </ScrollView>
      </VStack>
    </>
  );
};

export default Movies;
