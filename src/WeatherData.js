import React from "react";
import FormattedDate from './FormattedDate';


export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="WeatherNow">
        <h1 className="mt-4 mb-3">
          {props.data.city}, {props.data.country}
        </h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="WeatherDescription mt-5">
          <div className="row clearfix">
            <div className="col-6">
              <img src={props.data.iconUrl} alt={props.data.description} />
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="units">°C</span>
            </div>
            <div className="col-6">
              <ul className="WeatherDesc">
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {Math.round(props.data.wind)}km/h</li>
                <li>Feels like: {Math.round(props.data.feelsLike)}°C</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
