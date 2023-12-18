import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { MMKV } from 'react-native-mmkv';

import darkTheme from './src/theme';
import UserContext, { IUser } from './src/context/userContext';
import Wrapper from './src/screens/Wrapper';

// export const storage = new MMKV({
//   id: "movieapp",
// })

export default function App() {
  const [user, setUser] = useState<IUser | null>(null);
  return (
    <NativeBaseProvider theme={darkTheme}>
      <UserContext.Provider value={{ user, setUser}}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Wrapper />
      </NavigationContainer>
      </UserContext.Provider>
    </NativeBaseProvider>
  );
}

