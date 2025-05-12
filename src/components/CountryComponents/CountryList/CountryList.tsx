import Spinner from "../../Spinner/Spinner";
import Message from "../../Message/Message";
import { City, Country, createCountry } from "../../../types"; // Importing the City type
import styles from "./CountryList.module.css";
import CountryItem from "../CountryItem/CountryItem";

interface CountryListProps {
  cities: City[]; // Array of city objects
  isLoading: boolean; // Boolean indicating loading state
}

function CountryList({ cities, isLoading }: CountryListProps) {
  if (isLoading) {
    return <Spinner />;
  }

  if (!cities || cities.length === 0) {
    return <Message message="Add your first city through the map" />;
  }

  const countries: Country[] = [];

  // Create an array of unique countries from the cities
  cities.forEach((city) => {
    const existingCountry = countries.find(
      (country) => country.name === city.country
    );
    if (!existingCountry) {
      countries.push(createCountry(city.id, city.country, city.emoji));
    }
  });

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
