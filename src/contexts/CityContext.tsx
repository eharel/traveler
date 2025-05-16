import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useMemo,
  useContext,
} from "react";
import { City } from "../types";
import citiesData from "../../data/cities.json";

const URL = "http://localhost:9000";

interface CitiesContextType {
  cities: City[];
  isLoading: boolean;
  currentCity: City | null;
  setCities: (cities: City[]) => void;
  setCurrentCity: (city: City | null) => void;
}

const CitiesContext = createContext<CitiesContextType>({
  cities: [],
  isLoading: false,
  currentCity: null,
  setCities: () => {},
  setCurrentCity: () => {},
});

function CitiesProvider({ children }: { children: ReactNode }) {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState<City | null>(null);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const response = await fetch(`${URL}/cities`);
        const data = await response.json();
        setCities(data);
        setIsLoading(false);
      } catch (error) {
        alert("Error fetching cities:" + error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
    // fetchCities();

    setCities(citiesData.cities);
  }, []);

  const value = useMemo(
    () => ({
      cities,
      isLoading,
      currentCity,
      setCities,
      setCurrentCity,
    }),
    [cities, isLoading, currentCity]
  );

  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (!context) {
    throw new Error("useCities must be used within a CitiesProvider");
  }
  return context;
}

export { CitiesProvider, useCities };
