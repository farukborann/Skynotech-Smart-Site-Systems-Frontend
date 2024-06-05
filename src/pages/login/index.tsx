import { useState } from "react";
import {
  IoMail,
  IoLockClosed,
  IoEyeOutline,
  IoEyeOffOutline,
} from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginReq } from "../../services/users/";
import { GetProfileThunk } from "../../store/Reducers/Account/thunks";

import styles from "./style.module.css";

export default function LoginPage() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Hata mesajını saklamak için state

  const showPassword = () => {
    setVisible(!visible);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleForm = async (event: any) => {
    event.preventDefault();

    const response = await loginReq({ email, password });

    if ("error" in response) {
      // Hata durumunda hata mesajını uygun şekilde ayarla
      if (response.error.axiosError?.status === 40) {
        setErrorMessage("Şifre Yanlış");
      } else if (response.error.axiosError?.status === 406) {
        setErrorMessage("Kullanıcı Bulunamadı");
      } else {
        // Diğer hata durumları için genel bir mesaj göster
        setErrorMessage("Giriş sırasında bir hata oluştu");
      }

      return;
    }

    // else successful, hata mesajını sıfırla
    setErrorMessage("");
    dispatch(GetProfileThunk() as any);
    navigate("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSide}></div>
        <div className={styles.rightSide}>
          <div className={styles.title}>
            <h1>Hoşgeldiniz</h1>
            <p>Acces your personel account by logging in.</p>
          </div>
          <div className={styles.rightContent}>
            <form onSubmit={handleForm} className={styles.form}>
              <div className={styles.formInput}>
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
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    <IoLockClosed />
                    Parola
                  </label>
                  <input
                    name="password"
                    className={styles.input}
                    type={visible ? "text" : "password"}
                    placeholder="Parola"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <span className={styles.showIcon} onClick={showPassword}>
                    {visible ? <IoEyeOutline /> : <IoEyeOffOutline />}
                  </span>
                  {errorMessage && (
                    <div className={styles.error}>{errorMessage}</div>
                  )}
                  <span className={styles.forgotPassword}>
                    Şifrenizi mi unuttunuz?
                  </span>
                </div>
              </div>
              <button type="submit" className={styles.btn}>
                Giriş Yap
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
