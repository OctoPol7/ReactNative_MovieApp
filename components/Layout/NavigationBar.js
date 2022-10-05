import { HStack, Box, Button, Pressable } from "native-base";
import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

const NavigationBar = props => {
  const pageSelectionHandler = event => {
    const pageSelected = event._dispatchInstances.alternate.memoizedProps.value;
    props.grabPage(pageSelected);
  };

  return (
    <>
      <HStack px={1} py={3} alignItems="center" justifyContent="space-between">
        <Button
          style={styles.NavigationBox}
          value="movies"
          onPress={pageSelectionHandler}
          _text={{
            color: "#aaa"
          }}
        >
          Movies
        </Button>
        <Button
          style={styles.NavigationBox}
          value="search_results"
          onPress={pageSelectionHandler}
          _text={{
            color: "#aaa"
          }}
        >
          Search Results
        </Button>
        <Button
          style={styles.NavigationBox}
          value="tv"
          onPress={pageSelectionHandler}
          _text={{
            color: "#aaa"
          }}
        >
          TV Shows
        </Button>
      </HStack>
    </>
  );
};

const styles = StyleSheet.create({
  NavigationBox: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#aaa",
    borderBottomWidth: 2,
    paddingBottom: 8
  }
});

export default NavigationBar;
