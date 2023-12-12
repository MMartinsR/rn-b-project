import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Card from "../Card";
import { ARTISTS } from "../Data/data";
import { Flex } from "native-base";

export default function ArtistCard() {
    const [selectedArtist, setSelectedArtist] = useState("");

    useEffect(() => {
        // if (selectedAlbum == "Iron Maiden") {
        //     Alert.alert("Parabéns!", "Você selecionou um ótimo álbum!");
        // }
    }, [selectedArtist])

    
    return (
        <Flex h={"container"}>
            <FlatList
                    data={ARTISTS}
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