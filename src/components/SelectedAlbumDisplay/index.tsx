import { Container, Text } from "native-base";


interface Props {
    text: string;
    bgColor?: string;
}

export default function Selected({ text, bgColor = "primary.100" }: Props) {
    return (
        <Container bgColor={bgColor} borderRadius={10} pb={5} style={{ alignContent: 'center', alignItems:"center", margin: 10 }}>
            <Text margin={5} color="secondary.100">{text}</Text>
        </Container>
    )
    
}