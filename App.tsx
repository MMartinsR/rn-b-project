import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import darkTheme from './src/theme';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

export default function App() {
  return (
    <NativeBaseProvider theme={darkTheme}>
      <StatusBar style='auto' />
      <Home />
    </NativeBaseProvider>
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
