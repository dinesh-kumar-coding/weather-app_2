import { useState } from "react";
import SearchForm from "./SearchForm";
import './App.css'

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [location, setLocation] = useState(null);

  async function fetchWeather(cityName) {
    setLoading(true);
    setError("");
    try {
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`,
      );
      if (!geoResponse.ok) {
        throw new Error("Failed to find city");
      }
      const geoData = await geoResponse.json();

      if(!geoData.results || geoData.results.length === 0){
        throw new Error("City not found. Try another name.")
      }

      const lat = geoData.results[0].latitude;
      const lon = geoData.results[0].longitude;

      setLocation({
        name: geoData.results[0].name,
        country: geoData.results[0].country,
      });

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
      );
      if (!weatherResponse.ok) {
        throw new Error(`Request failed: ${weatherResponse.status}`);
      }
      const weatherData = await weatherResponse.json();
      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SearchForm fetchWeather={fetchWeather}></SearchForm>
      {loading ? (
        <p className="message">Loading...</p>
      ) : error ? (
        <p className="message">{error}</p>
      ) : weather ?(
        <div className="weather-card">
          <p className="place">{location?.name}, {location?.country}</p>
          <p className="temp">Temperature: {weather?.current_weather?.temperature}°C</p>
          <p className="muted">Wind: {weather?.current_weather?.windspeed} km/h</p>
        </div>
      ) : (
        <p className="message">Search for a city to see its weather.</p>
      )}
    </>
  );
}

export default App;
