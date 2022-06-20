import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperatureUnits from "./WeatherTemperatureUnits";

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
        <div className="WeatherDescription mt-3">
          <div className="row">
            <div className="col-6">
              <span className="d-flex mb-3">
              <WeatherIcon code={props.data.icon} size={80} />
              <WeatherTemperatureUnits celsius={props.data.temperature} />
              </span>
            </div>
            <div className="col-6">
              <ul className="WeatherDesc mt-3">
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
