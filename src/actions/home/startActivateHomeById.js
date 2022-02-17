import { fetchWithToken } from "../../helpers/fetch";
import { types } from "../../types/types";

export const startActivateHome = (id) => {
    const deactivated = 'NO';
    return async (dispatch) => {
        try {
            const resp = await fetchWithToken(`activateHome/${id}`, {}, 'PUT');
            const body = await resp.json();
            if (body.ok) {
                dispatch(activateHome(id, deactivated));
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const activateHome = (id, deactivated) => ({
    type: types.homeActivate,
    payload: {id, deactivated}
});