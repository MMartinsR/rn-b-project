import { Image } from "native-base";
import { TouchableOpacity } from "react-native";


interface Props {
    type: string;
    img: string;
    setSelected: (type: string) => void;
}

export default function Card ({ type, img, setSelected }: Props) {
    return (
        <TouchableOpacity onPress={() => setSelected(type)}>
            <Image
                m={2}
                source={{
                    uri: img,
                }}
                alt="Alternate Text"
                size="xl"
            />
        </TouchableOpacity>
    )
}