import { types } from "../../types/types";

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
        dispatch(homesLogout());
        dispatch(dutyLogout());
    }
}

const logout = () => ({
    type: types.authLogout
});

const homesLogout = () => ({
    type: types.homeLogout
});

const dutyLogout = () => ({
    type: types.dutyLogout
});