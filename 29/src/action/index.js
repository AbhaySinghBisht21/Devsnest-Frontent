const city = (data) => {
  return {
    type: "city",
    payload: data,
  };
};


const cityDatas = (citys) => {
  return (dispatch) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=d12f8ac96da344e0a93141803210408&q=${citys}`
    )
      .then((res) => res.json())
      .then((data) => {
        return dispatch({
          type: "cityData",
          payload:data,
        });
      });
  };
};

export { city , cityDatas };