import { fetchWithToken } from "../../helpers/fetch";
import { types } from "../../types/types"

export const startDeleteUser = (id) => {
    return async (dispatch) => {
        const resp = await fetchWithToken('', {id}, 'PUT');
        const body = await resp.json();
        if (body.ok) {
            localStorage.clear();
            dispatch(deleteUser());
        } else {
            alert('User was not deleted');
        }
    }
}

const deleteUser = () => ({
    type: types.authLogout
});