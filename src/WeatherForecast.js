import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">
                        Thu
                    </div>
                    <WeatherIcon code="02d" size="40" />
                    <div className="WeatherForecast-temperature">
                        <span className="WeatherForecastTemperature-max">19°</span>
                        <span className="WeatherForecastTemperature-min">10°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}