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

  useEffect(() => {
    async function fetchCities() {
      try {
        dispatch(citiesActions.fetchCitiesRequest());
        // If using json-server:
        // const response = await fetch(`${BASE_URL}/cities`);
        // const data = await response.json();
        // Using local data:
        const data = citiesData.cities;
        dispatch(citiesActions.fetchCitiesSuccess(data));
      } catch (error) {
        dispatch(
          citiesActions.fetchCitiesFailure(
            error instanceof Error ? error.message : "Failed to fetch cities"
          )
        );
      }
    }

    fetchCities();
  }, []);

  async function findAndSetCurrentCity(id: number): Promise<void> {
    const city = state.cities.find((city) => city.id === id) || null;
    dispatch({ type: CitiesActionType.CITY_CURRENT, payload: city });
  }

  async function createCity(newCity: City): Promise<void> {
    try {
      dispatch(citiesActions.createCityRequest());
      // Add any API call here if needed
      dispatch(citiesActions.createCitySuccess(newCity));
    } catch (error) {
      dispatch(
        citiesActions.createCityFailure(
          error instanceof Error ? error.message : "Failed to create city"
        )
      );
    }
  }

  async function deleteCity(id: number): Promise<void> {
    try {
      dispatch(citiesActions.deleteCityRequest());
      // Add any API call here if needed
      dispatch(citiesActions.deleteCitySuccess(id));
    } catch (error) {
      dispatch(
        citiesActions.deleteCityFailure(
          error instanceof Error ? error.message : "Failed to delete city"
        )
      );
    }
  }

  const setCities = (cities: City[]) => {
    dispatch(citiesActions.fetchCitiesSuccess(cities));
  };

  const setCurrentCity = (city: City | null) => {
    dispatch(citiesActions.setCurrentCity(city));
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
