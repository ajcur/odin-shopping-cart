import { useOutletContext } from "react-router-dom";
import ShopItem from "../components/ShopItem";
import styles from "./Shop.module.css";

export default function Shop() {
  const [items, handleAdd] = useOutletContext();
  return (
    <div className={styles.container}>
      {items &&
        items.map((item) => {
          return (
            <ShopItem
              key={`${item.id}Shop`}
              id={item.id}
              title={item.title}
              imgUrl={item.images[0]}
              price={item.price}
              handleAdd={handleAdd}
            />
          );
        })}
    </div>
  );
}
