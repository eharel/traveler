import { City } from "./modelTypes";

export enum CitiesActionType {
  FETCH_CITIES_REQUEST = "cities/fetch-request",
  FETCH_CITIES_SUCCESS = "cities/fetch-success",
  FETCH_CITIES_FAILURE = "cities/fetch-failure",

  CITIES_LOADED = "cities/loaded",
  CITY_CREATED = "city/created",

  CITY_DELETE_REQUEST = "city/delete-request",
  CITY_DELETE_SUCCESS = "city/delete-success",
  CITY_DELETE_FAILURE = "city/delete-failure",

  CITY_UPDATE_REQUEST = "city/update-request",
  CITY_UPDATE_SUCCESS = "city/update-success",
  CITY_UPDATE_FAILURE = "city/update-failure",

  CITY_CREATE_REQUEST = "city/create-request",
  CITY_CREATE_SUCCESS = "city/create-success",
  CITY_CREATE_FAILURE = "city/create-failure",

  CITY_CURRENT = "city/current",

  LOADING = "loading",
}

export type CitiesAction =
  | { type: CitiesActionType.FETCH_CITIES_REQUEST }
  | { type: CitiesActionType.FETCH_CITIES_SUCCESS; payload: City[] }
  | { type: CitiesActionType.FETCH_CITIES_FAILURE; payload: string }
  | { type: CitiesActionType.CITY_DELETE_REQUEST }
  | { type: CitiesActionType.CITY_DELETE_SUCCESS; payload: number }
  | { type: CitiesActionType.CITY_DELETE_FAILURE; payload: string }
  | { type: CitiesActionType.CITIES_LOADED; payload: City[] }
  | { type: CitiesActionType.CITY_CREATED; payload: City }
  | { type: CitiesActionType.CITY_DELETE_SUCCESS; payload: number }
  | { type: CitiesActionType.CITY_CURRENT; payload: City | null }
  | { type: CitiesActionType.LOADING }
  | { type: CitiesActionType.CITY_UPDATE_REQUEST }
  | { type: CitiesActionType.CITY_UPDATE_SUCCESS; payload: City }
  | { type: CitiesActionType.CITY_UPDATE_FAILURE; payload: string }
  | { type: CitiesActionType.CITY_CREATE_REQUEST }
  | { type: CitiesActionType.CITY_CREATE_SUCCESS; payload: City }
  | { type: CitiesActionType.CITY_CREATE_FAILURE; payload: string };
