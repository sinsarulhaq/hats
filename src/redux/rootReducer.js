import { combineReducers } from "redux"
import allReducer from "./reducer";

const rootReducer = combineReducers({
    data: allReducer
})

export default rootReducer;