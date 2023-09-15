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
    try {
        const url = `${BASE_API}/api/auth/me/`;
        const params = {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }

        const response = await fetch(url,params);
        const result = await response.json()
        return result
        
    } catch (error) {
        throw new Error(error)
    }
}