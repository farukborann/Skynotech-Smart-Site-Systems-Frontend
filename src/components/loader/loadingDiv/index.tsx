import styles from "./style.module.css";

const LoadingDiv = () => {
  return (
    <div className={styles.preCard}>
      <div className={styles.flexBox}>
        <div className={styles.preCardColor}></div>
      </div>
      <div className={styles.flexBox}>
        <div className={styles.preCardTitle}></div>
        <div className={styles.preCardDesc}></div>
      </div>
    </div>
  );
};

export default LoadingDiv;
