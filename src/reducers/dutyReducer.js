import { types } from "../types/types";

const initialState = {
    homes: []
}

export const dutyReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.dutyHomes:
            return {
                ...state,
                homes: [...action.payload]
            }
        case types.dutyLogout:
            return {
                ...initialState
            }
        default:
            return state
    }
}