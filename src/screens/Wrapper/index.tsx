import { useContext } from "react";

import UserContext from "../../context/userContext";
import Home from "../Home";
import { StackNavigation } from "../../routes/stack";

export default function Wrapper() {
    const userData = useContext(UserContext); 

    return userData.user != null ? <Home/> : (
        <StackNavigation/>
    );
}