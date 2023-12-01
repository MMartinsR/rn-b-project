import React from "react";
import { Flex, Center, Spacer, Box } from "native-base";

export default function Top() {
    return (
        <Flex h={40} direction="row" safeAreaTop bg='primary.100'>
            <Center size={16} ml={3} mt={3} bg="primary.500" _dark={{
            bg: "primary.400"
            }} rounded="sm" _text={{
            color: "warmGray.50",
            fontWeight: "medium"
            }}>
                Box 1
            </Center>
            <Spacer />
            <Center size={16} mr={3} mt={3} bg="secondary.500" _dark={{
            bg: "secondary.400"
            }} rounded="sm" _text={{
            color: "warmGray.50",
            fontWeight: "medium"
            }}>
                Box 2
            </Center>
        </Flex>

    );
}