import { fetchWithToken } from "../../helpers/fetch";
import { types } from "../../types/types";
import { uiCloseModal } from "../ui/startUi";

export const startUpdateHomeById = (name, type, country, state, city, street, street_number, floor, door, zipcode, homeId) => {
    if (type === 'House') {
        type = 1;
    } else {
        type = 2;
    }
    return async (dispatch) => {
        try {
            const resp = await fetchWithToken(`homes/${homeId}`, {name, type, country, state, city, street, street_number, floor, door, zipcode}, 'PUT');
            const body = await resp.json();
            if (body.ok) {
                dispatch(updateHome(body.home));
                dispatch(uiCloseModal());
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const updateHome = (home) => ({
    type: types.homeUpdate,
    payload: home
})