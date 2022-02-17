import { fetchWithToken } from "../../helpers/fetch"
import { types } from "../../types/types";

export const startSelectHome = (id) => {
    return async (dispatch) => {
        try {
            const resp = await fetchWithToken(`homes/${id}`, {}, 'GET');
            const body = await resp.json();
            if (body.ok) {
                dispatch(setSelectHome(body.home));
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const setSelectHome = (home) => ({
    type: types.homeSelect,
    payload: home
});