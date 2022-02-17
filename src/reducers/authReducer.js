import { types } from "../types/types";

const initialState = {
    logged: false,
    id: null,
    username: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                logged: true,
                id: action.payload[0].id,
                username: action.payload[0].username
            }
        case types.authLogout:
            return {
                logged: false,
                id: null,
                username: null
                }
        default:
            return state
    }
}