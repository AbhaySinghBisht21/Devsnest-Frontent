const addCityData = (state = {}, action) => {
    if (action.type === "cityData") {
      return action.payload;
    }
    return state;
  };
  
  export default addCityData;