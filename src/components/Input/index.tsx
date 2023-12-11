import { Input as NativeInput } from "native-base";

interface Props {
    value: string;
    // setValue: (value: string) => void;
    handleChangeText: () => void;
}

export default function Input({ value, handleChangeText }: Props) {
    
    return (
        <NativeInput mt={3}
            onChangeText={handleChangeText}
            bg='transparency.100'/>
    )
}