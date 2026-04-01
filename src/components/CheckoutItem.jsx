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
      <div className={styles.itemHeader}>
        <div className={styles.title}>{title}</div>
        <button className={styles.deleteBtn} onClick={handleDeleteBtnClick}>
          <Trash className={styles.icon} />
        </button>
      </div>
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
