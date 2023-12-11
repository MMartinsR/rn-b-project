import { Flex, Heading, Input } from "native-base";
import { useContext, useState } from "react";
import { Alert } from "react-native";

import UserContext from "../../context/userContext";
import Button from "../../components/Button";
import axios from "axios";

export default function Login() {
    const userData = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        console.log("entrou");
        axios.post("http://192.168.1.91:3000/user/login", {
        username: "gabriel",
        password: "1234",
      })
      .then(function (response) {
        userData.setUser({
          name: "Gabriel",
          email: "gabrielgs1408@gmail.com",
          token: response.data.token
        });
        
      })
      .catch(function (error) {
        console.error("error", error);
        Alert.alert("Error", "usuário ou senha inválidos");
      });
    }

    function login () {

        if (name === 'Mariana' && email === 'Mariana@gmail.com') {
            userData.setUser({
                name: name,
                email: email,
            })
        } else {
            Alert.alert('Credenciais inválidas!');
        }
        console.log(userData.user);
    }

    return (  
        <Flex p={5} flex={1} justifyContent='center' alignItems='center' bg='primary.100'>
            <Heading color='secondary.100' mb={10}>Login</Heading>
            <Input onChangeText={setName} mt={3} bgColor='transparency.100' color='white' />
            <Input onChangeText={setEmail} mt={3} bgColor='transparency.100' color='white' />
            <Flex width="100%" marginTop={10}>
                <Button 
                    content="Sign in" 
                    variation="terciary" 
                    handleClick={handleLogin} />
            </Flex>
        </Flex>
    )
}