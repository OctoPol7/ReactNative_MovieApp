import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Movies from "../Screens/Movies";
import SearchResults from "../Screens/SearchResults";
import TVShows from "../Screens/TVShows";

const Nav = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Nav.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#2c3e50",
          tabBarLabelStyle: { fontSize: 11.5 }
        }}
      >
        <Nav.Screen
          name="Movies"
          component={Movies}
          options={{ headerShown: false }}
        />
        <Nav.Screen
          name="Search Results"
          component={SearchResults}
          options={{ headerShown: false }}
        />
        <Nav.Screen
          name="TV Shows"
          component={TVShows}
          options={{ headerShown: false }}
        />
      </Nav.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
