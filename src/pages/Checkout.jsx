import { useOutletContext } from "react-router-dom";
import CheckoutItem from "../components/CheckoutItem";

export default function Checkout() {
  const [items, handleAdd, handleRemoveOne, handleDelete, idsInCart] =
    useOutletContext();

  const uniqueIdsInCart = [...new Set(idsInCart)];
  const uniqueItemsInCart = uniqueIdsInCart.map((id) => {
    return items.find((item) => item.id === id);
  });

  return (
    <div>
      {uniqueIdsInCart &&
        uniqueItemsInCart.map((item) => {
          return (
            <CheckoutItem
              key={`${item.id}Checkout`}
              id={item.id}
              title={item.title}
              handleAdd={handleAdd}
              handleRemoveOne={handleRemoveOne}
              handleDelete={handleDelete}
              quantity={idsInCart.filter((id) => id === item.id).length}
            />
          );
        })}
    </div>
  );
}
