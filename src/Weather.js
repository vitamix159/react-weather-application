import React from "react";
import './Weather.css'
export default function Weather() {
    return (
        <div className="Weather">
            <div className="WeatherHeader">
                <form>
                    <input 
                    type="search" 
                    placeholder="Enter a city.."
                    autoComplete="off"
                    autoFocus
                    />
                    <input type="submit" value="Search" className="btn btn-danger" />
                </form>
            </div>
        <div className="WeatherOverall">
            <h1>Vilnius, LT</h1>
                <ul>
                    <li>Friday 15:32</li>
                    <li>Clear sky</li>
                </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://react-weather-app-becca.netlify.app/static/media/sunny.b2af961d345c9d32417aab73c9e454a7.svg" alt="Clear sky" width={100} />
                    19°C
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: 33%</li>
                        <li>Wind: 7km/h</li>
                        <li>Feels like: 20°C</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    );
}