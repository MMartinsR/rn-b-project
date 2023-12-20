import { Container, Flex, Image, Text } from "native-base";


interface Props {
    text: string;
    bgColor?: string;
    img: string;
}

export default function Selected({ text, bgColor = "primary.100", img }: Props) {
    return (
        <Flex bgColor={bgColor} borderRadius={10} pb={2} style={{ alignContent: 'center', alignItems:"center", margin: 10 }}>
            {/* <Image
                m={2}
                source={{
                    uri: img,
                }}
                alt="Alternate Text"
            /> */}
            <Text margin={4} fontSize='20px' color="secondary.100">{text}</Text>
        </Flex>
    )
    
}