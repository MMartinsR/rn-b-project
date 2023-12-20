import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserContext from "../../context/userContext";
import Home from "../Home";
import { StackNavigation } from "../../routes/stack";

export default function Wrapper() {
    const userData = useContext(UserContext); 
    const Stack = createNativeStackNavigator();

    return userData.user != null ? <Home/> : (
        <StackNavigation/>
    );
}