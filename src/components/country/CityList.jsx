import { useCities } from "../../contexts/CitesContext";
import Message from "../message/Message";
import Spinner from "../spinner/Spinner";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your city by clickin on a city on the map" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
