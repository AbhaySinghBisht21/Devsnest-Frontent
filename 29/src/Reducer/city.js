const addCity = (state = "", action) => {
  if (action.type === "city") {
    return action.payload;
  }
  return state;
};

export default addCity;