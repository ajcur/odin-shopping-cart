import { Trash } from "lucide-react";
import styles from "./CheckoutItem.module.css";

export default function CheckoutItem({
  id,
  title,
  handleAdd,
  handleRemoveOne,
  handleDelete,
  quantity,
}) {
  function handleAddBtnClick() {
    handleAdd(id);
  }

  function handleRemoveBtnClick() {
    handleRemoveOne(id);
  }

  function handleDeleteBtnClick() {
    handleDelete(id);
  }

  return (
    <div className={styles.container}>
      <div className={styles.itemInfo}>
        <div>{title}</div>
      </div>
      <button className={styles.btn} onClick={handleDeleteBtnClick}>
        <Trash className={styles.icon} />
      </button>
      <div className={styles.quantityBox}>
        <button className={styles.btn} onClick={handleRemoveBtnClick}>
          -
        </button>
        <div>{quantity}</div>
        <button className={styles.btn} onClick={handleAddBtnClick}>
          +
        </button>
      </div>
    </div>
  );
}
