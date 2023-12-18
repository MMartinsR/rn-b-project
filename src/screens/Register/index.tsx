import { Flex, Heading, Input, useToast } from "native-base";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import Button from "../../components/Button";
import { register } from "../../services/auth";

export default function Register() {
  const toast = useToast();
  const navigator = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    register({
        username: username, 
        password: password,
      })
      .then(function (response) {
        console.log(response.data);
        if (response.status == 200) {
            navigator.navigate('Login');
            toast.show({
                description: 'Usuário registrado com sucesso!'
              })
        }
      })
      .catch(function (error) {
        console.error("error", error);
        toast.show({
          description: 'Ocorreu um erro ao registrar usuário!'
        })
      });
  };

  return (
    <Flex p={5} flex={1} justifyContent='center' alignItems='center' bg='primary.100'>
      <Heading color='secondary.100' mb={10}>Cadastro de usuário</Heading>
      <Input placeholder="Username" onChangeText={setUsername} mt={3} bgColor='transparency.100' color='white' />
      <Input placeholder="Password" onChangeText={setPassword} mt={3} bgColor='transparency.100' color='white' />
      <Flex width="100%" marginTop={10}>
        <Button 
            content="Registrar" 
            variation="terciary" 
            handleClick={handleRegister} />
      </Flex>
    </Flex>
  );
}