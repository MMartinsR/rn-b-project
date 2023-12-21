import { Flex, Text } from "native-base";


interface Props {
    text: string;
    bgColor?: string;
}

export default function Selected({ text, bgColor = "primary.100" }: Props) {
    return (
        <Flex bgColor={bgColor} borderRadius={10} pb={2} style={{ alignContent: 'center', alignItems:"center", margin: 10 }}>            
            <Text margin={4} fontSize='20px' color="secondary.100">{text}</Text>
        </Flex>
    )
    
}