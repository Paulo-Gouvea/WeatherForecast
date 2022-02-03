import React from "react";

import AppLoading from "expo-app-loading";
import { 
  useFonts,
  RobotoSlab_300Light,
  RobotoSlab_500Medium
} from '@expo-google-fonts/roboto-slab';

import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoSlab_300Light,
    RobotoSlab_500Medium
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}