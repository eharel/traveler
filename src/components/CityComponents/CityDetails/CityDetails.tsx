import { useParams, useSearchParams } from "react-router-dom";
import styles from "./CityDetails.module.css";
import { City, SEARCH_PARAMS } from "../../../types";
import Message from "../../Message/Message";
import { useCities } from "../../../contexts/CityContext";

const formatDate = (date: string | Date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

export default function CityDetails() {
  const { cities } = useCities();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get(SEARCH_PARAMS.lat);
  const lng = searchParams.get(SEARCH_PARAMS.lng);

  // const { id } = useParams();
  const { id } = useParams<{ id: string }>();
  const idNumber = Number(id);
  const city = cities.find((city) => city.id === idNumber);
  console.log({ id, idNumber, cities });
  if (!city) {
    return <Message message="City not found" />;
  }
  const { cityName, emoji, date, notes } = city;

  // TEMP DATA
  const currentCity = {
    cityName: "Lisbon",
    emoji: "🇵🇹",
    date: "2027-10-31T15:59:59.138Z",
    notes: "My favorite city so far!",
  };

  // const { cityName, emoji, date, notes } = currentCity;

  return (
    <div>
      <h1>City Details</h1>
      <p>{id}</p>
      <p>{city?.cityName}</p>
    </div>
    // <div className={styles.city}>
    //   <div className={styles.row}>
    //     <h6>City name</h6>
    //     <h3>
    //       <span>{emoji}</span> {cityName}
    //     </h3>
    //   </div>

    //   <div className={styles.row}>
    //     <h6>You went to {cityName} on</h6>
    //     {/* <p>{formatDate(date || null)}</p> */}
    //     <p>{formatDate(date)}</p>
    //   </div>

    //   {notes && (
    //     <div className={styles.row}>
    //       <h6>Your notes</h6>
    //       <p>{notes}</p>
    //     </div>
    //   )}

    //   <div className={styles.row}>
    //     <h6>Learn more</h6>
    //     <a
    //       href={`https://en.wikipedia.org/wiki/${cityName}`}
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       Check out {cityName} on Wikipedia &rarr;
    //     </a>
    //   </div>

    //   <div>
    //   </div>
    // </div>
  );
}
