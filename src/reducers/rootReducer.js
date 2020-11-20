import {combineReducers} from "redux";
import CovidStatReducer from './CovidStatReducer';

const rootReducer = combineReducers( {
	CovidStat: CovidStatReducer

});

export default rootReducer;