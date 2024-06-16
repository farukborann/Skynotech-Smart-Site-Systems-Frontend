import React from "react";
import styles from "./style.module.css";
import { IoClose } from "react-icons/io5";
import { MdOutlineAddHomeWork } from "react-icons/md";

export const AddSite = () => {
  return (
    <form className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title_icon}>
          <MdOutlineAddHomeWork />
        </span>
        <h1 className={styles.title}>Site Ekle</h1>
        <button className={styles.icon}>
          <IoClose />
        </button>
      </div>
      <div className={styles.main}>
        <div className={styles.main_content}>
          <div className={styles.input_group}>
            <label
              htmlFor="siteName"
              className={styles.label}>
              Site Adı
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
              İl
            </label>
            <input
              type="text"
              className={styles.input}
            />
          </div>
          <div className={styles.input_group}>
            <label
              htmlFor="ilce"
              className={styles.label}>
              İlçe
            </label>
            <input
              type="text"
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.main_content}>
          <div className={styles.input_group}>
            <label
              htmlFor="address"
              className={styles.label}>
              Site Adresi
            </label>
            <textarea
              type="text"
              className={styles.input_address}
            />
          </div>
          <div className={styles.input_group}>
            <label
              htmlFor="topic"
              className={styles.label}>
              Topic Adı
            </label>
            <input
              type="text"
              className={styles.input}
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <button className={`${styles.cancel} ${styles.btn}`}>İptal Et</button>
        <button className={`${styles.save} ${styles.btn}`}>Site Oluştur</button>
      </div>
    </form>
  );
};
