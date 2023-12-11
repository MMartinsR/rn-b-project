import { Flex, Heading } from "native-base";
import Top from "../../components/Top";
import Story from "../../components/Story";
import { useContext } from "react";
import UserContext from "../../context/userContext";
import ListCard from "../../components/ListCards";

export default function Home() {
    const userData = useContext(UserContext);

    userData.user?.token

    return (
        <Flex p={5} flex={1} bg='primary.100' safeAreaTop>
            <Top />
            <Heading fontSize='40px' color='secondary.100'>Welcome back {userData.user.name}</Heading>
            <Story/>
            <ListCard/>
        </Flex>
    )
}