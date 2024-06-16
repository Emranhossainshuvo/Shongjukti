import { getAuth } from "firebase/auth";
import { createContext } from "react";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth =getAuth(app)

const AuthProvider = ({children}) => {

    const authData = {
        
    }


    return (
        <AuthContext.Provider value={authData}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;