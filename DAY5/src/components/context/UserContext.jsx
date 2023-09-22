
import { createContext, useContext, useState } from "react";
const UserContext = createContext();
export const useUser = () => {
    return useContext(UserContext);
}

export const UserProvider = ({children}) => { 
    const[isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const login = () => {
        setIsUserLoggedIn(true);
    }
    const logout = () => {
        setIsUserLoggedIn(false);
    }
    const userValue = useMemo(() => (
    {
        isUserLoggedIn,login,logout
    }
    ),[isUserLoggedIn]);
    return (
        <UserContext.Provider value = {[isUserLoggedIn, login,logout]}>
        </UserContext.Provider>
    )
}