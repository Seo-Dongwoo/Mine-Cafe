import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TiWeatherSunny,
  TiWeatherStormy,
  TiWeatherShower,
  TiWeatherDownpour,
  TiWeatherSnow,
  TiWeatherCloudy,
} from "react-icons/ti";
import "../../assets/css/SearchMap/Toggle/GetWeather.css";
import { BsCloudFog } from "react-icons/bs";
import { Location } from "@styled-icons/evil/Location";
import styled from "styled-components";

const API_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather?";

const GetWeather = () => {
  const [city, setCity] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [temp, setTemp] = useState(0);
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCurrentWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;

        const url = `${API_ENDPOINT}lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;

        axios.get(url).then((res) => {
          setCity(res.data.name);
          setWeatherIcon(res.data.weather[0].id);
          setTemp(res.data.main.temp);
          setWind(res.data.wind.speed);
          setHumidity(res.data.main.humidity);
        });
      });
    }
  };

  const getWeatherIcon = () => {
    let iconId =
      weatherIcon === 800 ? 0 : (parseInt(weatherIcon) / 100).toFixed(0);
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
    return (k - 273.15).toFixed(1);
  };

  useEffect(() => {
    getCurrentWeather();
  }, [getCurrentWeather]);

  return (
    <WeatherContainer>
      <LocationContent>
        <CurrentPlace>
          <LocationIcon />
          {city}
        </CurrentPlace>
        <WindAndHumidity>
          풍속 : {wind}m/s
          <br />
          습도 : {humidity}%
        </WindAndHumidity>
      </LocationContent>
      <WeatherContent>
        <WeatherIcon>{getWeatherIcon()}</WeatherIcon>
        <Temperature>현재 기온 : {kelvinToFarenheit(temp)}°C</Temperature>
      </WeatherContent>
    </WeatherContainer>
  );
};

const WeatherContainer = styled.div`
  width: 100%;
  height: 20%;
  padding: 10px;
  display: flex;
  border-bottom: 1px solid #ddd;
`;

const LocationContent = styled.div`
  width: 50%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
`;

const CurrentPlace = styled.h3`
  width: 100%;
  padding: 10px 0 20px;
`;

const WindAndHumidity = styled.div`
  color: gray;
  font-size: 14px;
  font-weight: bold;
  padding-left: 10px;
`;

const WeatherContent = styled.div`
  width: 50%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px 0 0;
`;

const WeatherIcon = styled.div`
  text-align: center;
`;

const Temperature = styled.h5`
  text-align: center;
`;

const LocationIcon = styled(Location)`
  width: 20px;
  margin-right: 5px;
  margin-bottom: 5px;
  color: rgb(53, 216, 53);
`;

export default GetWeather;
