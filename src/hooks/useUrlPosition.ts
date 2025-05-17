import { useSearchParams } from "react-router-dom";
import { SEARCH_PARAMS } from "../types";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = Number(searchParams.get(SEARCH_PARAMS.lat));
  const lng = Number(searchParams.get(SEARCH_PARAMS.lng));
  return [lat, lng];
}
