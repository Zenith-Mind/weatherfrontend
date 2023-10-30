import { createContext, useState } from "react";

export const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([
    "London",
    "New York",
    "Tokyo",
    "New Delhi",
  ]);

  const addCity = (newCities) => {
    setCities(newCities);
  };

  return (
    <CityContext.Provider value={{ cities, addCity }}>
      {children}
    </CityContext.Provider>
  );
};
