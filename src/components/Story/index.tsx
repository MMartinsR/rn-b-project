import { Input, Flex, Heading } from "native-base";
import ListCard from "../ListCards";

export default function Story() {
    return (
        <Flex pt={5} flex={1} alignContent="initial" bg='primary.100'>
            <Heading color='secondary.100' mb={10} fontSize='20px'>Story</Heading>
            <ListCard />
        </Flex>
    )
}