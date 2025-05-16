import { useParams } from "react-router-dom";
import styles from "./CityDetails.module.css";
import Message from "../../Message/Message";
import { useCities } from "../../../contexts/CityContext";
import { useEffect } from "react";
import Spinner from "../../Spinner/Spinner";
import BackButton from "../../Buttons/BackButton/BackButton";

const formatDate = (date: string | Date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

export default function CityDetails() {
  const { id } = useParams<{ id: string }>();
  const idNumber = Number(id);

  const { findAndSetCurrentCity, currentCity, isLoading } = useCities();

  useEffect(() => {
    findAndSetCurrentCity(idNumber);
  }, [idNumber, findAndSetCurrentCity]);

  if (!currentCity) {
    return <Message message="City not found" />;
  }

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        {/* <p>{formatDate(date || null)}</p> */}
        <p>{formatDate(date)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
}
