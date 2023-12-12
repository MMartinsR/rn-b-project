import { Flex, Heading, Input } from "native-base";
import { useContext, useState } from "react";
import { Alert } from "react-native";
import { useToast } from 'native-base';

import UserContext from "../../context/userContext";
import Button from "../../components/Button";
import axios from "axios";

export default function Login() {
    const userData = useContext(UserContext);
    const toast = useToast();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log("Bem vindo(a)!");
        axios.post("http://192.168.1.91:3000/user/login", {
        username: username,
        password: password,
      })
      .then(function (response) {
        userData.setUser({
          name: username,
          password: password,
          email: "mariana.rosa@al.infnet.edu.br",
          token: response.data.token,
          albums: {}
        });
      })
      .catch(function (error) {
        console.error("error", error);
        toast.show({
          description: 'Usuário ou senha inválidos!'
        })
      });
    }

    return (  
        <Flex p={5} flex={1} justifyContent='center' alignItems='center' bg='primary.100'>
            <Heading color='secondary.100' mb={10}>Login</Heading>
            <Input placeholder="Username" onChangeText={setUsername} mt={3} bgColor='transparency.100' color='white' />
            <Input placeholder="Password" onChangeText={setPassword} mt={3} bgColor='transparency.100' color='white' />
            <Flex width="100%" marginTop={10}>
                <Button 
                    content="Sign in" 
                    variation="terciary" 
                    handleClick={handleLogin} />
            </Flex>
        </Flex>
    )
}