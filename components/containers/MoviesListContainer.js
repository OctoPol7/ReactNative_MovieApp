import { VStack, Container, Text } from "native-base";
import React, { useState } from "react";

import NavigationBar from "../Layout/NavigationBar";
import Header from "../Layout/Header";
import Movies from "../Screens/Movies";
import TVShows from "../Screens/TVShows";
import SearchResults from "../Screens/SearchResults";

const MoviesListContainer = ({ navigation }) => {
  const [page, setPage] = useState("movies");

  const pageHandler = p => {
    switch (p) {
      case "movies":
        return <Movies navigation={navigation} />;
        break;
      case "search_results":
        return <SearchResults navigation={navigation} />;
        break;
      case "tv":
        return <TVShows navigation={navigation} />;
        break;
      default:
        return;
        break;
    }
  };
  return (
    <VStack>
      <Header />
      <NavigationBar grabPage={setPage} navigation={navigation} />
      {pageHandler(page)}
    </VStack>
  );
};

export default MoviesListContainer;
