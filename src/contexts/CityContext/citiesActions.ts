import { City, CitiesActionType, CitiesAction } from "../../types";

export const citiesActions = {
  // Fetch cities
  fetchCitiesRequest: (): CitiesAction => ({
    type: CitiesActionType.FETCH_CITIES_REQUEST,
  }),
  fetchCitiesSuccess: (cities: City[]): CitiesAction => ({
    type: CitiesActionType.FETCH_CITIES_SUCCESS,
    payload: cities,
  }),
  fetchCitiesFailure: (error: string): CitiesAction => ({
    type: CitiesActionType.FETCH_CITIES_FAILURE,
    payload: error,
  }),

  // Create city
  createCityRequest: (): CitiesAction => ({
    type: CitiesActionType.CITY_CREATE_REQUEST,
  }),
  createCitySuccess: (city: City): CitiesAction => ({
    type: CitiesActionType.CITY_CREATE_SUCCESS,
    payload: city,
  }),
  createCityFailure: (error: string): CitiesAction => ({
    type: CitiesActionType.CITY_CREATE_FAILURE,
    payload: error,
  }),

  // Delete city
  deleteCityRequest: (): CitiesAction => ({
    type: CitiesActionType.CITY_DELETE_REQUEST,
  }),
  deleteCitySuccess: (id: number): CitiesAction => ({
    type: CitiesActionType.CITY_DELETE_SUCCESS,
    payload: id,
  }),
  deleteCityFailure: (error: string): CitiesAction => ({
    type: CitiesActionType.CITY_DELETE_FAILURE,
    payload: error,
  }),

  // Set current city (no async operation needed)
  setCurrentCity: (city: City | null): CitiesAction => ({
    type: CitiesActionType.CITY_CURRENT,
    payload: city,
  }),
};
