import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NavigationStack from "./NavigationStack";
import IndexScreen from "../Screens/IndexScreen";
import DetailsScreen from "../Screens/DetailsScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerBackTitle: "Back to List" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
