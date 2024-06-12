import { BsArrowUpRight } from "react-icons/bs";

import styles from "./style.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.text}>
        <h3 className={styles.secTitle}>İletişim & Destek</h3>
        <h4 className={styles.secInfo}>
          Sizinle iletişim kurabilmek ve her türlü sorunuz veya gereksiniminiz
          için destek olabilmek için buradayız. Sorularınızı, geri
          bildirimlerinizi veya destek taleplerinizi iletmek için bizimle
          iletişime geçin!
        </h4>
      </div>
      <div className={styles.contactDiv}>
        <form className={styles.form} action="message">
          <div className={styles.textarea}>
            <label className={styles.label} htmlFor="messageBox">
              Probleminizi tanımlayınız
            </label>
            <textarea
              name="issue"
              id="messageBox"
              required
              placeholder="Probleminizi detaylıca açıklayınız.."
              className={styles.problem}
            />
          </div>
          <button className={styles.button} type="submit">
            Gönder
            <BsArrowUpRight />
          </button>
        </form>
        <div className={styles.rightSec}></div>
      </div>
    </div>
  );
};
export default Contact;
