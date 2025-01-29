"use client"
import { User, UserContextType } from "@/interface/interface";
import { createContext, useContext, useState } from "react";


const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{children: React.ReactNode}> =({children}) => {
    const [user, setUser] = useState<User | null>(null);

    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);
    if(!context){
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}