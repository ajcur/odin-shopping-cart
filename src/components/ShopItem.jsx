import { useState } from "react";
import styles from "./ShopItem.module.css";
import QuantitySettingBox from "./QuantitySettingBox";

export default function ShopItem({ id, title, imgUrl, price, handleAdd }) {
  const [quantity, setQuantity] = useState(1);
  const quantityText = quantity.toString();

  function handleChange(e) {
    e.target.value.replace(/\D/, "");
    let inputNum = Number(e.target.value);
    inputNum > 0 ? setQuantity(inputNum) : setQuantity(0);
  }

  function handlePlusBtnClick() {
    setQuantity(quantity + 1);
  }

  function handleMinusBtnClick() {
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
      <img className={styles.img} src={imgUrl} />
      <div className={styles.price}>€ {price}</div>
      <div className={styles.title}>{title}</div>
      <QuantitySettingBox
        className={styles.quantityBox}
        quantity={quantity}
        handlePlusBtnClick={handlePlusBtnClick}
        handleMinusBtnClick={handleMinusBtnClick}
        handleChange={handleChange}
      />
      <button className={styles.addBtn} onClick={handleAddBtnClick}>
        Add to Cart
      </button>
    </div>
  );
}
