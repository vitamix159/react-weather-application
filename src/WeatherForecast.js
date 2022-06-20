import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleTheResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    }

if (loaded) {
    console.log(forecast)
    return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index) {
                    if (index < 6) {
                        return (
                            <div className="col" key={index}>
                            <WeatherForecastDay data={dailyForecast} />
                         </div>)
                    }
                    
                })}
            </div>
        </div>
    )

} else {

let apiKey = `940eef9ad873fd43d7217c86264acd04`;
let lon = props.coordinates.lon;
let lat = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleTheResponse);

return null;

  }
}