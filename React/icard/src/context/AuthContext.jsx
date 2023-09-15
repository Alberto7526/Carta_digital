/**
 * Se encarga de controlar el sistema de autenticación 
 */
import {useEffect,useState,createContext} from "react";
import {setToken, getToken, removeToken} from '../api/token'
import { useUser } from "../hooks"; 

export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,
})

export function AuthProvider(props){
    const {children} = props;
    const [auth, setAuth] = useState(undefined);
    const {getMe} = useUser();
    useEffect(()=>{(async () => {
        const token = getToken();
        if (token) {
            const me = await getMe(token);
            setAuth({token,me});
        }else {
            setAuth(null);
        }

    })();
    },[])
    const login = async (token) => {
        setToken(token); // guardamos el token en la variable
        const me = await getMe(token);
        setAuth({token,me});
    }

    const logout = () => {
        if (auth) {
            removeToken();
            setAuth(null);
        }
    }
    const valueContext = {
        auth,
        login,
        logout,
    }

    // evita el parpadeo cuando ya esta logueado 

    if (auth===undefined) return null

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )

}