import { useState } from "react";
import styles from "./ShopItem.module.css";

export default function ShopItem({ id, title, handleAdd }) {
  const [quantity, setQuantity] = useState(0);
  const quantityText = quantity.toString();

  function handleChange(e) {
    e.target.value.replace(/\D/, "");
    let inputNum = Number(e.target.value);
    inputNum > 0 ? setQuantity(inputNum) : setQuantity(0);
  }

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  function handleDecrement() {
    quantity > 0 && setQuantity(quantity - 1);
  }

  function handleAddBtnClick() {
    if (quantity > 0) {
      handleAdd(id, quantity);
      setQuantity(0);
    }
  }

  return (
    <div className={styles.container}>
      <div>{title}</div>
      <div className={styles.quantityBox}>
        <label htmlFor={`${id}Quantity`}>Quantity:</label>
        <input
          type="number"
          value={quantityText}
          id={`${id}Quantity`}
          name="quantity"
          min="0"
          onChange={handleChange}
        />
        <button className={styles.btn} onClick={handleDecrement}>
          -
        </button>
        <button className={styles.btn} onClick={handleIncrement}>
          +
        </button>
      </div>
      <button className={styles.addBtn} onClick={handleAddBtnClick}>
        Add to Cart
      </button>
    </div>
  );
}
