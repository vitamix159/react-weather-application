import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      iconUrl: "https://react-weather-app-becca.netlify.app/static/media/sunny.b2af961d345c9d32417aab73c9e454a7.svg",


    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="WeatherHeader">
          <div className="row">
            <div className="col-10 form">
              <input
                type="search"
                placeholder="Enter a city.."
                autoComplete="off"
                autoFocus
              />
            </div>

            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-danger" />
            </div>
          </div>
        </div>
        <div className="WeatherNow">
          <h1 className="mt-4 mb-3">{weatherData.city},{' '}{weatherData.country}</h1>
          <ul>
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="WeatherDescription mt-5">
            <div className="row clearfix">
              <div className="col-6">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                />
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="units">°C</span>
              </div>
              <div className="col-6">
                <ul className="WeatherDesc">
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {Math.round(weatherData.wind)}km/h</li>
                  <li>Feels like: {Math.round(weatherData.feelsLike)}°C</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "940eef9ad873fd43d7217c86264acd04";
    let city = "Vilnius";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading.."
  }
}
