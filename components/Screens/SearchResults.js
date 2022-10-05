import {
  VStack,
  Center,
  Box,
  Select,
  Text,
  ScrollView,
  FormControl,
  Input,
  HStack,
  Button,
  Icon
} from "native-base";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import MovieCard from "../MovieCard";
import { BASE_URL, API_KEY } from "../../services/api_config";

const SearchResults = ({ navigation }) => {
  const [service, setService] = useState("");
  const [query, setQuery] = useState("");
  const [fetchResults, setFetchResults] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getSearch = () => {
    fetch(`${BASE_URL}/search/${service}?api_key=${API_KEY}&query=${query}`)
      .then(res => res.json())
      .then(json => setFetchResults(json.results))
      .then(console.log(fetchResults))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <VStack pt={5} maxWidth="100%">
        <Center>
          <Box mb="5">
            <VStack mx="4">
              <FormControl isRequired maxWidth="100%">
                <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>
                <Input
                  type="search"
                  placeholder="type something..."
                  onChangeText={value => {
                    setQuery(value);
                    console.log(JSON.stringify(query));
                  }}
                  InputLeftElement={
                    <Icon
                      size={5}
                      ml={2}
                      color="grey"
                      as={Ionicons}
                      name="ios-search"
                    />
                  }
                />

                <HStack style={{ flexFlow: "row nowrap" }}>
                  <VStack mr="5">
                    <FormControl.Label>Choose Search Type</FormControl.Label>
                    <Select
                      placeholder="Choose one"
                      selectedValue={service}
                      minWidth={200}
                      onValueChange={itemValue => setService(itemValue)}
                    >
                      <Select.Item label="Movies" value="movie" />
                      <Select.Item label="Multi" value="multi" />
                      <Select.Item label="TV Shows" value="tv" />
                    </Select>
                    <FormControl.HelperText>
                      Please select an search type.
                    </FormControl.HelperText>
                  </VStack>
                  <Box justifyContent="center">
                    <Button
                      onPress={getSearch}
                      margin="0"
                      padding={1.5}
                      width="20"
                      startIcon={<Icon as={Ionicons} name="ios-search" />}
                    >
                      Search
                    </Button>
                  </Box>
                </HStack>
              </FormControl>
            </VStack>
          </Box>
        </Center>
        <ScrollView>
          {isLoading ? (
            <Center>
              <Text>Fill in the Search Form...</Text>
            </Center>
          ) : fetchResults != null ? (
            fetchResults.map(show => {
              return (
                <MovieCard
                  image={show.poster_path}
                  movieTitle={show.title || show.name}
                  popularity={show.popularity}
                  releaseDate={show.release_date || show.first_air_date}
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

export default SearchResults;
