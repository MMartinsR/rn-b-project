import { useContext, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserContext from "../../context/userContext";
import { StackNavigation } from "../../routes/stack";
import Home from "../Home";

export default function Wrapper() {
    const userData = useContext(UserContext); 

    return userData.user != null ? <Home/> : (
        <StackNavigation/>
    );

}

