import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { uploadPP } from "src/services/upload";
import { RootState } from "src/store/Reducers";

import styles from "./style.module.css";

const UploadPP = () => {
  const userData = useSelector((state: RootState) => state.userData.data);
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files.length) return;

    try {
      const file = e.target.files[0];

      const res = await uploadPP(file);
      if ("error" in res) {
        // TODO: Handle error
        console.error("Error uploading profile picture:", res.error);
        setErrorMessage("Error uploading profile picture");
        return;
      }

      // Yüklenen fotoğrafın URL'ini al

      setProfileImageUrl(res.result.fileUrl);
    } catch (error) {
      console.error("Fotoğraf yükleme hatası");
      setErrorMessage("Fotoğraf yükleme hatası");
    }
  };

  return (
    <div className={styles.container}>
      <img
        src={profileImageUrl || userData?.profilePhoto || "/profil.svg"} // profileImageUrl mevcut ise onu kullan, aksi halde userData.profile kullan
        alt={`${userData?.firstName} ${userData?.lastName}`}
        height={100}
        width={100}
        className={styles.img}
      />
      <div className={styles.upload}>
        <label className={styles.label}>
          Fotoğraf Yükle
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className={styles.input}
          />
        </label>
        <p className={styles.info}>
          Yükleyeceğiniz fotoğrafın oranının 1:1 ve maksimum 3 Mb büyüklüğünde
          olmasına dikkat edin.
        </p>
      </div>
    </div>
  );
};

export default UploadPP;
