import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import darkTheme from './src/theme';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import UserContext, { IUser } from './src/context/userContext';
import { useState } from 'react';
import Wrapper from './src/screens/Wrapper';

export default function App() {
  const [user, setUser] = useState<IUser | null>(null);
  return (
    <NativeBaseProvider theme={darkTheme}>
      <UserContext.Provider value={{ user, setUser}}>
      <StatusBar style="light" />
      <Wrapper />
      </UserContext.Provider>
    </NativeBaseProvider>
  );
}

