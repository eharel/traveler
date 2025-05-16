import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { SEARCH_PARAMS } from "../../types";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useState } from "react";
import { useCities } from "../../contexts/CityContext";

function Map() {
  const navigate = useNavigate();
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState<LatLngExpression>([45, 2]);

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get(SEARCH_PARAMS.lat);
  const lng = searchParams.get(SEARCH_PARAMS.lng);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker position={city.position} key={city.id}>
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
