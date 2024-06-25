import React from "react";
import styles from "./style.module.css";
import { IoClose } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";

export const AddUser = () => {
  return (
    <form className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title_icon}>
          <FaUserEdit />
        </span>
        <h1 className={styles.title}>Kullanıcı Atama</h1>
        <button className={styles.icon}>
          <IoClose />
        </button>
      </div>
      <div className={styles.main}>
        <div className={styles.main_content}>
          <div className={styles.input_group}>
            <label
              htmlFor="topic"
              className={styles.label}>
              Kullanıcılar
            </label>
            <input
              type="text"
              className={styles.search}
              placeholder="Bir Kullanıcı Arayın."
            />
            <div className={styles.users}>
              <div className={styles.user_content}>
                <div className={styles.user_info}>
                  <div className={styles.user_profile}></div>
                  <div className={styles.user_info_text}>
                    <div className={styles.user_name}>Yunus Emre Korkmaz</div>
                    <div className={styles.user_role}>Developer</div>
                  </div>
                </div>
                <label className="user-check-container">
                  <input
                    type="checkbox"
                    className="user-check-input"
                  />
                  <svg
                    viewBox="0 0 384 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="user-check-clipboard">
                    <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 384 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="user-check-clipboard-checked">
                    <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                  </svg>
                </label>
              </div>
              <hr className={styles.divider} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <button className={`${styles.cancel} ${styles.btn}`}>İptal Et</button>
        <button className={`${styles.save} ${styles.btn}`}>Görevlendir</button>
      </div>
    </form>
  );
};
