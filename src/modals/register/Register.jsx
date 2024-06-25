import React from "react";
import styles from "./style.module.css";
import { IoMail, IoLockClosed } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { TbCirclesRelation } from "react-icons/tb";

export const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.title}>
          <h1>Kaydol</h1>
          <p>Acces your personel account by logging in.</p>
        </div>
        <div className={styles.rightContent}>
          <form className={styles.signup}>
            <div className={styles.formInput}>
              <div className={styles.flex_input}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    <IoPersonSharp />
                    Ad
                  </label>
                  <input
                    className={styles.input}
                    name="name"
                    type="text"
                    placeholder="Adınız"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    <TbCirclesRelation />
                    Soyad
                  </label>
                  <input
                    className={styles.input}
                    name="lastName"
                    type="text"
                    placeholder="Soyadınız"
                  />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  <IoMail />
                  Email
                </label>
                <input
                  className={styles.input}
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  <FaPhone />
                  Telefon
                </label>
                <input
                  name="password"
                  className={styles.input}
                  placeholder="+90 000 000 00 00"
                />
              </div>
              <div className={styles.flex_input}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    <IoLockClosed />
                    Parola
                  </label>
                  <input
                    className={styles.input}
                    name="name"
                    type="text"
                    placeholder="**********"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    <IoLockClosed />
                    Parola Tekrarı
                  </label>
                  <input
                    className={styles.input_lastname}
                    name="lastName"
                    type="text"
                    placeholder="**********"
                  />
                </div>
              </div>
            </div>
            <div className={styles.btn_group}>
              <Link
                className={styles.btn_back}
                href="/">
                Giriş Yapmaya Geri Dön
              </Link>
              <button
                type="submit"
                className={styles.btn}>
                Kaydol
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.bg}></div>
    </div>
  );
};
