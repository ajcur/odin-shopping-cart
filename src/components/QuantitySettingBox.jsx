import styles from "./QuantitySettingBox.module.css";

export default function QuantitySettingBox({
  quantity,
  handlePlusBtnClick,
  handleMinusBtnClick,
  handleChange,
}) {
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={handleMinusBtnClick}>
        –
      </button>
      <div className={styles.quantity}>
        {handleChange !== undefined ? (
          <input
            className={styles.quantityInput}
            value={quantity}
            type="text"
            inputMode="numeric"
            onChange={handleChange}
          />
        ) : (
          <>{quantity}</>
        )}
      </div>
      <button className={styles.btn} onClick={handlePlusBtnClick}>
        +
      </button>
    </div>
  );
}
