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
import { Place } from "@styled-icons/material-sharp/Place";
import styled from "styled-components";

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
    <WeatherContainer>
      <WeatherIcon>{weatherIcon()}</WeatherIcon>
      <Temperature>{kelvinToFarenheit(temp)}°C</Temperature>
      <CurrentPlace>
        <PlaceIcon />
        {city}
      </CurrentPlace>
    </WeatherContainer>
  );
};

const WeatherContainer = styled.div`
  width: 100%;
  height: 20%;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

const WeatherIcon = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  align-items: center;
  margin: 0 auto;
`;

const Temperature = styled.h3`
  margin-top: 10px;
`;

const CurrentPlace = styled.h3`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
`;

const PlaceIcon = styled(Place)`
  width: 20px;
`;

export default GetWeather;
