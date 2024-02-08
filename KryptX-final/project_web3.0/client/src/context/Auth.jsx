import { createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider=async({children})=>{
    const user = "mahim"
    return(
        <>
            <AuthContext.Provider value={user}>
                {children}
            </AuthContext.Provider>
        </>
    )
} 