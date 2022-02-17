import { types } from "../types/types";

const initialState = {
    modalOpen: false,
    modalId: ''
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiOpenModal:
            return {
                ...state,
                modalOpen: true,
                modalId: action.modalId
            }
        case types.uiCloseModal:
            return {
                ...state,
                modalOpen: false,
                modalId: ''
            }  
        default:
            return state;
    }
}