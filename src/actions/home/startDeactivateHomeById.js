import { fetchWithToken } from "../../helpers/fetch";
import { types } from "../../types/types";

export const startDeactivateHome = (id) => {
    const deactivated = 'YES';
    return async (dispatch) => {
        try {
            const resp = await fetchWithToken(`deactivateHome/${id}`, {}, 'PUT');
            const body = await resp.json();
            if (body.ok) {
                dispatch(deactivateHome(id, deactivated));
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const deactivateHome = (id, deactivated) => ({
    type: types.homeDeactivate,
    payload: {id, deactivated}
})