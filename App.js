import { NativeBaseProvider } from "native-base";

import MoviesListContainer from "./components/containers/MoviesListContainer";
import AppStack from "./components/stacks/AppStack";
import NavigationStack from "./components/stacks/NavigationStack";
import Header from "./components/Layout/Header";
import NavigationBar from "./components/Layout/NavigationBar";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppStack />
    </NativeBaseProvider>
  );
}
