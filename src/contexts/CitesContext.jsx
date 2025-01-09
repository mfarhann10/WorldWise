/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";

//1. create a context
const CitiesContext = createContext();
const BASE_URL = "http://localhost:9000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);

        const data = await res.json();

        setCities(data);
      } catch {
        alert("Error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("Error");
    } finally {
      setIsLoading(false);
    }
  }

  //2. add the provider
  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

//4 custome hooks
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("Eroor");

  return context;
}

export { CitiesProvider, useCities };
