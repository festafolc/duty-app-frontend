import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { dutyReducer } from "./dutyReducer";
import { homeReducer } from "./homeReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    homes: homeReducer,
    duty: dutyReducer,
    ui: uiReducer
})