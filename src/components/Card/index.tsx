import { Image } from "native-base";
import { TouchableOpacity } from "react-native";


interface Props {
    type: string;
    img: string;
    borderRadius?: string;
    size?: string;
    setSelected: (type: string) => void;
}

export default function Card ({ type, img, borderRadius = "0px", size="xl", setSelected }: Props) {
    return (
        <TouchableOpacity onPress={() => setSelected(type)}>
            <Image
                m={2}
                source={{
                    uri: img,
                }}
                borderRadius={borderRadius}
                alt="Alternate Text"
                size={size}
            />
        </TouchableOpacity>
    )
}