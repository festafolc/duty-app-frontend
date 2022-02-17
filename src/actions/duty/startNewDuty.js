import { fetchWithToken } from "../../helpers/fetch";
import { types } from "../../types/types";

export const startNewDuty = (name, start, end, created_by) => {
    return async (dispatch) => {
        const resp = await fetchWithToken('/newDuty', {name, start, end, created_by}, 'POST');
        const body = await resp.json();
        console.log(body);
    }
}

const createNewDuty = () => ({
    type: types.dutyCreate
})