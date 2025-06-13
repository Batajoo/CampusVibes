import { useContext, createContext, useState } from "react";

const initialState = {
    userStatus: false,
    userData: null
}

const AuthContext = createContext(null);

function AuthProvider({children, ...props}){
    const [auth, setAuth] = useState(initialState);
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(){
    const useAuth = useContext(AuthContext);
    return useAuth;
}

export {
    AuthProvider,
    useAuth
};

