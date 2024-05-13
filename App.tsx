import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from "@expo-google-fonts/inter";
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";
import { ThemeProvider } from 'styled-components/native';
import theme from './src/Global/theme';
import { Login } from './src/screens/Login';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold
  })

  if (!fontsLoaded) return AppLoading;

  return (
    <ThemeProvider theme={theme}>
      <Login/>
    </ThemeProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
