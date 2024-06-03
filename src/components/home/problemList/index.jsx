import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import styles from "./style.module.css";

const ProblemList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h6 className={styles.title}>Çözülen Problemler</h6>
        {isOpen ? (
          <FaAngleDown
            className={styles.icon}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        ) : (
          <FaAngleUp
            className={styles.icon}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        )}
      </div>
      <div className={isOpen ? styles.content : styles.open}>
        <p className={styles.problemDiv}>Henüz çözülmüş bir problem yoktur.</p>
      </div>
    </div>
  );
};

export default ProblemList;
