import { combineReducers } from "redux";
import addCity from "./city";
import addCityData from "./cityData";

const reducers = combineReducers({
  city: addCity,
  cityData: addCityData,
  
});

export default reducers;
