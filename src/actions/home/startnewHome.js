import { fetchWithToken } from "../../helpers/fetch"
import { types } from "../../types/types";
import { uiCloseModal } from "../ui/startUi";

export const startNewHome = (name, type, country, state, city, street, homeNumber, floor, door, zipcode, userId) => {
    if (type === 'House') {
        type = 1;
    } else {
        type = 2;
    }
    return async (dispatch) => {
        try {
            const resp = await fetchWithToken('homes', {name, type, country, state, city, street, homeNumber, floor, door, zipcode, userId}, 'POST');
            const body = await resp.json();
            if (body.ok) {
                dispatch(createHome(body.home));
                dispatch(uiCloseModal());
            }
        } catch (error) {
        console.log(error);
    }
}
}

const createHome = (home) => ({
    type: types.homeCreate,
    payload: home
})