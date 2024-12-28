/* eslint-disable react/prop-types */
import Message from "../message/Message";
import Spinner from "../spinner/Spinner";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your city by clickin on a city on the map" />;
  return (
    <ul className={styles.countryList}>
      {cities.map((city) => (
        <CountryItem country={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CountryList;
