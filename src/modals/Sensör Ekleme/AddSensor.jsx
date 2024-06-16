import React from "react";
import styles from "./style.module.css";
import { IoClose } from "react-icons/io5";
import { MdFormatListBulletedAdd } from "react-icons/md";

export const AddSensor = () => {
  return (
    <form className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title_icon}>
          <MdFormatListBulletedAdd />
        </span>
        <h1 className={styles.title}>Sensör Ekle</h1>
        <button className={styles.icon}>
          <IoClose />
        </button>
      </div>
      <div className={styles.main}>
        <div className={styles.input_group}>
          <label
            htmlFor="siteName"
            className={styles.label}>
            Sensör Adı
          </label>
          <input
            type="text"
            className={styles.input}
          />
        </div>

        <div className={styles.input_group}>
          <label
            htmlFor="il"
            className={styles.label}>
            Topic
          </label>
          <input
            type="text"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.footer}>
        <button className={`${styles.cancel} ${styles.btn}`}>İptal Et</button>
        <button className={`${styles.save} ${styles.btn}`}>Kaydet</button>
      </div>
    </form>
  );
};
