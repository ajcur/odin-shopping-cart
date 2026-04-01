import styles from "./QuantitySettingBox.module.css";

export default function QuantitySettingBox({
  quantity,
  handlePlusBtnClick,
  handleMinusBtnClick,
}) {
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={handleMinusBtnClick}>
        -
      </button>
      <div>{quantity}</div>
      <button className={styles.btn} onClick={handlePlusBtnClick}>
        +
      </button>
    </div>
  );
}
