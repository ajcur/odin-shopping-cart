import { useOutletContext } from "react-router-dom";
import ShopItem from "../components/ShopItem";

export default function Shop() {
  const [items, handleAdd] = useOutletContext();
  return (
    <div>
      {items &&
        items.map((item) => {
          return (
            <ShopItem
              key={`${item.id}Shop`}
              id={item.id}
              title={item.title}
              imgUrl={item.thumbnail}
              price={item.price}
              handleAdd={handleAdd}
            />
          );
        })}
    </div>
  );
}
