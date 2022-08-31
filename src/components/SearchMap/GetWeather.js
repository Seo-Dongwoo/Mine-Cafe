import React, { useState, useEffect } from "react";
import "../../assets/css/SearchMap/Toggle/GetWeather.css";
import axios from "axios";
import {
  TiWeatherSunny,
  TiWeatherStormy,
  TiWeatherShower,
  TiWeatherDownpour,
  TiWeatherSnow,
  TiWeatherCloudy,
} from "react-icons/ti";
import { BsCloudFog } from "react-icons/bs";

const API_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather?";

const GetWeather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCurrentWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;

        const url = `${API_ENDPOINT}lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;

        axios.get(url).then((res) => {
          setCity(res.data.name);
          setWeather(res.data.weather[0].id);
          setTemp(res.data.main.temp);
        });
      });
    }
  };

  const weatherIcon = () => {
    let iconId = weather === 800 ? 0 : (parseInt(weather) / 100).toFixed(0);
    switch (iconId) {
      case 0:
        return <TiWeatherSunny className="weather-icon" color="red" />;
      case "2":
        return <TiWeatherStormy className="weather-icon" color="black" />;
      case "3":
        return <TiWeatherShower className="weather-icon" color="blue" />;
      case "5":
        return <TiWeatherDownpour className="weather-icon" color="navy" />;
      case "6":
        return <TiWeatherSnow className="weather-icon" color="white" />;
      case "7":
        return <BsCloudFog className="weather-icon" color="gray" />;
      case "8":
        return <TiWeatherCloudy className="weather-icon" color="skyblue" />;
      default:
    }
  };

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  useEffect(() => {
    getCurrentWeather();
  }, [getCurrentWeather]);

  return (
    <div className="weather-container">
      <h3 className="current-place">현재 위치 : {city}</h3>
      <div className="weather-info">
        <h3 className="weather">날씨 :</h3>
        {weatherIcon()}
      </div>
      <h3 className="temp">온도 : {kelvinToFarenheit(temp)}°C</h3>
    </div>
  );
};

export default GetWeather;
