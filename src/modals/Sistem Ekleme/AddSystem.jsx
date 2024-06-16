import React from "react";
import styles from "./style.module.css";
import { IoClose } from "react-icons/io5";
import { MdAddLink } from "react-icons/md";

export const AddSystem = () => {
  return (
    <form className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title_icon}>
          <MdAddLink />
        </span>
        <h1 className={styles.title}>Sistem Ekle</h1>
        <button className={styles.icon}>
          <IoClose />
        </button>
      </div>
      <div className={styles.main}>
        <div className={styles.input_group}>
          <label
            htmlFor="topic"
            className={styles.label}>
            Sistem Tipi *
          </label>
          <div className={styles.systems}>
            <label className={styles.system_label}>
              <input
                name="system"
                type="radio"
                className={styles.input}
              />
              Bahçe Sulama
            </label>
            <label className={styles.system_label}>
              <input
                name="system"
                type="radio"
                className={styles.input}
              />
              Çevre Aydınlatma
            </label>
            <label className={styles.system_label}>
              <input
                name="system"
                type="radio"
                className={styles.input}
              />
              Havuz
            </label>
            <label className={styles.system_label}>
              <input
                name="system"
                type="radio"
                className={styles.input}
              />
              Havalandırma Sistemleri
            </label>
            <label className={styles.system_label}>
              <input
                name="system"
                type="radio"
                className={styles.input}
              />
              Boiler Sistemi
            </label>
          </div>
        </div>
        <div className={styles.input_group}>
          <label
            htmlFor="topic"
            className={styles.label}>
            Kontak Sayısı *
          </label>
          <div className={styles.shorts}>
            <label className={styles.short_label}>
              <input
                name="short"
                type="radio"
                className={styles.input}
              />
              8<span className={styles.kontak_span}>Kontak</span>
            </label>
            <label className={styles.short_label}>
              <input
                name="short"
                type="radio"
                className={styles.input}
              />
              16
              <span className={styles.kontak_span}>Kontak</span>
            </label>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <button className={`${styles.cancel} ${styles.btn}`}>İptal Et</button>
        <button className={`${styles.save} ${styles.btn}`}>
          Sistem Oluştur
        </button>
      </div>
    </form>
  );
};
