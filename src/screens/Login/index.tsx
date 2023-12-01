import { Flex, Heading, Input } from "native-base";
import { useContext } from "react";
import UserContext from "../../context/userContext";
import Button from "../../components/Button";

export default function Login() {
    const userData = useContext(UserContext);
    return (  
        <Flex p={5} flex={1} justifyContent='center' alignItems='center' bg='primary.100'>
            <Heading color='secondary.100' mb={10}>Login</Heading>
            <Input mt={3} bg='transparency.100' />
            <Input mt={3} bg='transparency.100'/>
            <Flex width="100%">
                <Button 
                    content="Sign in" 
                    variation="terciary" 
                    handleClick={() => userData.setUser({
                        name: 'Mariana',
                        email: 'mariana@gmail.com',
                    })} />
            </Flex>
        </Flex>
    )
}