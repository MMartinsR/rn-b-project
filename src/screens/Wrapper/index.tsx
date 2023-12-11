import { useContext } from "react";
import UserContext from "../../context/userContext";
import Login from "../Login";
import Home from "../Home";


export default function Wrapper() {
    const userData = useContext(UserContext) 
    return userData.user != null ? <Home/> : <Login/>;
}