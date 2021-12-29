import axios from "axios";

export const getUsers = (currentPage = 1, pageSize = 10) => {
   return (
    axios
        .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true,
                // headers: {
                //     "API-KEY": "c8318c09-bc69-4998-90d2-cf579bd57f59"
                //     }

            }
            )
            .then(response => {return response.data})
   )
    
}
    