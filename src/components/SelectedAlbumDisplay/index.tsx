import { Container, Text } from "native-base";


interface Props {
    text: string;
}

export default function Selected({ text }: Props) {
    return (
        <Container bgColor='transparency.100' borderRadius={10} pb={5} style={{ alignContent: 'center', alignItems:"center", margin: 10 }}>
            <Text color="secondary.100">{text}</Text>
        </Container>
    )
    
}