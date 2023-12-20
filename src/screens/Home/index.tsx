import { Flex, Heading } from "native-base";
import { useContext, useEffect, useState } from "react";

import Top from "../../components/Top";
import Story from "../../components/Story";
import UserContext from "../../context/userContext";
import ListCard from "../../components/ListCards";
import { getAlbums, getArtists } from "../../services/albums";

export default function Home() {
    const userData = useContext(UserContext);
    const [albums, setAlbums] = useState([]);
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        getAlbums(userData.user?.token)
        .then((response) => setAlbums(response.data))
        .catch((e) => console.log("erro", e));

        getArtists(userData.user?.token)
        .then((response) => setArtists(response.data))
        .catch((e) => console.log("erro", e));
    }, []);

    return (
        <Flex p={5} flex={1} bg='primary.100' safeAreaTop>
            <Top />
            <Heading fontSize='40px' pt={2} color='secondary.100'>Welcome back {userData.user?.name}</Heading>
            <Story items={artists}/>
            <ListCard items={albums}/>            
        </Flex>
    )
}