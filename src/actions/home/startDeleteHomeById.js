import { fetchWithToken } from "../../helpers/fetch"
import { types } from "../../types/types";

export const startDeleteHomeById = (id) => {
    return async (dispatch) => {
        try {
            const resp = await fetchWithToken(`homes/${id}`, {}, 'DELETE');
            const body = await resp.json();
            if (body.ok) {
                dispatch(homeDelete(id));
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const homeDelete = (id) => ({
    type: types.homeDelete,
    payload: id
});