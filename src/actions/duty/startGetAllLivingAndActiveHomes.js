import { fetchWithToken } from "../../helpers/fetch";
import { types } from "../../types/types";

export const startGetAllLivingAndActiveHomes = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchWithToken('allLivingActivehomes', {}, 'GET');
            const body = await resp.json();
            console.log(body);
            if (body.ok) {
                dispatch(allLivingAndActiveHomes(body.homes));
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const allLivingAndActiveHomes = (homes) => ({
    type: types.dutyHomes,
    payload: homes
});