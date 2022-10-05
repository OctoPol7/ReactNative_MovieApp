import { VStack, Center, Box, Select, Text, ScrollView } from "native-base";
import { useState, useEffect } from "react";
import MovieCard from "../MovieCard";
import { BASE_URL, API_KEY } from "../../services/api_config";

const TVShows = ({ navigation }) => {
  const [service, setService] = useState("popular");
  const [fetchShows, setFetchShows] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/tv/${service}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(json => setFetchShows(json.results))
      //   .then(console.log(fetchShows))
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
              <Select.Item label="Airing Today" value="airing_today" />
              <Select.Item label="On The Air" value="on_the_air" />
              <Select.Item label="Top Rated" value="top_rated" />
              <Select.Item label="Popular" value="popular" />
            </Select>
          </Box>
        </Center>
        <ScrollView>
          {isLoading ? (
            <Center>
              <Text>Loading...</Text>
            </Center>
          ) : fetchShows != null ? (
            fetchShows.map(show => {
              return (
                <MovieCard
                  image={show.poster_path}
                  movieTitle={show.name}
                  popularity={show.popularity}
                  releaseDate={show.first_air_date}
                  overview={show.overview}
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

export default TVShows;
