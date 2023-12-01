import { Input, Flex, Heading } from "native-base";
import Top from "../../components/Top";
import Story from "../../components/Story";

export default function Home() {
    return (
        <Flex p={5} flex={1} bg='primary.100'>
            <Top />
            <Heading  fontSize='40px' color='secondary.100'>Welcome back {}</Heading>
            <Story/>
        </Flex>
    )
}