import "./App.css";
import "./index.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vilnius" />
        <p className="text-center mt-3">
          This project was coded by Vitalija Ramonaitė and{" "}
          <a
            href="https://github.com/vitamix159/react-weather-application"
            target="_blank"
            without
            rel="noreferrer"
          >
            is open-sourced on GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
