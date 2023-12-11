import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import darkTheme from './src/theme';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import UserContext from './src/context/userContext';
import { useState } from 'react';
import Wrapper from './src/screens/Wrapper';

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <NativeBaseProvider theme={darkTheme}>
      <UserContext.Provider value={{ user, setUser}}>
      <StatusBar style='auto' />
      <Wrapper />
      </UserContext.Provider>
    </NativeBaseProvider>
  );
}

