import { useState } from "react";

export default function SearchForm({fetchWeather}) {

  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(city.trim() === "") return;
        fetchWeather(city);
        setCity("");
      }}
    >
      <input type="text" placeholder="Enter a city" value={city} onChange={(event)=>setCity(event.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}
