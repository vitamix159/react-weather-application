import React, { useState } from "react";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  

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
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSubmitChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "940eef9ad873fd43d7217c86264acd04";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="WeatherHeader">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-10 form">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  autoComplete="off"
                  autoFocus
                  onChange={handleSubmitChange}
                />
              </div>

              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-danger"
                />
              </div>
            </div>
          </form>
        </div>
        <WeatherData data={weatherData} />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
