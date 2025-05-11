import Spinner from "../../Spinner/Spinner";
import Message from "../../Message/Message";
import CityItem from "../CityItem/CityItem";
import { City } from "../../../types"; // Importing the City type
import styles from "./CityList.module.css";

interface CityListProps {
  cities: City[]; // Array of city objects
  isLoading: boolean; // Boolean indicating loading state
}

function CityList({ cities, isLoading }: CityListProps) {
  if (isLoading) {
    return <Spinner />;
  }

  if (!cities || cities.length === 0) {
    return <Message message="Add your first city through the map" />;
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
