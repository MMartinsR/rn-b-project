import React from "react";
import { Flex, Center, Spacer, Image, FavouriteIcon } from "native-base";
import { TouchableOpacity } from "react-native";
import { storage } from "../../database/db";


export default function Top() {

    return (
        <Flex h={"container"} direction="row"  bg='primary.100'>
            <Center size={16} bg="primary.100" _dark={{
            bg: "primary.400"
            }}>
                <FavouriteIcon size="8" color="white"/>
            </Center>
            <Spacer />
            <Center size={16} bg="primary.100" _dark={{
            bg: "secondary.400"
            }}>
                <TouchableOpacity onPress={() => {                    
                    storage.clearAll();
                }}>
                <Image
                m={2}
                source={{
                    uri: 'https://img.freepik.com/premium-vector/portrait-cheerful-young-smiling-girl-cartoon-round-vector-banner_364586-1766.jpg?w=2000',
                }}
                borderRadius="30px"
                alt="Profile pic"
                size="50px"
                />
                </TouchableOpacity>
            </Center>
        </Flex>

    );
}