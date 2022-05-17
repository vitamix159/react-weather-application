import React, { useState } from "react";

export default function WeatherTemperatureUnits(props) {
  const [units, setUnits] = useState("celsius");

  function showFah(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function showCel(event) {
      event.preventDefault();
      setUnits('celsius');
  }

  function fahrenheit() {
      return (props.celsius * 9) / 5 + 32;
  }

  if (units === "celsius") {
    return (
      <div className="WeatherTemperatureUnits">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          <a href="/"> °C </a> |{" "}
          <a href="/" onClick={showFah}>
            {" "}
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperatureUnits">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={showCel}> °C </a> |{" "}
          <a href="/">{" "}°F</a>
        </span>
      </div>
    );
  }
}
