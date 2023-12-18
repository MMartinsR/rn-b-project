import { Flex, Heading, Input, Text } from "native-base";
import { useContext, useState } from "react";
import { useToast } from 'native-base';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import UserContext from "../../context/userContext";
import Button from "../../components/Button";
import { login } from "../../services/auth";

export default function Login() {
    const userData = useContext(UserContext);
    const toast = useToast();
    const navigator = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
      login({
        username: username, 
        password: password,
      })
      .then(function (response) {
        userData.setUser({
          name: username,
          email: "mariana.rosa@al.infnet.edu.br",
          token: response.data.token,
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
                <TouchableOpacity onPress={() => navigator.navigate("Register")}>
                  <Text style={{ color: 'white' }}>Cadastrar</Text>
                </TouchableOpacity>
            </Flex>
        </Flex>
    )
}