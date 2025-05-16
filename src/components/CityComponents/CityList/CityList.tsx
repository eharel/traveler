import Spinner from "../../Spinner/Spinner";
import Message from "../../Message/Message";
import CityListItem from "../CityListItem/CityListItem";
import styles from "./CityList.module.css";
import { useCities } from "../../../contexts/CityContext";

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner />;
  }

  if (!cities || cities.length === 0) {
    return <Message message="Add your first city through the map" />;
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityListItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
