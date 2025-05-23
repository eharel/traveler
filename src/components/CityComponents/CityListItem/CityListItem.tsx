import styles from "./CityListItem.module.css";
import { City, SEARCH_PARAMS } from "../../../types";
import { Link } from "react-router-dom";
import { useCities } from "../../../contexts/CityContext";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    // weekday: "long",
  }).format(new Date(date));

interface CityListItemProps {
  city: City;
}

export default function CityListItem({ city }: CityListItemProps) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  async function handleDelete(
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) {
    e.preventDefault();
    await deleteCity(id);
  }
  return (
    <li>
      {/* <Link className={styles.cityItem} to={`/app/cities/${id}`}> */}
      <Link
        className={`${styles.cityItem} ${
          currentCity?.id === id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?${SEARCH_PARAMS.lat}=${position.lat}&${SEARCH_PARAMS.lng}=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.cityName}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button
          className={styles.deleteBtn}
          onClick={(e) => handleDelete(e, id)}
        >
          &times;
        </button>
      </Link>
    </li>
  );
}
