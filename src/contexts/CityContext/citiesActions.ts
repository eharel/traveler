import { City, CitiesActionType, CitiesAction } from "../../types";

export const citiesActions = {
  setLoading: () => ({
    type: CitiesActionType.LOADING as CitiesActionType.LOADING,
  }),
  loadCities: (cities: City[]) => ({
    type: CitiesActionType.CITIES_LOADED as CitiesActionType.CITIES_LOADED,
    payload: cities,
  }),
  setCurrentCity: (city: City | null) => ({
    type: CitiesActionType.CITY_CURRENT as CitiesActionType.CITY_CURRENT,
    payload: city,
  }),
  createCity: (city: City) => ({
    type: CitiesActionType.CITY_CREATED as CitiesActionType.CITY_CREATED,
    payload: city,
  }),
  deleteCity: (id: number) => ({
    type: CitiesActionType.CITY_DELETED as CitiesActionType.CITY_DELETED,
    payload: id,
  }),
};

export type { CitiesAction };
