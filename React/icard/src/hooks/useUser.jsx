import { getMeApi } from "../api/user"; 

export function useUser () {
    const getMe = async (token) => {
        try {
            const response = await getMeApi(token);
            return response;
        } catch (error) {
            throw new Error (error);
        }
    };

    return {
        getMe,
    };
}