import { Flex, Heading } from "native-base";
import ArtistCard from "../ArtistsCard";

export default function Story() {
    return (
        <Flex pt={2} pb={4} alignContent="initial" bg='primary.100' h="container">
            <Heading color='secondary.100' fontSize='20px' pb={2}>Story</Heading>
            <ArtistCard />
        </Flex>
    )
}