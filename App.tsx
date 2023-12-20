import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import darkTheme from './src/theme';
import UserContext, { IUser } from './src/context/userContext';
import Wrapper from './src/screens/Wrapper';
import { storage } from './src/database/db';



export default function App() {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const userDb = storage.getString('user');
    if (userDb) {
      setUser(JSON.parse(userDb));
    }
  }, [])

  useEffect(() => {
    console.log("user", user);
    if (user != null) {
      storage.set('user', JSON.stringify(user));
    }
  }, [user]);

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

