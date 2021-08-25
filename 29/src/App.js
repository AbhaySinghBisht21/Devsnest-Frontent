// import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { city, cityDatas } from "./action";
function App() {
  // let [city, setCity] = useState("");
  // let [cityData, setCityData] = useState({});
  const citys = useSelector((state) => state.city);
  
  const cityData = useSelector((state) => state.cityData);
 
  const dispatch = useDispatch();

  // function updateCityData() {
  //   fetch(
  //     `https://api.weatherapi.com/v1/current.json?key=d12f8ac96da344e0a93141803210408&q=${city}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCityData(data);
  //     });
  // }
return(

  <div className="app">
  <header>
    {cityData.location ? (
      <div className="col">
        <img src={cityData.current.condition.icon} id="status" />
        <h>{cityData.current.temp_c} °C</h>
      </div>
    ) : (
      <></>
    )}
    <div className="col">
      <input
        id="input"
        
        type="text"
        placeholder="enter city"
        value={citys}
        onChange={(e) => {
          dispatch(city(e.target.value));
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            // updateCityData();
            dispatch(cityDatas(citys));
            dispatch(city(""));
            // setCity("");
          }
        }}
      />

      <button
        id="submit"
        onClick={() => {
          // updateCityData();
          // setCity("");
          dispatch(cityDatas(citys));
            dispatch(city(""));
        }}
      >
        go
      </button>

      {cityData.location ? (
        <div>
          <h>{cityData.location.name}</h>
        </div>
      ) : (
        <h id="error">No Place Found</h>
      )}
    </div>
  </header>
  {cityData.location ? (
    <div className="wrapper">
      <div className="cube">
        <div className="cube-row">
          <h1>description</h1>
          <ion-icon name="information-circle"></ion-icon>
        </div>
        <div className="cube-row">
          <p>{cityData.current.condition.text}</p>
        </div>
      </div>
      <div className="cube">
        <div className="cube-row">
          <h1>feels like</h1>
          <ion-icon name="thermometer"></ion-icon>
        </div>
        <div className="cube-row">
          <p id="feels-like">{cityData.current.feelslike_c}°C</p>
        </div>
      </div>
      <div className="cube">
        <div className="cube-row">
          <h1>humidity</h1>
          <ion-icon name="water"></ion-icon>
        </div>
        <div className="cube-row">
          <p id="humidity">{cityData.current.humidity}</p>
        </div>
      </div>
      <div className="cube">
        <div className="cube-row">
          <h1>wind speed</h1>
          <ion-icon name="rainy"></ion-icon>
        </div>
        <div className="cube-row">
          <p id="wind-speed">{cityData.current.wind_kph}kph</p>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )}
</div>
);
}

export default App;