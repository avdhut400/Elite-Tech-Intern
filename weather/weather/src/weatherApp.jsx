import "./Weather.css"; 
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    tempMax: 25.22,
    feels_like: 26,
    tempMin: 25.0,
    humid: 23,
    weather: "pune",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weather-app-container">
      <h2>Weather App By Sony</h2>
      <SearchBox update={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
