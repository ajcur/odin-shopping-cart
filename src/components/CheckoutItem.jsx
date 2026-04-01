import { Trash } from "lucide-react";
import styles from "./CheckoutItem.module.css";
import QuantitySettingBox from "./QuantitySettingBox";

export default function CheckoutItem({
  id,
  title,
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
      <QuantitySettingBox
        quantity={quantity}
        handlePlusBtnClick={handlePlusBtnClick}
        handleMinusBtnClick={handleMinusBtnClick}
      />
    </div>
  );
}
