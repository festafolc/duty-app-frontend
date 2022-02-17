import { types } from "../../types/types";

export const startUnselectHome = () => {
    return (dispatch) => {
        dispatch(unselectHome());
    }
}

const unselectHome = () => ({
    type: types.homeUnselect
});