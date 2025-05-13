import styles from "./CityListItem.module.css";

import { City, SEARCH_PARAMS } from "../../../types";
import { Link } from "react-router-dom";

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
  const { cityName, emoji, date, id, position } = city;

  return (
    <li>
      {/* <Link className={styles.cityItem} to={`/app/cities/${id}`}> */}
      <Link
        className={styles.cityItem}
        to={`${id}?${SEARCH_PARAMS.lat}=${position.lat}&${SEARCH_PARAMS.lng}=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.cityName}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
