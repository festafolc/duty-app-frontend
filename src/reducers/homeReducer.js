import { types } from "../types/types";

const initialState = {
    livingHomes: [],
    deletedHomes: [],
    selectHome: null
}

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.homeSelect:
            return {
                ...state,
                selectHome: action.payload
            }
        case types.homeUnselect:
            return {
                ...state,
                selectHome: null
            }
        case types.homeGetAllLiving:
            return {
                ...state,
                livingHomes: [...action.payload]
            }
        case types.homeGetAllDeleted:
            return {
                ...state,
                deletedHomes: [...action.payload]
            }
        case types.homeCreate:
            return {
                ...state,
                livingHomes: [
                    ...state.livingHomes,
                    action.payload
                ]
            }
        case types.homeUpdate:
            return {
                ...state,
                livingHomes: state.livingHomes.map(
                    h => (h.id === parseInt(action.payload.id)) ? action.payload : h
                )
            }
        case types.homeActivate:
            return {
                ...state,
                livingHomes: state.livingHomes.map(
                    h => (h.id === parseInt(action.payload.id)) ? {...h, deactivated: action.payload.deactivated} : h
                )
            }
        case types.homeDeactivate:
            return {
                ...state,
                livingHomes: state.livingHomes.map(
                    h => (h.id === parseInt(action.payload.id)) ? {...h, deactivated: action.payload.deactivated} : h
                )
            }
        case types.homeDelete:
            return {
                ...state,
                livingHomes: state.livingHomes.filter(
                    h => (h.id !== parseInt(action.payload))
                )
            }
        case types.homeRecover:
            return {
                ...state,
                deletedHomes: state.deletedHomes.filter(
                    h => (h.id !== parseInt(action.payload))
                )
            }
        case types.homeLogout:
            return {
                ...initialState
            }
        default:
            return state
    }
}