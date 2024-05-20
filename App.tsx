import { SafeAreaProvider } from "react-native-safe-area-context"
import { RecoilRoot } from "recoil";
import React, { useCallback, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from "@expo-google-fonts/inter";
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from 'styled-components/native';
import theme from './src/Global/theme';
import Routes from 'src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold
  })

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <ThemeProvider theme={theme}> 
          <StatusBar style='dark'/>
          <RecoilRoot>
            <Routes/>
            </RecoilRoot>
        </ThemeProvider>
      </SafeAreaProvider>
  );
}