import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Card from "../Card";
import { Flex } from "native-base";

interface Props {
    items: string[];
}

export default function ArtistCard({
    items,
}: Props) {
    const [selectedArtist, setSelectedArtist] = useState("");
    
    return (
        <Flex h={"container"}>
            <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <Card 
                            key={item.id}
                            type={item.name}
                            img={item.img} 
                            borderRadius="90px"
                            size="85px"                       
                            setSelected={setSelectedArtist}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal
                />
        </Flex>
    )
}