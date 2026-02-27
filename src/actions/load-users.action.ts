import axios from "axios"

export const loadUsersAction = async (page: number) => {

    try {
        const { data } = await axios.get(`https://reqres.in/api/users`, {
            params: {
                page: page
            },
            headers: {
                'x-api-key': import.meta.env.VITE_REQRES_API_KEY
            }
        });
        return data.data;
    } catch (error) {
        console.log(error)
    }
}