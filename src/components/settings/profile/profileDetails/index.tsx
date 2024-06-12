import { useState } from "react";
import { useSelector } from "react-redux";
import { updateUserReq } from "src/services/users";
import { RootState } from "src/store/Reducers";

import styles from "./style.module.css";

const ProfileDetails = () => {
  const userData = useSelector((state: RootState) => state.userData.data);
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangePassword = async () => {
    if (!newPassword) {
      setErrorMessage("Please enter a new password");
      alert("Parola Giriniz");
    } else {
      if (newPassword !== confirmPassword) {
        setErrorMessage("Yeni şifreler eşleşmiyor.");
        return;
      } else {
        try {
          const res = await updateUserReq(
            { id: userData._id },
            { password: newPassword }
          );

          if ("error" in res) {
            console.error("Error updating password:", res.error);
            setErrorMessage("Error updating password");
            return;
          }

          alert("Parola başarıyla güncellendi.");
        } catch (error) {
          console.error(error);
        }
      }
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleChangePassword();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className={styles.container} action="message">
      <div className={styles.content}>
        <div className={styles.inputDiv}>
          <label className={styles.label} htmlFor="">
            Ad
          </label>
          <input
            disabled
            type="text"
            placeholder={userData.firstName}
            className={styles.input}
          />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label} htmlFor="">
            Soyad
          </label>
          <input
            disabled
            type="text"
            placeholder={userData.lastName}
            className={styles.input}
          />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label} htmlFor="">
            E-mail
          </label>
          <input
            disabled
            type="email"
            placeholder={userData.email}
            className={styles.input}
          />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label} htmlFor="">
            Telefon
          </label>
          <input
            disabled
            type="tel"
            placeholder={userData.phoneNumber}
            className={styles.input}
          />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label} htmlFor="">
            Parola
          </label>
          <input
            type={showPassword ? "text" : "password"}
            value={newPassword}
            className={styles.password}
            onChange={(e) => setNewPassword(e.target.value)}
            autoComplete="new-password"
            placeholder="Yeni Şifrenizi Giriniz."
          />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label} htmlFor="">
            Parola Tekrarı
          </label>
          <input
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            className={styles.password}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
            placeholder="Yeni Şifrenizi Onaylayınız."
          />
          <span
            className={styles.showPassword}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Parolayı Gizle" : "Parolayı Göster"}
          </span>
        </div>
      </div>
      <div className={styles.buttons}>
        <button
          className={`${styles.submit} ${styles.btn}`}
          type="submit"
          onClick={handleSubmit}
        >
          Değişiklikleri Kaydet
        </button>
        <button className={`${styles.cancel} ${styles.btn}`} type="reset">
          Vazgeç
        </button>
      </div>
    </form>
  );
};

export default ProfileDetails;
