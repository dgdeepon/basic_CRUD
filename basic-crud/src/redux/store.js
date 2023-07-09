import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./userReducer/userReducer";
import { singleReducer } from "./singleReducer/singleReducer";


const rootReducer=combineReducers({
    userReducer,
    singleReducer
});

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));