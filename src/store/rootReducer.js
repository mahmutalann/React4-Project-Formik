//Collecting All States
import { combinedReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combinedReducers({
    cart: cartReducer
})