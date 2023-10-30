import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { CityContext } from "../contexts/CityContext";

const WeatherTable = () => {
  const { cities, addCity } = useContext(CityContext);
  const [newCity, setNewCity] = useState("");
  const API_KEY = "33711ae1f14490268b375855fc1f5eb9";

  const fetchWeatherData = async () => {
    try {
      const promises = cities.map(async (city) => {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        return response.data;
      });

      const weatherData = await Promise.all(promises);

      const updatedCities = await cities.map((city, index) => ({
        name: city,
        weather: weatherData[index]?.weather || [],
        main: weatherData[index]?.main || {},
      }));

      addCity(updatedCities);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  };

  const handleRefresh = () => {
    //fetchWeatherData();
    location.reload();
  };

  const handleAddCity = () => {
    if (newCity.trim() !== "") {
      addCity([...cities, newCity]);
      setNewCity("");
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr key={city.name}>
              <td>{city.name}</td>
              <td>{(city.main?.temp - 273).toFixed(2)} °C</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handleRefresh}>Refresh Weather</button>
      </div>
      <div>
        <input
          type="text"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
          placeholder="Enter new city"
        />
        <button onClick={handleAddCity}>Add City</button>
      </div>
    </div>
  );
};

export default WeatherTable;
