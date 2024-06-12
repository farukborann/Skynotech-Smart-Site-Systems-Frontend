import styles from "./style.module.css";

const DarkModeCard = ({ bg, loadBG }: { bg: string; loadBG: string }) => {
  return (
    <div
      className={styles.preCard}
      style={{
        backgroundColor: bg,
        backgroundSize: "200% 100%",
        backgroundPosition: "100% 0",
      }}
    >
      <div className={styles.flexBox}>
        <div
          className={styles.preCardColor}
          style={{
            background: loadBG,
            backgroundSize: "200% 100%",
            backgroundPosition: "100% 0",
          }}
        ></div>
        <div className={styles.preCardLoad}></div>
      </div>
      <div className={styles.flexBox}>
        <div
          className={styles.preCardTitle}
          style={{
            background: loadBG,
            backgroundSize: "200% 100%",
            backgroundPosition: "100% 0",
          }}
        ></div>
        <div
          className={styles.preCardDesc}
          style={{
            background: loadBG,
            backgroundSize: "200% 100%",
            backgroundPosition: "100% 0",
          }}
        ></div>
      </div>
    </div>
  );
};

export default DarkModeCard;
