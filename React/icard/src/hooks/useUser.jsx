import {useState} from 'react'
// mis importanciones 
import { getMeApi, getUsersApi } from "../api/user"; 
import {useAuth} from "../hooks/useAuth"

export function useUser () {
    
    const [loading, setLoading] = useState(false); // vamos a generar un estado para cargar los usuarios "que aparezca un loading mientras el back responde"
    const [error, setError] = useState(null); // almaenará el error que se pueda generar 
    const [users, setUsers] = useState(null); // Almacena los usuarios que responda mi back
    const {auth} = useAuth();

    const getMe = async (token) => {
        /**
         * Hacemos una petición get para traer la información del usuario logueado 
         */
        try {
            const response = await getMeApi(token); // hacemos la petición y le enviamos el token de autenticación
            return response;
        } catch (error) {
            throw new Error (error);
        }
    };

    const getUsers = async () => {
        /**
         * Hace una petición get a nuestro back para traer los usuarios que se encuentres registrados en la base de datos 
         * Inputs:
         * Token: token de autenticación Se carga desde el hook de manera interna
         * Output:
         * Listado de usuarios, se carga en el estado users para llamarlos desde otra parte de mi app
         */
        try {
            setLoading(true) //Cargamos un estado inicial de carga que nos servira para indicar que estamos esperando a que se cargue la información 
            const response = await getUsersApi(auth.token); // hacemnos la petición al backend de nuestros datos 
            setLoading(false); // una vez terminada la espera cargamos un estado de false en loading indicando que ya no estamos en espera
            setUsers(response); // cargamos los usuarios en users 

        } catch (error) {
            setError(error)
        }
    }

    return {
        loading,
        error,
        users,
        getMe,
        getUsers
    };
}