import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { SEARCH_PARAMS } from "../../types";

function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get(SEARCH_PARAMS.lat);
  const lng = searchParams.get(SEARCH_PARAMS.lng);

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lng}</p>
    </div>
  );
}

export default Map;
