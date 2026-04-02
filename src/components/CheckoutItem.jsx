import { Trash } from "lucide-react";
import styles from "./CheckoutItem.module.css";
import QuantitySettingBox from "./QuantitySettingBox";

export default function CheckoutItem({
  id,
  title,
  imgUrl,
  price,
  handleAdd,
  handleRemoveOne,
  handleDelete,
  quantity,
}) {
  function handlePlusBtnClick() {
    handleAdd(id);
  }

  function handleMinusBtnClick() {
    handleRemoveOne(id);
  }

  function handleDeleteBtnClick() {
    handleDelete(id);
  }

  return (
    <div className={styles.container}>
      <div className={styles.itemHeader}>
        <div className={styles.title}>{title}</div>
        <button className={styles.deleteBtn} onClick={handleDeleteBtnClick}>
          <Trash className={styles.icon} />
        </button>
      </div>
      <div className={styles.itemDetails}>
        <img className={styles.img} src={imgUrl} />
        <div className={styles.subtotal}>{`€ ${price * quantity}`}</div>
        <div className={styles.priceEach}>{`€ ${price} × ${quantity}`}</div>
        <QuantitySettingBox
          className={styles.quantityBox}
          quantity={quantity}
          handlePlusBtnClick={handlePlusBtnClick}
          handleMinusBtnClick={handleMinusBtnClick}
        />
      </div>
    </div>
  );
}
