import { types } from "../types/types";

const initialState = {
    name: '',
    surname: '',
    surname2: '',
    birth: '',
    email: '',
    phone: '',
    username: '',
    password: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.userSignUp:
            return {
                ...state,
                name: action.payload.name,
                surname: action.payload.surname,
                surname2: action.payload.surname2,
                birth: action.payload.birth,
                email: action.payload.email,
                phone: action.payload.phone,
                username: action.payload.username,
                password: action.payload.password,
            }
        case types.userDelete:
            return {
                ...state
            }
        default:
            return state
    }
}