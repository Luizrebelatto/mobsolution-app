import { SafeAreaProvider } from "react-native-safe-area-context"
import { RecoilRoot } from "recoil";
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from "@expo-google-fonts/inter";
import { useFonts } from 'expo-font';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/Global/theme';
import Routes from 'src/routes';


export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold
  })
  // if (!fontsLoaded) return <Text>LOADING</Text>;

  return (
      <SafeAreaProvider>
        <ThemeProvider theme={theme}> 
          <StatusBar style='dark'/>
          <RecoilRoot>
            <Routes/>
            </RecoilRoot>
        </ThemeProvider>
      </SafeAreaProvider>
  );
}