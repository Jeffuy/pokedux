import { combineReducers } from "redux";
import dataReducer from "../slices/dataSlices";

const rootReducer = combineReducers({
	data: dataReducer,
});

export default rootReducer;
