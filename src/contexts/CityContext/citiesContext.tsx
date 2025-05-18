import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useMemo,
} from "react";
import { City, CitiesActionType } from "../../types";
import { CitiesState, citiesReducer, initialState } from "./citiesReducer";
import citiesData from "../../../data/cities.json";
import { citiesActions } from "./citiesActions";

const BASE_URL = "http://localhost:9000";

interface CitiesContextType extends Omit<CitiesState, "dispatch"> {
  setCities: (cities: City[]) => void;
  setCurrentCity: (city: City | null) => void;
  findAndSetCurrentCity: (id: number) => Promise<void>;
  createCity: (city: City) => Promise<void>;
  deleteCity: (id: number) => Promise<void>;
}

const CitiesContext = createContext<CitiesContextType | null>(null);

function CitiesProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(citiesReducer, initialState);

  // With json-server
  // useEffect(() => {
  //   async function fetchCities() {
  //     try {
  //       dispatch(citiesActions.setLoading());
  //       const response = await fetch(`${BASE_URL}/cities`);
  //       const data = await response.json();
  //       dispatch(citiesActions.loadCities(data));
  //     } catch (error) {
  //       console.error("Failed to fetch cities:", error);
  //       // dispatch({ type: CitiesActionType.ERROR, payload: error.message });
  //     }
  //   }

  //   fetchCities();
  // }, []);

  // Without json-server
  useEffect(() => {
    dispatch(citiesActions.setLoading());
    dispatch(citiesActions.loadCities(citiesData.cities));
  }, []);

  async function findAndSetCurrentCity(id: number): Promise<void> {
    const city = state.cities.find((city) => city.id === id) || null;
    dispatch({ type: CitiesActionType.CITY_CURRENT, payload: city });
  }

  async function createCity(newCity: City): Promise<void> {
    dispatch({ type: CitiesActionType.CITY_CREATED, payload: newCity });
  }

  async function deleteCity(id: number): Promise<void> {
    dispatch({ type: CitiesActionType.CITY_DELETED, payload: id });
  }

  const setCities = (cities: City[]) => {
    dispatch(citiesActions.loadCities(cities));
  };

  const setCurrentCity = (city: City | null) => {
    dispatch({ type: CitiesActionType.CITY_CURRENT, payload: city });
  };

  const value = useMemo(
    () => ({
      ...state,
      setCities,
      setCurrentCity,
      findAndSetCurrentCity,
      createCity,
      deleteCity,
    }),
    [state]
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
