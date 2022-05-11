
import './App.css';
import Weather from "./Weather"
export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
        <p>
          This project was coded by Vitalija Ramonaitė and{" "}
            <a 
              href="https://github.com/vitamix159/react-weather-application"
              target="_blank">
              is open-sourced on GitHub
            </a>
        </p>
        </div>
      </div>
    );
  }


