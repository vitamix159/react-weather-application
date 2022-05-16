import React from "react";
import "./Weather.css";
export default function Weather() {
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
        <h1 className="mt-4 mb-3">Vilnius, LT</h1>
        <ul>
          <li>Friday 15:32</li>
          <li className="text-capitalize">Clear sky</li>
        </ul>
        <div className="WeatherDescription mt-5">
          <div className="row clearfix">
            <div className="col-6">
              <img
                src="https://react-weather-app-becca.netlify.app/static/media/sunny.b2af961d345c9d32417aab73c9e454a7.svg"
                alt="Clear sky"
              />
              <span className="temperature">19</span>
              <span className="units">°C</span>
            </div>
            <div className="col-6">
              <ul className="WeatherDesc">
                <li>Humidity: 33%</li>
                <li>Wind: 7km/h</li>
                <li>Feels like: 20°C</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
