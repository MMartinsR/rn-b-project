import { Flex, Heading } from "native-base";
import Top from "../../components/Top";
import Story from "../../components/Story";
import { useContext, useEffect } from "react";
import { Alert } from "react-native";
import UserContext from "../../context/userContext";
import ListCard from "../../components/ListCards";
import axios from "axios";

export default function Home() {
    const userData = useContext(UserContext);

    userData.user?.token
    // useEffect(() => {
    //     axios.get("http://192.168.1.91:3000/albums", {
    //         token: userData.user?.token,
    //     })
    //     .then(function (response) {
    //         userData.setUser({
    //           albums: response.data.albums
    //         });
    //       })
    //       .catch(function (error) {
    //         console.error("error", error);
    //         Alert.alert("Error", "Usuário ou senha inválidos!");
    //       });

    // }, [])


    return (
        <Flex p={5} flex={1} bg='primary.100' safeAreaTop>
            <Top />
            <Heading fontSize='40px' pt={2} color='secondary.100'>Welcome back {userData.user?.name}</Heading>
            <Story/>
            <ListCard/>            
        </Flex>
    )
}