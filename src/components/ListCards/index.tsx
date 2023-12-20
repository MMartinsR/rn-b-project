import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import Card from "../Card";
import { ALBUMS } from "../Data/data";
import Selected from "../../components/SelectedAlbumDisplay";
import { Flex, Heading, Text } from "native-base";

interface Props {
    items: string[];
  }

export default function ListCard({
    items,
  }: Props) {
    const [selectedAlbum, setSelectedAlbum] = useState("");

    useEffect(() => {
        if (selectedAlbum == "Iron Maiden") {
            Alert.alert("Parabéns!", "Você selecionou um ótimo álbum!");
        }
    }, [selectedAlbum])

    
    return (
        <Flex>
            <Heading color='secondary.100' fontSize='20px' pb={2}>Discover Pick ForYou</Heading>
            <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <Card 
                            key={item.id}
                            type={item.album}
                            img={item.img}                        
                            setSelected={setSelectedAlbum}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal
            />
          
            <Selected text={selectedAlbum} bgColor={"transparency.100"}/>            
        </Flex>
    )
}