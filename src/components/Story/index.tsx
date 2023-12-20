import { Flex, Heading } from "native-base";
import ArtistCard from "../ArtistsCard";

interface Props {
    items: string[];
}

export default function Story({
    items,
}: Props) {
    return (
        <Flex pt={2} pb={4} alignContent="initial" bg='primary.100' h="container">
            <Heading color='secondary.100' fontSize='20px' pb={2}>Story</Heading>
            <ArtistCard items={items} />
        </Flex>
    )
}