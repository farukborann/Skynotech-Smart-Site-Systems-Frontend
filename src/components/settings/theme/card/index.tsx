import styles from "./style.module.css";

const ThemeCards = ({ bg }: { bg: string }) => {
  return (
    <div className={styles.preCard}>
      <div className={styles.flexBox}>
        <div className={styles.preCardColor}></div>
        <div
          className={styles.preCardLoad}
          style={{
            background: bg,
            backgroundSize: "200% 100%",
            backgroundPosition: "100% 0",
          }}
        ></div>
      </div>
      <div className={styles.flexBox}>
        <div className={styles.preCardTitle}></div>
        <div className={styles.preCardDesc}></div>
      </div>
    </div>
  );
};

export default ThemeCards;
