import { handleCart } from "./handlecart";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    handleCart: handleCart,
});

export default allReducers;
