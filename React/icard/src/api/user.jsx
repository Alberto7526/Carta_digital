import {BASE_API} from "../utils/constants";

export async function loginApi (formData) {
    /**
     * Esta función hace la petición fetch a mi backend y devuelve la repuesta en json 
     */
    const url = `${BASE_API}/api/auth/login/`
    const params = {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body:JSON.stringify(formData)
    };
    const response = await fetch(url,params);
    if (response.status !==200) {
        throw new Error ("Usuario o contraseña incorrecta");
    }
    const result = await response.json();
    return result;
}


export async function getMeApi (token){
    /**
     * Permite hacer una petición get para traer la información del usuario que se encuentra loqueado 
     * inputs:
     * token: token de autenticación ya que el backend solo responde a peticiones cuando esta logueado
     * outputs:
     * response: Datos del uusario logueado en un ibjeto .json
     */
    try {
        const url = `${BASE_API}/api/auth/me/`; // definimos la url 
        const params = {
            headers: {
                Authorization: `Bearer ${token}` // enviamos como parametro el token 
            },
        }

        const response = await fetch(url,params); // hacemos la petición y esperamos a que el backend responda 
        const result = await response.json(); // obtemos un json con la infomarción entregada por el backend
        return result
        
    } catch (error) {
        throw new Error(error)
    }
}

export async function getUsersApi (token){
    /**
     * Realiza una petición get que trae la información o listado de todos los usuarios 
     * inputs:
     * token: token de autenticación
     * outputs: 
     * result: listado de usuarios existentes en la base de datos EN FORMATO JSON
     */
    try {
        const url = `${BASE_API}/api/users/`; // definimos la url 
        const params = {
            headers: {
                Authorization: `Bearer ${token}` // enviamos como parametro el token 
            },
        }

        const response = await fetch(url,params); // hacemos la petición y esperamos a que el backend responda 
        const result = await response.json(); // obtemos un json con la infomarción entregada por el backend
        return result;
        
    } catch (error) {
        throw new Error(error)
    }

}

