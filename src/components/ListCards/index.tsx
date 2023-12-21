import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import Card from "../Card";
import Selected from "../../components/SelectedAlbumDisplay";
import { Flex, Heading, Text } from "native-base";

interface Props {
    items: string[];
  }

export default function ListCard({
    items,
  }: Props) {
    const [selectedAlbum, setSelectedAlbum] = useState("");
    
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
          
            <Selected text={selectedAlbum} bgColor={selectedAlbum !== ""? "transparency.100" : "primary.100"} /> 
                       
        </Flex>
    )
}