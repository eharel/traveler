import { Country } from "../../../types";
import styles from "./CountryItem.module.css";

interface CountryItemProps {
  country: Country;
}

function CountryItem({ country }: CountryItemProps) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.name}</span>
    </li>
  );
}

export default CountryItem;
