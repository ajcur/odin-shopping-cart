import { useOutletContext } from "react-router-dom";
import CheckoutItem from "../components/CheckoutItem";
import styles from "./Checkout.module.css";

export default function Checkout() {
  const [items, handleAdd, handleRemoveOne, handleDelete, idsInCart] =
    useOutletContext();

  const uniqueIdsInCart = [...new Set(idsInCart)];
  const uniqueItemsInCart = uniqueIdsInCart.map((id) => {
    return items.find((item) => item.id === id);
  });

  return (
    <>
      <h2 className={styles.heading}>Your Shopping Cart</h2>
      <div className={styles.container}>
        <div className={styles.itemsContainer}>
          {uniqueIdsInCart &&
            uniqueItemsInCart.map((item) => {
              return (
                <CheckoutItem
                  key={`${item.id}Checkout`}
                  id={item.id}
                  title={item.title}
                  imgUrl={item.thumbnail}
                  price={item.price}
                  handleAdd={handleAdd}
                  handleRemoveOne={handleRemoveOne}
                  handleDelete={handleDelete}
                  quantity={idsInCart.filter((id) => id === item.id).length}
                />
              );
            })}
        </div>
        <div className={styles.orderSummary}></div>
      </div>
    </>
  );
}
