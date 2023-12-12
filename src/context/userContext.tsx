import { createContext } from "react";

export type IUser = {
    name: string;
    email: string;
    password: string;
    token: string | null;
    albums: {} | null;
}

type IUserContext =  {
    user: IUser | null;
    setUser: (userData: IUser) => void;
}

const UserContext = createContext<IUserContext>({user: null, setUser: () => {}});

export default UserContext;

// npm run dev (API)