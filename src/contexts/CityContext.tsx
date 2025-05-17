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
  findAndSetCurrentCity: (id: number) => Promise<void>;
  createCity: (city: City) => Promise<void>;
}

const CitiesContext = createContext<CitiesContextType>({
  cities: [],
  isLoading: false,
  currentCity: null,
  setCities: () => {},
  setCurrentCity: () => {},
  findAndSetCurrentCity: () => Promise.resolve(),
  createCity: () => Promise.resolve(),
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

  async function findAndSetCurrentCity(id: number): Promise<void> {
    // try {
    //   setIsLoading(true);
    //   const response = await fetch(`${URL}/cities/${id}`);
    //   const data = await response.json();
    //   setCurrentCity(data);
    //   setIsLoading(false);
    // } catch (error) {
    //   alert("Error fetching cities:" + error);
    //   setIsLoading(false);
    // } finally {
    //   setIsLoading(false);
    // }

    setCurrentCity(cities.find((city) => city.id === id) || null);
  }

  async function createCity(newCity: City): Promise<void> {
    // try {
    //   setIsLoading(true);
    //   const response = await fetch(`${URL}/cities/`, {
    //     method: "POST",
    //     body: JSON.stringify(newCity),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   const data = await response.json();
    //   console.log(data);
    //   setCities((cities) => [...cities, data]);
    // } catch (error) {
    //   alert("Error creating city:" + error);
    //   console.log(error);
    // } finally {
    //   setIsLoading(false);
    // }

    setCities((cities) => [...cities, newCity]);
  }

  const value = useMemo(
    () => ({
      cities,
      isLoading,
      currentCity,
      setCities,
      setCurrentCity,
      findAndSetCurrentCity,
      createCity,
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
