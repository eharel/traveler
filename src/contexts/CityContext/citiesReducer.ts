import { City, CitiesActionType, CitiesAction } from "../../types";

export interface CitiesState {
  cities: City[];
  isLoading: boolean;
  currentCity: City | null;
  error: string | null;
}

export const initialState: CitiesState = {
  cities: [],
  isLoading: false,
  currentCity: null,
  error: null,
};

export function citiesReducer(
  state: CitiesState,
  action: CitiesAction
): CitiesState {
  switch (action.type) {
    // Fetch cities
    case CitiesActionType.FETCH_CITIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CitiesActionType.FETCH_CITIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
        error: null,
      };
    case CitiesActionType.FETCH_CITIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    // Create city
    case CitiesActionType.CITY_CREATE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CitiesActionType.CITY_CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
        error: null,
      };
    case CitiesActionType.CITY_CREATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    // Delete city
    case CitiesActionType.CITY_DELETE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CitiesActionType.CITY_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: null,
        error: null,
      };
    case CitiesActionType.CITY_DELETE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    // Set current city
    case CitiesActionType.CITY_CURRENT:
      return {
        ...state,
        currentCity: action.payload,
      };

    default:
      return state;
  }
}
